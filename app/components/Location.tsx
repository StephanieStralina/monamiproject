'use client'
import React from "react";
import Link from "next/link";

export default function Location() {
    return (
        <div className="current-location flex flex-col border-none sm:border">
            <p className="font-baskervville text-[4vw] sm:text-[2vw]">Chicago</p>
            <Link href="/"
                className="font-outfit underline sm:no-underline"
                aria-label="Change restaurant location to a different Mon Ami Gabi"
                onClick={() => console.log("Location changed!")}>
                CHANGE LOCATION
            </Link>
        </div>
    )
}