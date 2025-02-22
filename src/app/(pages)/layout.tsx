"use client";

import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import "@/styles/global.scss";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="pages-layout">
        <Navbar />
        {children}
        <Footer />
      </div>
  );
}
