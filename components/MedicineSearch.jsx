"use client";
import { useState } from "react";

const medicines = ["Paracetamol", "Aspirin", "Ibuprofen", "Crocin"];

export default function MedicineSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const search = () => {
    const found = medicines.find(
      (m) => m.toLowerCase() === query.toLowerCase()
    );

    setResult(found ? "Available ✔" : "Not available ❌");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow max-w-md">
      <h2 className="text-lg font-semibold mb-3">Check Medicine</h2>

      <input
        type="text"
        placeholder="Enter medicine name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-2 w-full mb-3"
      />

      <button
        onClick={search}
        className="bg-emerald-600 text-white px-4 py-2 rounded"
      >
        Check
      </button>

      {result && <p className="mt-3">{result}</p>}
    </div>
  );
}