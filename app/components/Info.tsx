import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
  return (
    <div className="bg-mainblue h-[70vmin] flex pb-]">
      <div className="flex-[1] h-full w-full">
        <Image
          src="/img/charcuterie1.png"
          width={582}
          height={530}
          className="h-full w-auto object-cover object-right max-h-[70vmin] md:-translate-x-[4vmin]"
          alt="Picture of charcuterie board"
        />
      </div>
      <div className="flex-[2] md:flex-[1] w-full font-outfit font-light text-white pt-10 sm:pt-15 items-end">
        <div className="flex flex-col align-left pl-20 sm:pl-30">
          <h2 className="font-baskervville text-[4vmin] md:text-4xl">
            Mon Ami Gabi Chicago
          </h2>
          <Link href="/" className="italic text-[1.8vmin] text-xs md:text-sm">
            CHANGE LOCATION
          </Link>
          <table className="table-auto font-extralight items-center text-[2.7vmin] md:text-md mt-5 md:mt-10 w-[50vmin] md:w-[46vmin]">
            <thead>
              <tr>
                <th className="sr-only">Day</th>
                <th className="sr-only">Opens</th>
                <th className="sr-only">Separator</th>
                <th className="sr-only">Closes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mon - Thu</td>
                <td className="text-right">5:00pm</td>
                <td className="text-right px-1">-</td>
                <td className="pl-2">9:30pm</td>
              </tr>
              <tr>
                <td>Fri - Sat</td>
                <td className="text-right">5:00pm</td>
                <td className="text-right px-1">-</td>
                <td className="pl-2">10:30pm</td>
              </tr>
              <tr>
                <td>Sun Brunch</td>
                <td className="text-right">10:00am</td>
                <td className="text-right px-1">-</td>
                <td className="pl-2">2:00pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td className="text-right">5:00pm</td>
                <td className="text-right px-1">-</td>
                <td className="pl-2">8:30pm</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5 text-[2.7vmin] font-extralight flex flex-col gap-2">
            <Link href="/contact">Contact Us</Link>
            <p>773.348.8886</p>
            <Link href="/GoogleMaps">
              2300 N. Lincoln Park West<br></br>
              Chicago, IL 60614
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
