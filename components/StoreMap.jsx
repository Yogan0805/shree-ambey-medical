export default function StoreMap() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Our Location</h2>

      <iframe
        src="https://www.google.com/maps?q=Shree+Ambey+Medical+Store&output=embed"
        width="100%"
        height="350"
        className="rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}