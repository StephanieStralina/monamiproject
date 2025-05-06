import React from 'react';
import Image from 'next/image';
import Reservation from './components/ReserveForm';
import Events from './components/Events';
import HoursInfo from './components/HoursInfo';


export default function Home() {
  return (
    <>
      <section className="lg:px-15 lg:pt-10 pb-5" id="about" aria-labelledby="about-information">
        <div className="tomatoes-img">
          <Image
            src="/img/tomatoes.jpg"
            width={1200}
            height={800}
            className="w-full h-auto"
            alt="Red and orange tomatoes in blue baskets on a wooden board."
            priority
          />
        </div>
        <div className="pasta-img">
          <Image
            src="/img/pasta.jpg"
            width={800}
            height={1200}
            className="w-full h-auto"
            alt="Chef grating parmesan over a bowl of pasta."
            priority
          />
        </div>
        <div className="french-feast lg:mt-4">
          <Image
            src="/img/feast.jpg"
            width={1200}
            height={800}
            className="object-cover"
            alt="French bistro spread with soup, escargot, baguette, and white wine."
            priority
          />
        </div>
        <h1 className="md:mt-[3vmin] font-baskervville text-[6.5vmin] lg:text-[clamp(1rem,5.6vmin,4rem)] xl:text-[clamp(1rem,7.2vmin,4rem)]"> About</h1>
        <p className="font-outfit"
          id="about-information">
          Mon Ami Gabi is a classic French bistro that embraces a passion for
          food, wine and culture. Whether you come for the Onion Soup Au Gratin,
          Steak Frites or decadent Profiteroles, Mon Ami Gabi offers something
          to satisfy all tastes. For those looking to indulge in a
          <span className="italic font-light text-mainred"> unique dish</span>,
          the Escargots de Bourgogne with garlic-herb butter is literally a
          sizzling experience.
          <br />
          <br />
          To complement the menu, an extensive selection of more than{' '}
          <span className="italic font-light text-mainred">
            80 boutique French wine varietals
          </span>
          , handpicked by renowned chef and owner Gabino Sotelino, are served by
          the glass or bottle from our signature rolling wine cart.
          <br />
          <br />
          While the favorites are here in abundance, there's always something
          new when you're ready to fall in love all over again.
        </p>
      </section>
      <section 
        className="reservations" 
        aria-labelledby="reservations-heading">
        <Reservation />
      </section>
      <section 
        className="events" 
        aria-labelledby="events-heading">
        <Events />
      </section>
      <section 
        className="restaurantinfo" 
        aria-labelledby="restaurant-info-heading">
        <HoursInfo />
      </section>
    </>
  );
}
