"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg font-bold text-emerald-700">
          Shree Ambey Medical
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/login" className="text-gray-700 hover:text-emerald-600">
            Login
          </a>

          <a
            href="/signup"
            className="bg-emerald-700 text-white px-4 py-2 rounded-full hover:bg-emerald-800"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <a href="/login" className="text-gray-700">
            Login
          </a>

          <a
            href="/signup"
            className="bg-emerald-700 text-white px-4 py-2 rounded-full text-center"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}