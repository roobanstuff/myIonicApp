import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Browser } from "@capacitor/browser";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance
  .handleRedirectPromise()
  .then(async (resp) => {
    localStorage.removeItem("REDIRECTED_FROM_LOGIN");
    console.log("MSAL", resp);

    Browser.close();
  })
  .catch((error) => {
    console.error("MSAL login redirect:", error);
  });

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
