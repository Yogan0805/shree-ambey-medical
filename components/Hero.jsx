export default function Hero() {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Serving Dharna Kalan & Nearby Areas
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            Your Medicine, <br />
            <span className="text-emerald-700">Delivered with Care</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            Upload your prescription and get instant updates on medicine
            availability. Trusted medical store serving since 2000.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-emerald-700 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-800 transition">
              Upload Prescription
            </button>

            <button className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-full font-medium hover:bg-emerald-100 transition">
              Contact Us
            </button>
          </div>
        </div>

{/* RIGHT IMAGE */}
<div className="relative flex justify-center">
  <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md">
    <img
      src="/hero.jpg"
      alt="Medical Store"
      className="rounded-xl w-full h-auto object-cover"
    />
  </div>

  {/* TRUST BADGE */}
  <div className="absolute bottom-6 left-6 bg-white px-4 py-3 rounded-xl shadow-md flex items-center gap-3">
    <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full">
      ⭐
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-900">
        25+ Years Experience
      </p>
      <p className="text-xs text-gray-500">
        Serving since 2000
      </p>
    </div>
  </div>
</div>
        </div>
    </section>
  );
}

