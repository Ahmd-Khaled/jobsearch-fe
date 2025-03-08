"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import { baseUrl } from "../functions/baseUrl";

const useGetAllUsers = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const response = await getData(`${baseUrl}/user/all-users`, {
        // next: { revalidate: 3600 },
        // cache: 'no-store',
      });
      console.log("--------response:", response);

      if (response) {
        setLoading(false);
        if (response.status) {
          if (response.data) {
            setAllUsers(response.data);
          }
        }
      }
    };

    run();
  }, []);

  return [allUsers, loading];
};

export default useGetAllUsers;
