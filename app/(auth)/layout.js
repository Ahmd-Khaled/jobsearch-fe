import HeaderAuth from "@/components/utils/HeaderAuth/HeaderAuth";
import GoogleProvider from "./GoogleProvider";

export default async function AuthLayout({ children }) {
  return (
    <GoogleProvider>
      <HeaderAuth />
      {children}
    </GoogleProvider>
  );
}
