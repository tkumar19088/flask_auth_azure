import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "41dc63c2-35e2-465f-ad60-b14765a08871",
    authority:
      "https://login.microsoftonline.com/b8341c25-e49c-4b6b-adbd-cb7f777aecd7",
    redirectUri: "http://localhost:3000/", // Update this with your actual redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const pca = new PublicClientApplication(msalConfig);

const Login = () => {
  const handleLogin = async () => {
    try {
      const loginResponse = await pca.loginPopup();
      // Use the loginResponse object to get the access token and other user information if needed.
      console.log("Login Response:", loginResponse);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h2>Login with Microsoft</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
