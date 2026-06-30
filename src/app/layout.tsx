import type { Metadata } from "next";
import { Inter , Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
})

export const metadata: Metadata = {
  title: "IKASA",
  description: "Jaringan Alumni SMA IT Al Irsyad Purwokerto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        

        <main className="flex-1">
          {children}
        </main>

        
      </body>
    </html>
  );
}