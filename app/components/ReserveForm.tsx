"use client"
import React from "react";
import Image from "next/image";
import Form from "next/form";

//Click on field, only see number (changeable)
//Click on field - date popup
//Click on time, alter numbers (incremements of 15)
//submit button

export default function Reservation() {
    return (
        <div className="flex relative h-[70vmin] ">
            <div 
            className="z-1 absolute w-full h-full flex flex-col items-center justify-center 
            lg:flex-[2] lg:static pr-[4vmin] pl-[8vmin] lg:bg-accentwhite">
                <h2 className="mb-2 font-baskervville text-[6.5vmin] lg:text-[clamp(1rem,5.6vmin,4rem)] xl:text-[clamp(1rem,7.2vmin,4rem)] text-center w-full">Make a Reservation</h2>
                <Form action="/" className="flex flex-col w-[60vmin] lg:w-full gap-3 text-left font-outfit">
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
                        mt-1"
                        onSubmit={() => console.log("Reservation request submitted!")}
                    >
                        Find a Table
                    </button>
                </Form>
            </div>
            <div className="flex-[3]">
                <div className="relative w-full h-full">
                    <Image
                        src="/img/salmon.jpg"
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover object-top-left -z-1 lg:z-1"
                        alt="A salmon filet with a golden crust topped with a sprig of thyme 
                        sitting on a plate of pomegranate glaze."
                    />
                    <div className="absolute inset-0 bg-accentwhite opacity-70 -z-0 lg:hidden"></div>
                </div>
            </div>
        </div>
    )
}