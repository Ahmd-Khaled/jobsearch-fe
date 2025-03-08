import Cookies from "js-cookie";

let token;
let userId;
let role;
if (typeof window !== "undefined") {
  token = Cookies.get("token") || "";
  userId = Cookies.get("userId") || "";
  role = Cookies.get("role") || "";
}

export const getData = async (url, type) => {
  const res = await fetch(url, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      allow_headers: ["Content-Type", "Authorization", "language"],
      "Accept-Language": "*",
      lang: "en",
      Authorization: `${role} ${token}`,
    },
    type,
  });

  // console.log("=======url from getData()=====", url)
  // console.log("=======res from getData()=====", res)

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getDataWithToken = async (url, type, locale, userToken) => {
  const res = await fetch(url, {
    mode: "no-cors",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      allow_headers: ["Content-Type", "Authorization", "language"],
      "Accept-Language": "*",
      lang: "en",
      Authorization: `${role} ${token}`,
    },
    type,
  });

  // console.log("=======url from getData()=====", url)
  // console.log("=======res from getData()=====", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
