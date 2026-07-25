import type { Metadata } from "next";
import "./globals.css";

const description =
  "Pengcheng Zhang is a researcher and engineer working on vector databases, OLAP systems, approximate nearest-neighbor search, and multi-modal lakehouses.";

export const metadata: Metadata = {
  title: "Pengcheng Zhang - Homepage",
  description,
  icons: {
    icon: "/pengcheng-zhang.png",
    shortcut: "/pengcheng-zhang.png",
    apple: "/pengcheng-zhang.png",
  },
  openGraph: {
    title: "Pengcheng Zhang",
    description,
    type: "profile",
    siteName: "Pengcheng Zhang",
  },
  twitter: {
    card: "summary",
    title: "Pengcheng Zhang",
    description,
  },
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
