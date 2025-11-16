import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumar Packers & Movers",
  description: "Professional Moving Services Across India",
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
