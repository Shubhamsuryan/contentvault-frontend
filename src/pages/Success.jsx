import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {

  const [params] = useSearchParams();

  const orderId = params.get("order_id");
  const email = params.get("email");

  useEffect(() => {

    if (!orderId) return;

    fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-upsell`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_id: orderId,
        email: email
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Upsell verified:", data);
    });

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Successful 🎉</h1>
        <p className="text-gray-400 mb-4">
          Thank you for your purchase.
        </p>
        <p className="text-purple-400">
          Drive access will be granted to: <span style={{color:"yellow"}}>{email}</span>
        </p>
        <p className="text-white font-semibold mt-2">
          Under 24 hours, you will receive an email with the download link and instructions to access your content vault.
        </p>
      </div>
    </div>
  );
};

export default Success;