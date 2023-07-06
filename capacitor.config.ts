import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "nz.co.rooban.masthead",
  appName: "myIonicApp",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  ios: {
    path: "ios",
    scheme: "App",
    contentInset: "automatic",
  },
};

export default config;
