import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Reservation from './components/ReserveForm';
import Events from './components/Events';
import HoursInfo from './components/HoursInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Ami Gabi | A Classic French Bistro in Chicago</title>
        <meta
          name="description"
          content="Enjoy classic French cuisine at Mon Ami Gabi in Chicago. 
            Discover steak frites, escargot, French wine, and more."
        />
        <meta property="og:title" content="Mon Ami Gabi Chicago" />
        <meta
          property="og:description"
          content="Classic French bistro dining in the heart of Lincoln Park."
        />
        <meta property="og:image" content="/img/feast.jpg" />
      </Head>

      <section className="lg:px-15 lg:pt-10 pb-5" id="about">
        <div className="img1">
          <Image
            src="/img/tomatoes.jpg"
            width={1200}
            height={800}
            className="w-full h-auto"
            alt="Red and orange baby tomatoes in aqua blue baskets on a 
            rustic striped wood cutting board."
            priority
          />
        </div>
        <div className="img2">
          <Image
            src="/img/pasta.jpg"
            width={800}
            height={1200}
            className="w-full h-auto"
            alt="A close up of a chef's hands as they use a microplane grater to 
            top a bowl of pasta with fresh parmesan."
            priority
          />
        </div>
        <div className="img3 lg:mt-4">
          <Image
            src="/img/feast.jpg"
            width={1200}
            height={800}
            className="object-cover"
            alt="A delicious looking spread of French Bistro food including items 
            like of tomato bisque, escargot in garlic-herb butter, a fresh baguette, 
            Onion Soup Au Gratin, and 2 glasses of white wine."
            priority
          />
        </div>
        <h1 className="md:mt-[3vmin] font-baskervville"> About</h1>
        <p className="font-outfit">
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
      <section className="reservations">
        <Reservation />
      </section>
      <section className="events">
        <Events />
      </section>
      <section className="restaurantinfo">
        <HoursInfo />
      </section>
    </>
  );
}
