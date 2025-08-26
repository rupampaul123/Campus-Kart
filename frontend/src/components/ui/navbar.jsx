import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 bg-[#0D1321] text-white shadow-md px-4 md:px-8 py-5 flex items-center justify-between z-50">

      <Link to="/" className="text-xl font-bold text-white">
        CampusKart
      </Link>


      <div className="hidden md:flex gap-6 text-sm font-medium text-white">
        <Link to="/" className="hover:text-violet-400 transition duration-200">Home</Link>
        <Link to="/addlisting" className="hover:text-violet-400 transition duration-200">Post Item</Link>
        <Link to="/mylistings/" className="hover:text-violet-400 transition duration-200">My Listings</Link>
      </div>

      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-violet-600 text-white px-4 py-1.5 text-sm rounded-md hover:bg-violet-700 transition duration-200"
        >
          Login
        </Link>
      </div>


      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>


      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[#0D1321] shadow-md flex flex-col gap-4 px-6 py-4 md:hidden text-sm font-medium text-white z-50">
          <Link to="/" className="hover:text-violet-400 transition duration-200">Home</Link>
          <Link to="/post" className="hover:text-violet-400 transition duration-200">Post Item</Link>
          <Link to="/mylistings/:id" className="hover:text-violet-400 transition duration-200">My Listings</Link>
          <Link
            to="/login"
            className="text-white bg-violet-600 px-4 py-1.5 rounded-md hover:bg-violet-700 text-center transition duration-200"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
