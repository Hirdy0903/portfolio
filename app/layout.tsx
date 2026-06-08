import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirdyansh Saxena | Software Engineer Portfolio",
  description: "Portfolio of Hirdyansh Saxena, a Backend and Full Stack Developer skilled in Node.js, React, and AWS.",
  keywords: ["Hirdyansh Saxena", "Software Engineer", "Backend Developer", "Full Stack Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
