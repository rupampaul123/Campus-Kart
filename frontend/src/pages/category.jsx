import { useParams } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Category(){
    const {id} = useParams();
    let [cat, setCat] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8080/category/${id}`)
        .then((res) => res.json())
        .then((res) => setCat(res));
    },[id])
    console.log(cat);
    return(
        <>
        <Navbar/>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {cat.map((item) => (
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
        <button className="px-4 py-2 rounded-lg bg-white text-black text-sm hover:bg-green-500 hover:text-white transition-all">
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>

        </>
    )
}