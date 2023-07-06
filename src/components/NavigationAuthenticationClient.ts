import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser";
import type { IPublicClientApplication } from "@azure/msal-browser";
import { NavigationClient } from "@azure/msal-browser";
import { Capacitor } from "@capacitor/core";

export class NavigationAuthenticationClient extends NavigationClient {
  constructor(private msalInstance: IPublicClientApplication) {
    super();
  }

  async navigateExternal(url: string, options: any): Promise<boolean> {
    if (Capacitor.isNativePlatform()) {
      const browser = InAppBrowser.create(url, "_blank", {
        location: "yes",
        hidenavigationbuttons: "yes",
        clearcache: "yes",
        clearsessioncache: "yes",
        hideurlbar: "yes",
        fullscreen: "yes",
      });
      browser.on("loadstart").subscribe((event: any) => {
        if (event.url.includes("confirmed?rememberMe")) {
          browser.close();
          const domain = event.url.split("#")[0];
          const url = event.url.replace(domain, "http://localhost:8100");

          this.msalInstance
            .handleRedirectPromise(url)
            .then((res) => {
              console.log(res?.account?.name + " has authenticated");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } else {
      if (options.noHistory) {
        window.location.replace(url);
      } else {
        window.location.assign(url);
      }
    }
    return true;
  }
}
