'use client'
import React, { useEffect, useState } from "react";

//Display as cards w/ next buttons

interface Event {
    ID: number;
    title: string;
    content: string;
    cta_url: string;
    cta_btn: string;
    permalink: string;
    cities: string[];
    featured_image: {
        url: string;
        alt_text: string;
    }
    date: string | null;
    created_at?: string;
}


export default function Events() {
    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [activeCity, setActiveCity] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch(
                "https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events",
            );
            const data: Event[] = await res.json();

            const upcomingEvents = data.filter((event) => {
                const cleanedDate = event.date?.replace(/(\d+)(st|nd|rd|th)/, ""); //regex for date parsing
                const parsedDate = cleanedDate ? new Date(cleanedDate) : null;
                return !parsedDate || parsedDate >= new Date();
            });

            setAllEvents(upcomingEvents);
            setFilteredEvents(upcomingEvents);
        };

        fetchEvents();
    }, []);

    const cityButtons = Array.from(
        new Set(allEvents.flatMap((event) => event.cities))
    ).sort();

    const handleFilterByCity = (city: string) => {
        setActiveCity(city);
        const filtered = allEvents.filter((event) => event.cities.includes(city));
        setFilteredEvents(filtered);
    };

    const clearFilter = () => {
        setActiveCity(null);
        setFilteredEvents(allEvents);
    };

    return (
        <div className="bg-white p-6 space-y-4 min-h-[70vmin]">
            <h2 className="font-baskervville text-center text-[6.5vmin] lg:text-[clamp(1rem,5.6vmin,4rem)] xl:text-[clamp(1rem,7.2vmin,4rem)]">Upcoming Events</h2>

            <div className="flex flex-col items-center">
                <div className="pt-2">
                    <p className="font-outfit text-sm">Filter by city:</p>
                </div>
                <div className="flex justify-center gap-3 pt-4">
                    {cityButtons.map((city) => (
                        <button
                            key={city}
                            onClick={() => handleFilterByCity(city)}
                            className={`px-4 py-2 border transition 
                ${activeCity === city
                                    ? "bg-mainblue text-white"
                                    : "border-mainblue text-mainblue hover:bg-mainblue hover:text-white"
                                }`}
                        >
                            {city}
                        </button>
                    ))}
                    {activeCity && (
                        <button
                            onClick={clearFilter}
                            className="px-4 py-2 border border-mainblue text-mainblue hover:bg-mainblue hover:text-white"
                        >
                            Show All
                        </button>
                    )}
                </div>
            </div>


            <ul className="space-y-2">
                {filteredEvents.map((event) => (
                    <li key={event.ID}>
                        <h3 className="font-bold">{event.title}</h3>
                        <p>{event.date ?? "TBA"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
