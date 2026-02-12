import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono, Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
    themeColor: "#f5f0eb",
};

export const metadata: Metadata = {
    title: "Maintain - Booking Retention for Boutique Fitness",
    description:
        "Reduce no-shows, boost rebookings, and retain more members with the smart scheduling and retention platform built for boutique gyms and fitness studios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
