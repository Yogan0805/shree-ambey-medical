export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
      <div className="font-semibold text-lg">
        💊 Shree Ambey Medical Stores
      </div>
      <div className="flex gap-4">
        <button className="text-gray-700">Login</button>
        <button className="bg-primary text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  )
}
