import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Image from "next/image";
import Hero from "@/public/hero.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "./footer";
import { AppConfig } from "./app.config";
import { getBaseURL } from "@/lib/base-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.title}`,
  },
  description:
    "私たちは、計測・解析ソリューションの力で、次世代の研究。製造現場を支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        suppressHydrationWarning
      >
        <div className="h-svh w-full absolute top-0 -z-10">
          <Image
            src={Hero}
            alt="hero"
            className="size-full object-cover grayscale-20 scale-x-[-1]"
          />
        </div>
        <ScrollArea className="h-dvh w-full">
          <Header />
          {children}
          <Footer />
        </ScrollArea>
      </body>
    </html>
  );
}
