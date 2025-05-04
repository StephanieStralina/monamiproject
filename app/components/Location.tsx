import React from "react";
import Link from "next/link";

export default function Location() {
    return (
        <div className="current-location flex flex-col border-none sm:border">
            <p className="font-baskervville text-[4vw] sm:text-[2vw]">Chicago</p>
            <Link href="/" className="font-outfit underline sm:no-underline">CHANGE LOCATION</Link>
        </div>
    )
}