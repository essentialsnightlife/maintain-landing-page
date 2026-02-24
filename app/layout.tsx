import "./globals.css";

export const metadata = {
    title: "Session Signal - Booking Retention for Boutique Fitness",
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
