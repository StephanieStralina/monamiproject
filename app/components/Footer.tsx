import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div
            className="flex font-outfit flex-col w-full py-5 gap-2 justify-center items-center text-lg 
            bg-accentgrey text-white z-2 
            md:flex-row md:gap-10 lg:gap-15 xl:gap-30 sm:h-auto md:h-[4vw]"
        >
            <Link href="/frequent" className="hover:bg-maingreen w-full text-center">Frequent Diner</Link>
            <Link href="/employment" className="hover:bg-maingreen  w-full text-center">Employment</Link>
            <Link href="/gift-cards" className="hover:bg-maingreen w-full text-center">Gift Cards</Link>
            <Link href="https://www.lettuce.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-maingreen w-full text-center">LEYE.COM</Link>
            <Link href="/terms" className="hover:bg-maingreen w-full text-center">Terms of Use</Link>
            <Link href="/privacy" className="hover:bg-maingreen w-full text-center">Privacy Policy</Link>
        </div>
    )
}