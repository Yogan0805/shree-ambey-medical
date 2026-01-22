export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 mt-3">
          Simple, fast, and convenient way to order your medicines
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-2xl">
              📤
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Upload Prescription
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Upload a photo or PDF of your prescription easily and securely.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-2xl">
              ⏱️
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Check Availability
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Get quick updates on medicine availability and expected time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-2xl">
              ✅
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Collect Your Order
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              We notify you once medicines are ready for pickup or delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

