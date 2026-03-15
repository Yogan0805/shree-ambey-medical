export default function AdminPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <p>Manage medicines and orders here.</p>

      <ul className="mt-4">
        <li>• View prescriptions</li>
        <li>• Update medicine stock</li>
        <li>• Manage orders</li>
      </ul>
    </div>
  );
}