import Footer from "@/frontend/components/shared/Footer";
import Header from "@/frontend/components/shared/Header";
import React from "react";

type LayoutProps = {
  children: any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Header />
      <main className="flex w-full container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
