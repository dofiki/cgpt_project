import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "700",
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const inter = Inter({
  weight: "700",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChefGPT",
  description: "Recipe Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
