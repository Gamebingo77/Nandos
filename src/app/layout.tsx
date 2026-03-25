import { Permanent_Marker, Barlow } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Claim Your £100 Nando's Gift Card",
  description: "Follow these simple steps to get started",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${permanentMarker.variable} ${barlow.variable} font-sans bg-[#f5f5f5] text-[#111] antialiased`}>
        {children}
      </body>
    </html>
  );
}