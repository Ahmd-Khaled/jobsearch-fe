"use client";
import { baseUrl } from "@/hooks/functions/baseUrl";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleBtn = () => {
  const handleGoogleLogin = async (response) => {
    const idToken = response.credential;

    try {
      const res = await axios.post(`${baseUrl}/auth/signin-google`, {
        idToken,
      });

      console.log("User signed in successfully", res.data);
    } catch (err) {
      console.log("Signin failed", err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => console.log("Login Failed")}
    />
  );
};

export default GoogleBtn;
