import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full mb-4">
            Serving Dharna Kalan & Nearby Areas
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            Your Medicine,
            <br />
            <span className="text-emerald-700">Delivered with Care</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Upload your prescription and get instant updates on medicine
            availability. Trusted medical store serving since 2000.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition">
              Upload Prescription
            </button>

            <button className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md">
            <Image
              src="/hero.jpg"
              alt="Medical Store"
              width={500}
              height={350}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
