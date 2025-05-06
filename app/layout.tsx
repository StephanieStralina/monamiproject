import type { Metadata } from "next";
import { Baskervville, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "Mon Ami Gabi Chicago",
  description: "Located in the heart of Lincoln Park, Mon Ami Gabi is a classic French bistro serving delicious French food.",
  keywords: ["French restaurant Chicago", "Chicago dining", "Mon Ami Gabi", "Lincoln Park restaurant", "French bistro Chicago"],
};
//would add opengraph, etc.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.png" />
      </head>
      <body
        className={`${baskervville.variable} ${outfit.variable} antialiased flex flex-col`}
      >
        <header role="banner">
          <Navbar />
        </header>
        <main role="main" className="flex-grow">
          {children}
        </main>
        <footer role="contentinfo">
          <nav aria-label="Footer navigation">
            <Footer />
          </nav>
        </footer>
      </body>
    </html>
  );
}
