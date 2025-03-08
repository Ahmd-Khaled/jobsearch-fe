"use client";
import { baseUrl } from "@/hooks/functions/baseUrl";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useGoogleLogin = () => {
  const [googleMsg, setGoogleMsg] = useState(null);
  const [googleStatus, setGoogleStatus] = useState(null);

  const router = useRouter();

  const handleGoogleLogin = async (response) => {
    const idToken = response.credential;

    try {
      const res = await axios.post(`${baseUrl}/auth/signin-google`, {
        idToken,
      });

      console.log("--------res:", res);
      setGoogleMsg(res.data.message);
      setGoogleStatus(res.data.status);
      console.log("User signed in successfully", res.data);
      // redirect("/messaging");
      setTimeout(() => {
        router.push("/messaging");
      }, 3000);
    } catch (err) {
      console.log("Signin failed", err);
      console.log("--------err.name:", err.response);
      if (err.response && err.response.data) {
        setGoogleMsg(err.response.data.message);
        setGoogleStatus(err.response.data.status);
      }
    }
  };
  return [handleGoogleLogin, googleMsg, googleStatus];
};

export default useGoogleLogin;
