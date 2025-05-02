import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="p-15" id="about">
        <div className="img1">
          <Image 
            src="/img/tomatoes.jpg"
            width={1200}
            height={800}
            className="w-full h-auto"
            alt="Picture of tomatoes"
            />
        </div>
        <div className="img2">
          <Image 
            src="/img/pasta.jpg"
            width={800}
            height={1200}
            className="w-full h-auto"
            alt="Picture of pasta cheesy guy"
            />
        </div>
        <div className="img3">
          <Image 
            src="/img/feast.jpg"
            width={1200}
            height={800}
            className="w-full h-auto"
            alt="Spread of bread, soup, escargot"
            />
        </div>
        <div className="about-text">
          <h1 className="pb-5">About</h1>
          <p>Mon Ami Gabi is a classic French bistro that embraces a passion for food, 
          wine and culture. Whether you come for the Onion Soup Au Gratin, Steak Frites 
          or decadent Profiteroles, Mon Ami Gabi offers something to satisfy all tastes. 
          For those looking to indulge in a unique dish, the Escargots de Bourgogne with 
          garlic-herb butter is literally a sizzling experience.<br />
          <br />
          To complement the menu, an extensive selection of more than 80 boutique French wine 
          varietals, handpicked by renowned chef and owner Gabino Sotelino, are served by the 
          glass or bottle from our signature rolling wine cart.<br />
          <br />
          While the favorites are here in abundance, there's always something new when you're 
          ready to fall in love all over again.</p>
        </div>
      </section>
      <section className="reservations">
        <h1>Make a Reservation</h1>
        <p>Widget Here</p>
      </section>
      <section className="events">
        <h1>Upcoming Events</h1>
        <p>Event Carousel Here</p>
      </section>
    </>
  );
}
