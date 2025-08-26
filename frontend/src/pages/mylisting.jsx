import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../components/ui/background-lines";

export default function MyListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("http://localhost:8080/mylistings", {
          method: "GET",
          credentials: "include", 
        });

        if (!res.ok) throw new Error("Failed to fetch listings");

        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (

        
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading your listings...
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400">
        You don’t have any listings yet.
      </div>
    );
  }

  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
       My Listings <br />
      </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {listings.map((item) => (
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
    </BackgroundLines>
    </>
  );
}
