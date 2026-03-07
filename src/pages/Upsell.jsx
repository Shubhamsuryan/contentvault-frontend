import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Upsell = () => {

  const [params] = useSearchParams();
  
const orderId = params.get("order_id");
  const upsellPrice = 149;
 const email = params.get("email");
const name = params.get("name");
const phone = params.get("phone");
const city = params.get("city");

useEffect(() => {

  if (!orderId) return;

  fetch(
    `${import.meta.env.VITE_BACKEND_URL}/verify-payment?order_id=${orderId}&email=${email}`
  )
  .then(res => res.json())
  .then(data => {
    console.log("Main payment verified:", data);
  });

}, []);

const handleUpsellPayment = async () => {

  const orderResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/create-order`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
  amount: 149,
  email,
  name,
  phone,
  city,
  isUpsell: true
})
    }
  );

  const order = await orderResponse.json();

  if (!order.payment_session_id) {
    alert("Payment initialization failed");
    return;
  }

  const cashfree = Cashfree({
    mode: "production"
  });

  cashfree.checkout({
    paymentSessionId: order.payment_session_id,
    redirectTarget: "_self"
  });

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