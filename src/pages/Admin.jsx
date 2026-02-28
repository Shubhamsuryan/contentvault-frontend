import { useState } from "react";

const Admin = () => {
  const [secret, setSecret] = useState("");
  const [buyers, setBuyers] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBuyers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/buyers`,
        {
          headers: {
            "admin-secret": secret,
          },
        }
      );

      if (response.status === 401) {
        alert("Unauthorized");
        return;
      }

      const data = await response.json();
      setBuyers(data);
      setAuthorized(true);
    } catch (error) {
      console.error("Error fetching buyers:", error);
    }
  };
  const exportCSV = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/admin/export`,
      {
        headers: {
          "admin-secret": secret,
        },
      }
    );

    if (response.status === 401) {
      alert("Unauthorized");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "buyers.csv";
    a.click();
  } catch (error) {
    console.error("Export error:", error);
  }
};
const grantAccess = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/admin/grant-access`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-secret": secret,
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.status === 401) {
      alert("Unauthorized");
      return;
    }

    // Refresh buyers list
    fetchBuyers();

  } catch (error) {
    console.error("Grant access error:", error);
  }
};

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {!authorized && (
        <div className="max-w-md space-y-4">
          <input
            type="password"
            placeholder="Enter Admin Secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl"
          />
          <button
            onClick={fetchBuyers}
            className="w-full bg-purple-600 py-3 rounded-xl hover:opacity-90"
          >
            Login
          </button>
        </div>
      )}

      {authorized && (
        <div className="mt-8 overflow-x-auto">
            <button
  onClick={exportCSV}
  className="mb-4 bg-green-600 px-6 py-3 rounded-xl hover:opacity-90"
>
  Export CSV
</button>
           <div className="mb-6">

  <input
    type="text"
    placeholder="Search by email..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full max-w-sm px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl"
  />
</div>
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Payment ID</th>
                <th className="p-3 border border-gray-700">Order ID</th>
                <th className="p-3 border border-gray-700">Date</th>
                  <th className="p-3 border border-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers
                .filter((buyer) =>
                  buyer.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((buyer) => (
                  <tr key={buyer._id}>
  <td className="p-3 border border-gray-700">{buyer.email}</td>
  <td className="p-3 border border-gray-700">{buyer.paymentId}</td>
  <td className="p-3 border border-gray-700">{buyer.orderId}</td>
  <td className="p-3 border border-gray-700">
    {new Date(buyer.date).toLocaleString()}
  </td>

  <td className="p-3 border border-gray-700">
    {buyer.accessGranted ? (
      <span className="text-green-500 font-semibold">Granted</span>
    ) : (
      <span className="text-yellow-400 font-semibold">Pending</span>
    )}
  </td>

  <td className="p-3 border border-gray-700">
    {!buyer.accessGranted && (
      <button
        onClick={() => grantAccess(buyer.email)}
        className="bg-blue-600 px-4 py-2 rounded-lg hover:opacity-90"
      >
        Grant
      </button>
    )}
  </td>
</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;