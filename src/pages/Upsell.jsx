import { useSearchParams } from "react-router-dom";

const Upsell = () => {
  const [params] = useSearchParams();
  const email = params.get("email");

  const upsellPrice = 149;

  const handleUpsellPayment = async () => {

    const orderResponse = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/create-order`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: upsellPrice }),
      }
    );

    const order = await orderResponse.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "ContentVault Pro",
      description: "Upsell - 50+ Premium Courses",
      order_id: order.id,
      image: logo,
          prefill: {
          email: email
        },
      config: {
  display: {
    blocks: {
      upi: {
        name: "Pay using UPI",
        instruments: [
          { method: "upi" }
        ]
      },
      wallet: {
        name: "Pay using Wallets",
        instruments: [
          { method: "wallet" }
        ]
      },
      card: {
        name: "Pay using Card",
        instruments: [
          { method: "card" }
        ]
      }
    },
    sequence: ["block.upi", "block.wallet", "block.card"],
    preferences: {
      show_default_blocks: false
    }
  }
},

      handler: async function (response) {

        const verifyResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/verify-upsell`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              email: email,
            }),
          }
        );

        const result = await verifyResponse.json();

        if (result.success) {
          window.location.href = `/success?email=${email}`;
        } else {
          alert("Upsell payment verification failed");
        }
      },

      theme: {
        color: "#7C3AED",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function () {
      alert("Payment failed");
    });

    rzp.open();
  };

  const skipUpsell = () => {
    window.location.href = `/success?email=${email}`;
  };

  return (
   <div className="style" style={{display: "flex", alignItems: "center", justifyContent:"center", height:"100vh"}}>

<div className="bg-white/5 border border-white/10 p-10 rounded-3xl max-w-2xl">
   
   <h1 className="text-4xl font-bold mb-6">
  Wait! Your Order Is Almost Complete
</h1>

<p className="text-red-400 mb-10">
  This offer appears only once and disappears if you leave this page.
</p>

  <h2 className="text-3xl font-bold mb-4 text-yellow-400">
    Exclusive Creator Courses Library
  </h2>

  <p className="text-gray-400 mb-6">
    Unlock premium training to grow your digital business.
  </p>

  <div className="grid grid-cols-2 gap-4 text-left text-sm mb-8">

    <div>✔ YouTube Growth Mastery</div>
    <div>✔ Advanced Video Editing</div>
    <div>✔ Animation Fundamentals</div>
    <div>✔ AI Content Creation</div>
    <div>✔ Instagram Monetization</div>
    <div>✔ Freelancing Blueprint</div>
    <div>✔ Thumbnail Design</div>
    <div>✔ Online Business Setup</div>

  </div>

  <div className="mb-6">

    <div className="text-gray-500 line-through text-lg">
      Worth ₹10,000+
    </div>

    <div className="text-4xl font-bold text-white">
      Today Only ₹149
    </div>

  </div>

  <div className="flex gap-4 justify-center">

    <button
      onClick={handleUpsellPayment}
      className="bg-green-600 px-8 py-3 rounded-xl font-semibold hover:scale-105"
    >
      Add Courses to My Order
    </button>

    <button
      onClick={skipUpsell}
      className="bg-gray-700 px-8 py-3 rounded-xl"
    >
      No Thanks
    </button>

  </div>

</div>
</div>
  );
};

export default Upsell;