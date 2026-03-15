"use client";

import { useState } from "react";
import PrescriptionUpload from "../components/PrescriptionUpload";
import MedicineSearch from "../components/MedicineSearch";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-600 font-medium mb-2">
            Serving Dharna Kalan & Nearby Areas
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Your Medicine,
            <span className="text-green-600"> Delivered with Care</span>
          </h1>

          <p className="text-gray-600 mb-6">
            Upload your prescription and get instant updates on medicine
            availability. Trusted medical store serving since 2000.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Upload Prescription
            </button>

            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/hero.jpg"
            alt="Medical"
            className="rounded-lg shadow"
          />
        </div>
      </div>

      {/* POPUP MODAL */}
{showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div className="bg-white rounded-lg p-6 w-[500px] relative shadow-lg">

      {/* Close button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-xl font-bold"
      >
        ✕
      </button>

      {/* Upload form */}
      <PrescriptionUpload />

      {/* Medicine Search under it */}
      <div className="mt-6">
        <MedicineSearch />
      </div>

    </div>

  </div>
)}
    </section>
  );
}