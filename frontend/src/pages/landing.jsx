import { useEffect, useState } from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { HoverEffect } from "../components/ui/card-hover";
import Navbar from "../components/ui/navbar";
import { Link } from "react-router-dom";
import Info from "./info";
export default function Landing(){


  const [List, setList] = useState([]);

  const [cards, setCards] = useState([{
    title: "Books & Study Material",
    description:
      "Textbooks, notes, guides — everything you need to pass with grace (or survive finals).",
    link: "https://stripe.com",
  },
  {
    title: "Electronics & Gadgets",
    description:
      "Laptops, earphones, chargers, and all the tech you can’t live without (or forgot at home).",
    link: "https://netflix.com",
  },
  {
    title: "Room Essentials",
    description:
      "Mattress, lamps, chairs — everything to make your hostel room feel less like a prison cell.",
    link: "https://google.com",
  },
  {
    title: "Clothing & Accessories",
    description:
      "College merch, oversized hoodies, cool kicks — pre-loved but still fire.",
    link: "https://meta.com",
  },
  {
    title: "Bicycles & Vehicles",
    description:
      "Cycle to class like a boss — buy or sell bikes and basic wheels in your budget.",
    link: "https://amazon.com",
  },
  {
    title: "Miscellaneous",
    description:
      "Got something weird but useful? List it here — we don't judge.",
    link: "https://microsoft.com",
  },
]);

useEffect(() => {
  fetch("http://localhost:8080/", {
    method: "GET",
    credentials: "include", 
  })
    .then((res) => res.json())
    .then((res) => setList(res))
    .catch((err) => console.error(err));
}, []);

console.log(List);
    return(
        <>
        <Navbar />

        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        CampusKart <br />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        CampusKart is your one-stop campus marketplace - buy what you need, sell what you don't, and keep the hustle alive right from your hostel!
      </p>
    </BackgroundLines>
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Categories <br />
      </h2>
      <HoverEffect items = {cards}/>

      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Listings <br />
      </h2>




     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {List.map((item) => (
    <div
      key={item._id}
      className="w-full max-w-[460px] flex flex-col items-center justify-start 
                 rounded-2xl p-4 overflow-hidden bg-black 
                 border border-transparent dark:border-white/[0.1] 
                 hover:border-violet-500 hover:shadow-md transition-all duration-300 relative z-20"
    >
      <img
        src={item.images}
        alt={item.title}
        className="w-[80%] h-[160px] object-cover rounded-xl mb-4"
      />

      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400 text-2xl font-semibold mb-2">
        {item.title}
      </h2>

      <p className="text-sm text-neutral-400 text-center mb-2 px-2 line-clamp-2">
        {item.description}
      </p>

      <p className="text-lg text-white font-medium mb-4">
        ₹{item.price}
      </p>

      <div className="w-full flex justify-center gap-4">
        <Link to={`/info/${item._id}`}>
          <button className="px-4 py-2 rounded-lg bg-white text-black text-sm hover:bg-violet-500 hover:text-white transition-all">
            More Details
          </button>
        </Link>
        <button className="px-4 py-2 rounded-lg bg-white  text-black text-sm hover:bg-green-500 hover:text-white transition-all">
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>

      </>
    )}

    