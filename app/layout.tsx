import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Metadata } from 'next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MedicMate",
  description: "Your personal medication management buddy",
  icons: {
    icon: 'pink_logo.png',
    shortcut: 'pink_logo.png',
    apple: 'pink_logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'pink_logo.png',
    }
  }
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}