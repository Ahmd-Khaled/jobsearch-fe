import Header from "@/components/utils/Header/Header";

export default async function MainLayout({ children }) {
  return (
    <main className="bg">
      <Header />
      {children}
    </main>
  );
}
