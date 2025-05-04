import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="font-outfit flex sm:py-5 sm:flex-col sm:gap-2 md:gap-10 lg:gap-15 xl:gap-30 text-lg justify-center items-center bg-accentgrey z-2 sm:h-auto md:h-[4vw] text-white">
            <Link href="/frequent">Frequent Diner</Link>
            <Link href="/employement">Employment</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="https://www.lettuce.com/">LEYE.COM</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
        </footer>
    )
}