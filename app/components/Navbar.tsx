import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';
import Location from './Location';

//To-do, dynamic styling for socials based on location

const navLinks = [
  { name: 'Reservations', href: '/reservations' },
  { name: 'Menu', href: '/menu' },
  { name: 'Events', href: '/events' },
  { name: 'Private Parties', href: '/parties' },
  { name: 'Pick Up', href: '/pickup' },
  { name: 'Delivery', href: '/delivery' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  return (
    <nav role="navigation" aria-label="Main site navigation">
      <div className="social-container hidden lg:block">
        <Socials />
        <div className="decor-line hidden lg:block" aria-hidden="true" />
        <div className="decor-dot hidden lg:block" aria-hidden="true" />
      </div>
      <div className="logo">
        <Link href="/">
          <Image
            src="/img/logo.png"
            width={938}
            height={196}
            className="w-auto max-h-[12vmin] md:max-h-[8vmin] lg:max-h-[10vmin] sm:pl-3 md:pl-5"
            alt="Mon Ami Gabi Chicago Logo with text below reading A Classic French Bistro"
          />
        </Link>
      </div>
      <div className="location-container hidden sm:block">
        <Location />
        <div className="decor-line right" aria-hidden="true" />
        <div className="decor-dot right" aria-hidden="true" />
      </div>
      <ul className="nav-links hidden lg:flex lg:pt-8">
        {navLinks.map((link) => (
          <li key={link.name} className="hidden lg:flex">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile & Tablet Dropdown */}
      <div className="nav-dropdown sm:block w-full lg:hidden px-0 mt-4">
        <details className="dropdown dropdown-bottom w-full">
          <summary 
            className="font-baskervville bg-mainblue text-white w-full 
            text-lg cursor-pointer p-2 text-center">
            Reservations, Menu and More
          </summary>
          <ul 
          className="w-full items-center shadow menu dropdown-content 
          z-[1] bg-white text-mainblue">
            <li className="block sm:hidden">
              <Location />
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Socials />
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
}
