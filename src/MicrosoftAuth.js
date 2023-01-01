import { PublicClientApplication } from "@azure/msal-browser";
export class MicrosoftAuth {
  constructor (authObj) {
    const msalConfig = {
      auth: {
        clientId: authObj.clientId || "",
        authority: authObj.authority || "https://login.microsoftonline.com/common",
        redirectUri: authObj.redirectUri || window.location.href,
      },
      cache: {
        cacheLocation: authObj.cacheLocation || "localStorage",
        storeAuthStateInCookie: authObj.storeAuthStateInCookie ? storeAuthStateInCookie : false,
      }
    }

    this.msalInstance = new PublicClientApplication(msalConfig);

    this.loginPopup = (request) => {
      const loginRequest = {
        scopes: request.scopes || ["openid", "profile", "User.Read"],
        prompt: request.prompt || "select_account",
        response_type: request.response_type || "id_token",
      };
      return this.msalInstance.loginPopup(loginRequest)
    };
  }
}
