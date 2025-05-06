"use client"
import React, { useEffect, useState, useRef } from "react";

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



const getCardsPerPage = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    return width >= 1280 ? 3 : width >= 1024 ? 2 : 1;
};

export default function Events() {
    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [activeCity, setActiveCity] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
    const [cardHeight, setCardHeight] = useState(700);
    const cardHeightRefs = useRef<(HTMLDivElement | null)[]>([]);

    const cityButtons = Array.from(
        new Set(allEvents.flatMap((event) => event.cities))
    ).sort();

    const getEventCards = () => {
        const end = currentIndex + cardsPerPage;
        return filteredEvents.slice(currentIndex, end).concat(
            end > filteredEvents.length ? filteredEvents.slice(0, end - filteredEvents.length) : []
        );
    };

    const handleFilterByCity = (city: string) => {
        setActiveCity(city);
        const filtered = allEvents.filter((event) => event.cities.includes(city));
        setFilteredEvents(filtered);
        setCurrentIndex(0);
    };

    const clearFilter = () => {
        setActiveCity(null);
        setFilteredEvents(allEvents);
        setCurrentIndex(0);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
    };


    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch(
                "https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events",
            );
            const data: Event[] = await res.json();

            const upcomingEvents = data.filter((event) => {
                const cleanedDate = event.date?.replace(/(\d+)(st|nd|rd|th)/, ""); //regex for date parsing
                const parsedDate = cleanedDate ? new Date(cleanedDate) : null;
                return !parsedDate || parsedDate >= new Date()
            }).sort((a, b) => {
                if (!a.date && !b.date) return 0;
                if (!a.date) return 1;
                if (!b.date) return -1;

                const aDate = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, ""));
                const bDate = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, ""));
                return aDate.getTime() - bDate.getTime(); // ascending order
            });
            setAllEvents(upcomingEvents);
            setFilteredEvents(upcomingEvents);
        };
        fetchEvents();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            const heights = cardHeightRefs.current.map((ref) => ref?.offsetHeight || 0);
            const max = Math.max(...heights);
            if (max > 0 && max > cardHeight) {
                setCardHeight(max);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [filteredEvents, currentIndex, cardsPerPage, cardHeight]);


    useEffect(() => {
        const handleResize = () => setCardsPerPage(getCardsPerPage());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-white p-6 space-y-4 min-h-[70vmin]">
            <h2
                className="font-baskervville text-center text-[6.5vmin] 
            lg:text-[clamp(1rem,5.6vmin,4rem)] xl:text-[clamp(1rem,7.2vmin,4rem)]">
                Upcoming Events
            </h2>

            <fieldset>
                <legend className="sr-only">Filter events by city</legend>
                <div className="flex flex-col items-center">
                    <div className="pt-2">
                        <p className="font-outfit text-sm italic">Filter by city:</p>
                    </div>
                    <div className="flex justify-center gap-3 pt-4">
                        {cityButtons.map((city) => (
                            <button
                                key={city}
                                onClick={() => handleFilterByCity(city)}
                                className={`px-4 py-2 border transition 
                ${activeCity === city
                                        ? "bg-mainblue text-white"
                                        : "border-mainblue text-mainblue hover:bg-maingreen hover:text-white"
                                    }`}
                            >
                                {city}
                            </button>
                        ))}
                        {activeCity && (
                            <button
                                onClick={clearFilter}
                                className="px-4 py-2 border border-mainblue text-mainblue hover:bg-maingreen hover:text-white"
                            >
                                Show All
                            </button>
                        )}
                    </div>
                </div>
            </fieldset>



            <div className="relative">
                <div className="flex justify-between mb-4">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous event"
                        aria-controls="event-cards"
                        className="btn btn-circle bg-mainblue hover:bg-maingreen text-white"
                    >
                        ❮
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next event"
                        aria-controls="event-cards"
                        className="btn btn-circle bg-mainblue hover:bg-maingreen text-white"
                    >
                        ❯
                    </button>
                </div>

                <div
                    className="transition-all duration-300"
                    style={{ height: `${cardHeight}px`, overflow: "hidden" }}
                >
                    <div id="event-cards"
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                        {getEventCards().map((event, i) => (
                            <div
                                key={event.ID}
                                role="group"
                                aria-labelledby={`event-title-${event.title}`}
                                ref={(el) => {
                                    if (el) cardHeightRefs.current[i] = el;
                                }}
                                className="card bg-base-100 shadow-sm h-fit flex flex-col"
                                tabIndex={0}
                            >
                                {event.featured_image?.url && (
                                    <figure>
                                        <img
                                            src={event.featured_image.url}
                                            alt={event.featured_image.alt_text || event.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </figure>
                                )}
                                <div className="card-body flex flex-col flex-grow">
                                    <h2 className="card-title">{event.title}</h2>
                                    <p
                                        className="flex-grow"
                                        dangerouslySetInnerHTML={{ __html: event.content }}
                                    />
                                    <div className="card-actions justify-between items-end mt-4">
                                        <span className="text-sm text-mainblue underline">
                                            {event.date ?? ""}
                                        </span>
                                        {event.cta_url && event.cta_btn && (
                                            <a
                                                href={event.cta_url}
                                                className="btn btn-sm bg-mainblue hover:bg-maingreen text-white"
                                            >
                                                {event.cta_btn}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
