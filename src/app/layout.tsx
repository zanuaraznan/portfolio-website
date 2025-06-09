import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import WavyParticles from "@/component/background/WavyParticles";
import { BackgroundContextProvider } from "../context/BackgroundContext";
import { ThemeContextProvider } from "../context/ThemeContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zanuar Rasyidin | Personal",
  description: "Just a personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <BackgroundContextProvider>
        <html lang="en">
          <body
            className={`${plusJakarta.className} antialiased bg-gray-100 text-zinc-800 dark:text-white dark:bg-zinc-900 text-sm md:text-base`}>
            <WavyParticles count={15} size={120} velocity={4} />
            <Navbar />
            <main className="container">{children}</main>
          </body>
        </html>
      </BackgroundContextProvider>
    </ThemeContextProvider>
  );
}
