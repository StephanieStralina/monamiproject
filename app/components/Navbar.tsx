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
              <Image 
                src="/img/logo.png" 
                width={938}
                height={196}
                className="w-full h-auto pl-5"
                alt="Mon Ami Gabi Logo with text reading A Classic French Bistro"
              /> 
            </div>
            <div className="current-location">
              Chicago, change location
            </div>
            <div className="nav-links">
              <p>Links</p>
            </div>       
          </nav>
    )
}
