import { useMsal } from "@azure/msal-react";
import { IonButton } from "@ionic/react";
import { useEffect } from "react";
import { loginRequest } from "../authConfig";
import "./ExploreContainer.css";
import { NavigationAuthenticationClient } from "./NavigationAuthenticationClient";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.setNavigationClient(new NavigationAuthenticationClient(instance));
  }, []);

  const handleLogin = async () => {
    // instance.loginRedirect(loginRequest);
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error("MSAL Login Error", e);
    });
    // console.log("AAA", instance.getConfiguration());

    // instance.loginRedirect(loginRequest).catch((e: any) => {
    //   console.error("EE", e);
    // });

    // const loginUrl = `https://identity-uat.stuff.co.nz/stuffnebb2cuat.onmicrosoft.com/b2c_1a_signup_signin_upfront_data_capture/oauth2/v2.0/authorize?client_id=4eda3b8b-5dd6-4ae1-bef3-ec4780276f79&scope=offline_access%20openid%20profile&redirect_uri=http%3A%2F%2Flocalhost%3A4200&client-request-id=a71a36fd-3869-48bd-959c-ddbd516d15e5&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.37.1&client_info=1&code_challenge=qT1bMNwj7EJWvLnjMNXXfeWuiyqd34iixrUnsSjVXjY&code_challenge_method=S256&nonce=c234fc70-5382-4f5d-8363-df80cedeaa9f&state=eyJpZCI6ImI1NjliMTU1LTFlYTEtNDU3Mi1iODRkLWZjNjI2OWUyNGJjOSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D`;

    // const authorityUrl =
    //   "https://mastheaddemo.b2clogin.com/mastheaddemo.onmicrosoft.com/B2C_1_MASTHEAD_SIGNUP_SIGNIN";
    // // const clientId = "4eda3b8b-5dd6-4ae1-bef3-ec4780276f79";
    // const clientId = "08800041-916f-44c4-a312-a1148e84d2f1";

    // // const redirectUri = "http://localhost:8100";
    // const redirectUri = "msauth.nz.co.rooban.masthead://auth";
    // const scopes = ["offline_access", "openid"];

    // const loginUrl = `${authorityUrl}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    //   redirectUri
    // )}&scope=${encodeURIComponent(
    //   scopes.join(" ")
    // )}&code_challenge=qT1bMNwj7EJWvLnjMNXXfeWuiyqd34iixrUnsSjVXjY&code_challenge_method=S256`;

    // try {
    //   await Browser.open({ url: loginUrl, presentationStyle: "popover" });

    //   Browser.addListener("browserFinished", async () => {
    //     console.log("aaaa");
    //     await Browser.close();
    //   });
    // } catch (error) {
    //   // Handle error
    //   console.log("Browser open error", error);
    // }

    // console.log(loginUrl);
    // const browser = Browser;
    // await browser.open({ url: loginUrl, presentationStyle: "popover" });
  };

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic </p>
      <IonButton
        onClick={() => {
          return handleLogin();
        }}
      >
        Login
      </IonButton>

      <IonButton
        onClick={() => {
          instance.logoutRedirect();
        }}
      >
        Logout
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
