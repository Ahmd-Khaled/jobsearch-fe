"use client"; // Ensure this is a client component

import { baseUrl } from "@/hooks/functions/baseUrl";
import { sendData } from "@/hooks/functions/sendData";
import { useEffect } from "react";

export default function AutoRefreshTokens() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendData(`${baseUrl}/auth/signin`, "");
        console.log("Auto-refreshed tokens:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch immediately when the component mounts
    fetchData();

    // Set an interval to fetch every 30 minutes (30 * 60 * 1000 ms)
    const interval = setInterval(fetchData, 30 * 60 * 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return null; // This component doesn't render anything
}
