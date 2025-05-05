import React from "react";

//Event Title
//Event ID as key
//Filter by upcoming or no date set based on current date user is seeing it
//Each city in an array for the associated event listed out
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


export default async function Events() {
    
    const res = await fetch(
        'https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events')
    const allEvents: Event[] = await res.json();
        
    const upcomingEvents = allEvents.filter((event) => {
        const cleanedDate = event.date?.replace(/(\d+)(st|nd|rd|th)/, '');
        const parsedDate = cleanedDate ? new Date(cleanedDate) : null;
        return !parsedDate || (parsedDate >= new Date());
    });
    

    return (
        <div className="bg-white text-black h-[70vmin] flex">
            <ul>
                {upcomingEvents.map(event => 
                <li>
                    {event.title}
                    {event.date}
                </li>)}
            </ul>
        </div>
    )
}


// {event.cities.map((city) => (
//     <li key={city}>{city}</li>
//   ))}