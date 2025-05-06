import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HoursInfo() {
  return (
    <div className="bg-mainblue h-[75vmin] flex pb-]">
      <div className="flex-[1] h-full w-full">
        <Image
          src="/img/charcuterie1.png"
          width={582}
          height={530}
          className="h-full w-auto object-cover object-right 
          max-h-[70vmin] md:-translate-x-[4vmin]"
          alt="Picture of charcuterie board"
        />
      </div>
      <div
        className="flex-[2] md:flex-[1] items-end
        w-full font-outfit font-light text-white 
        pt-10 sm:pt-15 xl:pt-20">
        <div
          className="flex flex-col align-left pl-[5vmin]
          sm:pl-[10vmin] sm:mr-15 lg:pl-[20vmin]">
          <h2
            className="font-baskervville text-[4vmin] sm:text-[5vmin] 
            w-full whitespace-nowrap">
            Mon Ami Gabi Chicago
          </h2>
          <Link
            href="/"
            className="italic text-[1.8vmin] text-xs md:text-sm">
            CHANGE LOCATION
          </Link>
          <table
            className="table-auto items-center font-extralight text-[2.7vmin] 
            md:text-md mt-5 md:mt-10 w-[50vmin] md:w-[vmin]"
            aria-label="Mon Ami Gabi Chicago open hours">
            <caption className="sr-only">Opening hours by day</caption>
            <thead>
              <tr>
                <th className="sr-only">Day</th>
                <th className="sr-only">Opening time</th>
                <th className="sr-only">Separator</th>
                <th className="sr-only">Closing time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mon - Thu</td>
                <td className="text-left whitespace-nowrap w-1 ">5:00pm</td>
                <td className="text-center pl-1">—</td>
                <td className="text-right whitespace-nowrap w-1">9:30pm</td>
              </tr>
              <tr>
                <td>Fri - Sat</td>
                <td className="text-left whitespace-nowrap w-1">5:00pm</td>
                <td className="text-center pl-1">—</td>
                <td className="text-right whitespace-nowrap w-1">10:30pm</td>
              </tr>
              <tr>
                <td>Sun Brunch</td>
                <td className="text-left whitespace-nowrap w-1">10:00am</td>
                <td className="text-center pl-1">—</td>
                <td className="text-right whitespace-nowrap w-1">2:00pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td className="text-left whitespace-nowrap w-1">5:00pm</td>
                <td className="text-center pl-1">—</td>
                <td className="text-right whitespace-nowrap w-1">8:30pm</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col text-[2.7vmin] font-extralight gap-2 mt-5">
            <div className="flex items-center">
              <Image
                src="/img/mail.png"
                width={1024}
                height={1024}
                className="w-6 h-6 sm:w-9 sm:h-9"
                alt="Mail icon"
                aria-label="Contact us via email" />
              <a href="mailto:info@monamigabi.com" className="pl-2">Contact Us</a>
            </div>
            <div className="flex items-center">
              <Image
                src="/img/phone.png"
                width={1024}
                height={1024}
                className="w-6 h-6 sm:w-9 sm:h-9"
                alt="Phone Icon"
                aria-label="Give us a call" />
              <a href="tel:+17733488886" className="pl-2">773.348.8886</a>
            </div>
            <div className="flex items-start">
              <Image
                src="/img/map.png"
                width={1024}
                height={1024}
                className="w-6 h-6 sm:w-9 sm:h-9"
                alt="Google Maps Icon"
                aria-label="Come visit us!" />
              <Link href="/Maps" className="pl-2">
                <address className="not-italic">
                  <p>2300 N. Lincoln Park West</p>
                  <p>Chicago, IL 60614</p>
                </address>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
