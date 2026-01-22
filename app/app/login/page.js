export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Login to Shree Ambey Medical
        </h2>
        <p className="text-gray-600 text-sm text-center mt-2">
          Access your account
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="button"
            className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-emerald-700 font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
