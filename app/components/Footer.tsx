import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div 
            className="flex font-outfit flex-col py-5 gap-2 justify-center items-center text-lg 
            bg-accentgrey text-white z-2 
            md:flex-row md:gap-10 lg:gap-15 xl:gap-30 sm:h-auto md:h-[4vw]"
        >
            <Link href="/frequent">Frequent Diner</Link>
            <Link href="/employment">Employment</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="https://www.lettuce.com/" target="_blank" rel="noopener noreferrer">LEYE.COM</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
        </div>
    )
}