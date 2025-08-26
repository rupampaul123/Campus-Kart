import { useEffect, useState } from "react";
import Navbar from "../components/ui/navbar";
import { useParams } from "react-router-dom";

export default function Info() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/info/${id}`)
      .then((res) => res.json())
      .then((res) => setInfo(res));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className=" w-full min-h-screen flex justify-center items-start px-4 py-10 bg-[#0d0d0d] text-white">
        <div
          className="mt-14 w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-center 
          rounded-2xl p-6 overflow-hidden bg-black 
          border border-transparent dark:border-white/[0.2] 
          shadow-lg z-20 gap-8"
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={info.images?.[0] || "https://via.placeholder.com/500"}
              alt={info.title}
              className="rounded-xl w-full h-[350px] object-cover shadow-md"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tight">
              {info.title || "Loading..."}
            </h2>
            <p className="text-neutral-300 text-md">{info.description}</p>
            <p className="text-xl text-green-400 font-semibold">₹{info.price}</p>
            <p className="text-sm text-neutral-400">
              Category: <span className="text-white font-medium">{info.category}</span>
            </p>
            <p className="text-sm text-neutral-400">
              Seller: <span className="text-white font-medium">{info.sellerName || "Unknown"}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4 w-full">
              <button className="w-full px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
