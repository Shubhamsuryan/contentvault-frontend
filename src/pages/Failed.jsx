import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Payment Failed ❌
        </h1>
        <p className="text-gray-400 mb-6">
          Your payment was not completed. Please try again.
        </p>

        <Link
          to="/"
          className="inline-block bg-purple-600 px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default Failed;