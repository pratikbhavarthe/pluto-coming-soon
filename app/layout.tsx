import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

export const metadata: Metadata = {
  title: "Pluto Mobility — Coming Soon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-dvh">
      <body className={`${jakarta.className} h-dvh bg-black text-white antialiased overflow-hidden overscroll-none`}>
        <Navbar />
        <main className="relative h-dvh pt-16 overflow-hidden bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
