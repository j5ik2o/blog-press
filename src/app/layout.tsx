import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { Provider } from "jotai";

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Press",
  description: "Blog Press",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Provider>
        <body className={cn("bg-background antialiased min-h-screen", fontNotoSansJP.className)}>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
