import type { Metadata } from "next";
import { Barlow, Permanent_Marker } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-barlow",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Claim Your £100 Nando's Gift Card",
  description: "Follow simple steps to claim your £100 Nando's gift card reward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${permanentMarker.variable}`}>
        {children}
      </body>
    </html>
  );
}
