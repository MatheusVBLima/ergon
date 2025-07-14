import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ErgonTech",
  description: "ErgonTech creates custom software solutions, stunning designs and powerful automations to transform your business operations and drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
