import { useLocation } from "react-router-dom";

const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Successful 🎉</h1>
        <p className="text-gray-400 mb-4">
          Thank you for your purchase.
        </p>
        <p className="text-purple-400">
          Drive access will be granted to:
        </p>
        <p className="text-white font-semibold mt-2">
          {email}
        </p>
      </div>
    </div>
  );
};

export default Success;