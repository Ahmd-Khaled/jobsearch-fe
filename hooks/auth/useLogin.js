"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { baseUrl } from "../functions/baseUrl";
import { sendData } from "../functions/sendData";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

const useLogin = () => {
  const locale = "en";
  const router = useRouter();
  const pathname = usePathname();

  const [responseFromApi, setResponseFromApi] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const schema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long")
      .required("Password is required"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };

    // console.log("Form submission data:", formData);

    const response = await sendData(`${baseUrl}/auth/signin`, formData, locale);
    setResponseFromApi(response);
    console.log(response);
  };

  useEffect(() => {
    if (responseFromApi) {
      setStatus(responseFromApi?.status);
      if (responseFromApi.status) {
        if (responseFromApi.message) {
          setMessage(responseFromApi.message);
        }
        if (responseFromApi.user) {
          Cookies.set("userData", responseFromApi.user);
        }
        if (responseFromApi.tokens) {
          Cookies.set("token", responseFromApi.tokens.access_token);

          // redirect("/sick-leave-request");
          setTimeout(() => {
            router.push("/messaging");
          }, 2000);
        }
      }
    }
  }, [responseFromApi]);

  return [register, control, onSubmit, handleSubmit, errors, message, status];
};

export default useLogin;
