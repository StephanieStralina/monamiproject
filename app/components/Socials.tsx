import React from "react";

export default function Socials() {
    return (
        <div className="social-icons flex gap-2 pl-6">
            <a href="https://x.com/MonAmiGabiChi" target='_blank' aria-label="Follow us on Twitter">
                <img src="/img/twitter.svg" alt="" className="h-[5vmin] w-auto"/>
            </a>
            <a href="https://www.instagram.com/monamigabichicago/" target='_blank' aria-label="Follow us on Instagram">
                <img src="/img/instagram.svg" alt="" className="h-[5vmin] w-auto"/>
            </a>
            <a href="https://www.facebook.com/MonAmiGabiChi" target='_blank' aria-label="Like us on Facebook">
                <img src="/img/facebook.svg" alt="" className="h-[5vmin] w-auto"/>
            </a>
        </div>
                
    )
}