import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import TopNavbar from "@/components/navigations/TopNavbar";
import { inter } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
