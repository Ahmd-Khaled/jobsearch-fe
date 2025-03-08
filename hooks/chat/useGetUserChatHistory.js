"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import { baseUrl } from "../functions/baseUrl";

const useGetUserChatHistory = (userId) => {
  const router = useRouter();

  console.log("....................... userId:", userId);

  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const response = await getData(`${baseUrl}/chat/${userId}`, {
        // next: { revalidate: 3600 },
        // cache: 'no-store',
      });
      console.log("--------response:", response);

      if (response) {
        setLoading(false);
        if (response.status) {
          if (response.data) {
            setChatHistory(response.data);
          }
        }
      }
    };

    run();
  }, [userId]);

  return [chatHistory, loading];
};

export default useGetUserChatHistory;
