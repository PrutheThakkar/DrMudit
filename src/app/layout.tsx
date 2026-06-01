import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./css/about.css";
import "./css/common.css";
import "./css/inside.css";
import "./css/home.css";
import "./css/expertise.css";
import "./css/insights.css";
import "./css/patient-stories.css";
import "./css/ contact.css";
import "swiper/css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mudit Khanna",
  description: "Orthopaedic Surgeon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}