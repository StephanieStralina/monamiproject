import React from "react"; 
import Image from "next/image"; 

export default function Reservation() {
    return (
        <div className="bg-accentwhite h-[60vmin] flex">
            <div className="flex-[2] flex flex-col items-center">
                <h2 className="text-center pt-30 pl-6 mb-2 font-baskervville text-[clamp(1rem,4.8vmin,3rem)]">Make a Reservation</h2>
                <form className="flex flex-col w-[45vmin] gap-3 text-left font-outfit pl-5">
                    <label htmlFor="people" className="sr-only">Number of People</label>
                    <input 
                    type="text" 
                    placeholder="2 people"
                    className="text-center border border-maingreen bg-white px-4 py-2 rounded-tl-xl focus:outline-none"
                    />
                    <label htmlFor="date" className="sr-only">Reservation Date</label>
                    <input 
                    type="text" 
                    placeholder="Feb 28, 2018"
                    className="text-center border border-maingreen bg-white px-4 py-2 focus:outline-none"
                    />
                    <label htmlFor="time" className="sr-only">Reservation Time</label>
                    <input 
                    type="text" 
                    placeholder="7:00pm"
                    className="text-center border border-maingreen bg-white px-4 py-2 focus:outline-none"
                    />
                    <button 
                    type="submit"
                    className="font-baskervville 
                    bg-mainblue 
                    text-white px-4 py-2 
                    uppercase 
                    text-xl
                    rounded-br-xl 
                    mt-1">
                    Find a Table
                    </button>
                </form>
            </div>
            <div className="flex-[3]">
                <Image 
                    src="/img/salmon.jpg"
                    width={1200}
                    height={800}
                    className="h-full object-cover object-top-left"
                    alt="Picture of salmon"
                    />
            </div>
        </div>
    )
}