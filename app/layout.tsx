import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesale Program | I Scream Gelato",
  description: "Partner with I Scream Gelato to offer authentic handcrafted Italian gelato at your restaurant, hotel, café, or event venue. Apply for our wholesale program today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
