import Header from "@/components/utils/Header/Header";

export default async function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
