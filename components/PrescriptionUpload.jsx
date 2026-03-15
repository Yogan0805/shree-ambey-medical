"use client";
import { useState } from "react";

export default function PrescriptionUpload() {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSend = () => {
    const message = encodeURIComponent(
      `Hello, I want to order medicines. Prescription file: ${fileName}`
    );
    window.open(`https://wa.me/918770592243?text=${message}`, "_blank");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow max-w-md">
      <h2 className="text-lg font-semibold mb-3">Upload Prescription</h2>

      <input type="file" onChange={handleChange} className="mb-3" />

      {fileName && (
        <p className="text-sm text-gray-600 mb-3">
          Selected: {fileName}
        </p>
      )}

      <button
        onClick={handleSend}
        className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
      >
        Send on WhatsApp
      </button>
    </div>
  );
}