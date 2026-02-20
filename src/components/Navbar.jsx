import { useState } from "react";
import Login from "../pages/Login";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
          Time<span className="text-amber-600">Craft</span>
        </h1>
        <div className="flex items-center gap-6 w-full max-w-xl mx-8">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="bg-amber-500 px-4 py-2 rounded-r text-black font-semibold hover:bg-amber-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-8">
          {/* Account Icon */}
          <div className="flex flex-col items-center">
            <button className="hover:text-amber-400" onClick={() => setShowLogin(true)}>
              {/* Heroicons User Circle */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a8.25 8.25 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" />
              </svg>
            </button>
            <span className="text-xs mt-1">Account</span>
          </div>
          {/* Wishlist Icon */}
          <div className="flex flex-col items-center">
            <button className="hover:text-amber-400">
              {/* Heroicons Heart (Wishlist) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.75a4.5 4.5 0 00-6.364 0L12 8.614l1.864-1.864a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>
            <span className="text-xs mt-1">Wishlist</span>
          </div>
          {/* Cart Icon */}
          <div className="flex flex-col items-center">
            <button className="hover:text-amber-400">
              {/* Heroicons Shopping Cart */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l.75 3.75m0 0h13.5l.75-3.75m-15 3.75L5.25 17.25A2.25 2.25 0 007.5 19.5h9a2.25 2.25 0 002.25-2.25L20.25 6.75m-15 0h15" />
              </svg>
            </button>
            <span className="text-xs mt-1">Cart</span>
          </div>
        </div>
      </nav>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowLogin(false)}
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
