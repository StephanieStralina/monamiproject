import type { Metadata } from "next";
import { Baskervville, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskervville',
});

const outfit = Outfit({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Mon Ami Gabi",
  description: "Located in the heart of Lincoln Park, Mon Ami Gabi is a classic French bistro serving delicious French food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baskervville.variable} ${outfit.variable} antialiased flex flex-col`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          footer stuff here
        </footer>
      </body>
    </html>
  );
}
