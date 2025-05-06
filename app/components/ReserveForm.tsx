'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Reservation() {
    const [people, setPeople] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isFormFilled = people.trim() !== '' && time.trim() !== '' && date.trim() !== '';
    const dateRegex = /^((Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s\d{1,2},\s\d{2,4}|(0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12]\d|3[01])[\/\-]\d{2,4})$/i;
    const timeRegex = /^(0?[1-9]|1[0-2])(:[0-5][0-9])?\s?(am|pm)$/i;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!dateRegex.test(date.trim())) {
            setError("Please enter a valid date (e.g., Feb 28, 2018, February 28, 2018, 02/28/18 or 02/28/2018)");
            return;
        }

        const [month, day, year] = date.includes("/") ? date.split("/") : [];
        const parsedDate = date.includes("/") && year.length === 4
            ? new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`)
            : new Date(date);
        parsedDate.setHours(0, 0, 0, 0);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (parsedDate < today) {
            setError("Please choose a future date.");
            return;
        }

        if (!timeRegex.test(time.trim())) {
            setError("Please enter a valid time (e.g., 7pm, 7:00pm, 7 pm, or 7:00 pm)");
            return;
        }

        console.log(`Congratulations! You made a reservation for ${people} on ${date} at ${time}`);
        setError(null);
        setIsSubmitted(true);

    };


    return (
        <div className="flex relative h-[70vmin]">

            <div
                className="z-1 absolute w-full h-full flex flex-col items-center 
                justify-center lg:flex-[2] lg:static pr-[4vmin] pl-[8vmin] 
                lg:bg-accentwhite">
                {isSubmitted ? (
                    <div className="text-center" role="status" aria-live="polite">
                        <h2
                            className="font-baskervville text-[5vmin] text-mainblue mb-4">
                            See you soon!
                        </h2>
                        <p className="font-outfit text-lg">
                            Your reservation for <strong>{people}</strong> on
                            <strong>{date}</strong> at <strong>{time}</strong> was
                            successful.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2
                            className="mb-2 font-baskervville text-[6.5vmin] 
                            lg:text-[clamp(1rem,5.6vmin,4rem)] xl:text-[clamp(1rem,7.2vmin,4rem)] 
                            text-center w-full">
                            Make a Reservation
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            role="form" aria-live="polite"
                            className="flex flex-col w-[60vmin] lg:w-full gap-3 text-center font-outfit">

                            <label htmlFor="people" className="sr-only">Number of People</label>
                            <input
                                name="people"
                                id="people"
                                type="number"
                                placeholder="2 people"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                className={`text-center border border-maingreen bg-white px-4 py-2 rounded-tl-xl ${people ? 'text-mainblue' : ''
                                    }`}
                                min={1}
                                aria-label="Number of people"
                                required
                            />

                            <label htmlFor="date" className="sr-only">Reservation Date</label>
                            <input
                                name="date"
                                id="date"
                                type="text"
                                placeholder="Feb 28, 2018"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className={`text-center border border-maingreen bg-white px-4 py-2 ${date ? 'text-mainblue' : ""}`}
                                aria-label="Reservation Date"
                                required
                            />

                            <label htmlFor="time" className="sr-only">Reservation Time</label>
                            <input
                                name="time"
                                id="time"
                                type="text"
                                placeholder="7:00 pm"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className={`text-center border border-maingreen bg-white px-4 py-2 ${time ? 'text-mainblue' : ''}`}
                                aria-label="Reservation Time"
                                required
                            />

                            <button
                                type="submit"
                                className={`font-baskervville px-4 py-2 uppercase text-xl rounded-br-xl 
                                mt-1 text-white transition-colors
                                ${isFormFilled ? 'bg-mainblue hover:bg-mainred' : 'bg-mainblue opacity-50 cursor-not-allowed'}`}
                                disabled={!isFormFilled}
                            >
                                Find a Table
                            </button>
                        </form>
                    </>
                )}
                {error && (
                    <p className="text-white bg-red-700 px-4 text-lg font-bold mt-4" role="alert">
                        {error}
                    </p>
                )}

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
                    <div className="absolute inset-0 bg-accentwhite opacity-70 -z-0 lg:hidden" />
                </div>
            </div>
        </div>
    );
}
