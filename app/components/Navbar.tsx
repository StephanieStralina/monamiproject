import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//To-do, dynamic styling for socials based on location

const navLinks = [
    { name: "Reservations", href: "/reservations" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Private Parties", href: "/parties" },
    { name: "Pick Up", href: "/pickup" },
    { name: "Delivery", href: "/delivery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
]

export default function Navbar() {
    return ( 
        <nav role="navigation" aria-label="Main site navigation">
            <div className="social-container">
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
                <div className="decor-line hidden lg:block" aria-hidden="true" />
                <div className="decor-dot hidden lg:block" aria-hidden="true" />
            </div>
            <div className="logo">
            <Link href="/">
                <Image 
                    src="/img/logo.png" 
                    width={938}
                    height={196}
                    className="w-auto max-h-[12vmin] pl-5"
                    alt="Mon Ami Gabi Logo with text reading A Classic French Bistro"
                />
              </Link>
            </div>
            <div className="location-container">
                <div className="current-location">
                    <p className="font-baskervville text-[2vw]">Chicago</p>
                    <Link href="/" className="font-outfit">CHANGE LOCATION</Link>
                </div>
                <div className="decor-line right" aria-hidden="true" />
                <div className="decor-dot right" aria-hidden="true" />
            </div>
                <ul className="nav-links">
                {navLinks.slice(0, 2).map(link => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                {navLinks.slice(2).map(link => (
                    <li key={link.name} className="hidden lg:inline">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                </ul>     
          </nav>
    )
}
