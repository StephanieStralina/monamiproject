import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return ( 
        <nav>
            <div className="social-icons">
              Social Icons
            </div>
            <div className="w-2/5 logo">
            <Link href="/">
                <Image 
                    src="/img/logo.png" 
                    width={938}
                    height={196}
                    className="w-full h-auto pl-5"
                    alt="Mon Ami Gabi Logo with text reading A Classic French Bistro"
                />
              </Link>
            </div>
            <div className="current-location">
              Chicago, change location
            </div>
            <div className="nav-links">
              <Link href="/reservations">Reservations</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/events">Events</Link>
              <Link href="/parties">Private Parties</Link>
              <Link href="/pickup">Pick Up</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/contact">Conatct Us</Link>
              <Link href="/gallery">Gallery</Link>
            </div>       
          </nav>
    )
}
