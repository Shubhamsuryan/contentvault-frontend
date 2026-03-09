import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViewerCounter from "./ViewerCounter";
import logo from "../assets/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);
  const [promo, setPromo] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
const [finalOverridePrice, setFinalOverridePrice] = useState(null);
  const originalPrice = 8999;
  const salePrice = 199;
  const finalPrice =
  finalOverridePrice !== null
    ? finalOverridePrice
    : discountApplied
    ? 199
    : salePrice;
  const [email, setEmail] = useState("");
   const [modalMessage, setModalMessage] = useState("");
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "", city: "", email: "" });

  useEffect(() => {
    const card = sectionRef.current.querySelector(".pricing-card");

    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const applyPromo = () => {
  const code = promo.trim();

  if (code.toUpperCase() === "START50") {
    setDiscountApplied(true);
  }

  if (code === "nishu@1") {
    setDiscountApplied(false);
    // setModalMessage("Hidden test discount applied");
    setFinalOverridePrice(1);
  }
};

  const validateInputs = (setStateErrors = false) => {
    const newErrors = { name: "", phone: "", city: "", email: "" };

    if (!name || name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const phoneDigits = phone ? phone.replace(/\D/g, "") : "";
    if (!phoneDigits) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(phoneDigits)) {
      newErrors.phone = "Phone must be exactly 10 digits.";
    }

    if (!city || city.trim().length === 0) {
      newErrors.city = "Please enter your city.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim().length === 0) {
      newErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const isValid = !newErrors.name && !newErrors.phone && !newErrors.city && !newErrors.email;

    if (setStateErrors) setErrors(newErrors);

    return isValid;
  };

 const handlePayment = async () => {
  // Validate inputs before proceeding
  if (!validateInputs(true)) {
    // On validation failure: show inline field errors only (no modal popup)
    return;
  }
  setIsLoading(true);
  try {
// Step 1: Check if buyer already exists
    const checkResponse = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/check-buyer`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (!checkResponse.ok) {
      throw new Error("Failed to check buyer status");
    }

    const checkData = await checkResponse.json();

    if (checkData.exists) {
      setModalMessage("You have already purchased this Library. Please check your email for access details.");
      return;
    }
  // Create order from backend
    const orderResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: finalPrice,
        email,
        name,
        phone,
        city,
        isUpsell: false,
      }),
    });

    if (!orderResponse.ok) {
      throw new Error("Failed to create order");
    }

    const order = await orderResponse.json();

    console.log(order); // debugging

    if (!order.payment_session_id) {
      throw new Error("Payment initialization failed");
    }

    if (!window.Cashfree) {
      throw new Error("Payment provider unavailable");
    }

    const cashfree = Cashfree({
      mode: import.meta.env.VITE_CASHFREE_MODE || "production",
    });

    cashfree.checkout({
      paymentSessionId: order.payment_session_id,
      redirectTarget: "_self",
    });
  } catch (err) {
    console.error(err);
    setModalMessage(err.message || "An error occurred while initiating payment.");
  } finally {
    setIsLoading(false);
  }

//   const options = {

//     key: import.meta.env.VITE_RAZORPAY_KEY,
//     amount: order.amount,
//     currency: "INR",
//     name: "ContentVault Pro",
//     description: "Mega Content Library Access",
//     order_id: order.id,
//     image: logo,
//     prefill: {
//     email: email
//   },
//     config: {
//   display: {
//     blocks: {
//       upi: {
//         name: "Pay using UPI",
//         instruments: [
//           { method: "upi" }
//         ]
//       },
//       wallet: {
//         name: "Pay using Wallets",
//         instruments: [
//           { method: "wallet" }
//         ]
//       },
//       card: {
//         name: "Pay using Card",
//         instruments: [
//           { method: "card" }
//         ]
//       }
//     },
//     sequence: ["block.upi", "block.wallet", "block.card"],
//     preferences: {
//       show_default_blocks: false
//     }
//   }
// },
//     handler: async function (response) {
//   const verifyResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-payment`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       ...response,
//       email: email,
//     }),
//   });

//   const result = await verifyResponse.json();

//   if (result.success) {

//     // 🔥 Meta Pixel Purchase Event
//     if (window.fbq) {
//       window.fbq("track", "Purchase", {
//         value: finalPrice,
//         currency: "INR",
//         content_name: "AI Digital Library",
//         content_ids: [response.razorpay_payment_id],
//       });
//     }

//     window.location.href = `/upsell?email=${email}`;
//   } else {
//     alert("Payment verification failed");
//   }
// },
//     theme: {
//       color: "#7C3AED",
//     },
//   };

// const rzp = new window.Razorpay(options);

// rzp.on("payment.failed", function () {
//   window.location.href = "/failed";
// });

// rzp.open();
};

  return (
    <section id="pricing" ref={sectionRef} className="relative py-32 px-6">
      <h2 className="text-3xl text-yellow-400 md:text-5xl font-bold text-center mt-20">
          11,000+ Digital Creators Joined
        </h2>
        <br />
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Launch Offer
        </h2>
        <p className="text-yellow-400 mt-4">
          Launch Price Available For Limited Early Buyers
        </p>
        <p className="text-gray-400 mt-4">
          One-Time Payment. Lifetime Access.
        </p>
      </div>

      <div className="pricing-card max-w-xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl text-center shadow-2xl relative">

        {/* Launch Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm rounded-full font-semibold shadow-md">
          Early Access Pricing
        </div>

        <div className="mt-6 space-y-4">

          <div className="text-gray-500 line-through text-lg">
            ₹{originalPrice}
          </div>

          <div className="text-5xl font-bold text-white">
            ₹{finalPrice}
          </div>
          <div className="mt-4">
            <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => {
    setName(e.target.value);
    if (errors.name) setErrors((s) => ({ ...s, name: "" }));
  }}
  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white"
/>
{errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}

<input
  type="tel"
  placeholder="Enter your phone"
  value={phone}
  onChange={(e) => {
    setPhone(e.target.value);
    if (errors.phone) setErrors((s) => ({ ...s, phone: "" }));
  }}
  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500"
/>
{errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}

<input
  type="text"
  placeholder="Enter your city"
  value={city}
  onChange={(e) => {
    setCity(e.target.value);
    if (errors.city) setErrors((s) => ({ ...s, city: "" }));
  }}
  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500"
/>
{errors.city && <p className="text-red-400 text-sm mt-2">{errors.city}</p>}

<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((s) => ({ ...s, email: "" }));
  }}
  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500"
/>
{errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
  
</div>
          {/* {!discountApplied && (
            <div className="text-sm text-purple-400">
              (Optional) have you a promocode to apply? Enter above and click Apply.
            </div>
          )}

          {discountApplied && (
            <div className="text-sm text-green-400">
              Promo Applied Successfully ✓
            </div>
          )}

         
          {!discountApplied && (
            <div className="flex gap-3 justify-center mt-4">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-purple-500"
              />
              <button
                onClick={applyPromo}
                className="bg-purple-600 px-4 py-2 rounded-xl hover:scale-105 transition"
              >
                Apply
              </button>
            </div>
          )} */}

          {/* CTA Button */}
          <button
  type="button"
  onClick={() => handlePayment()}
  disabled={isLoading}
  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isLoading ? "Processing..." : "Unlock Access Now"}
</button>

<ViewerCounter />
<h2>⚡ 537 people purchased in last 24 hours</h2>
<h2>⚡ Limited launch price available today</h2>
<p className="text-sm text-gray-400 mt-4 text-center">
  ✔ One-Time Payment &nbsp; • &nbsp;
  ✔ Lifetime Access &nbsp; • &nbsp;
  ✔ No Hidden Charges &nbsp; • &nbsp;
  ✔ Secure Payment Gateway
</p>
        </div>
        

      </div>

{modalMessage && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
    <div className="bg-gray-900 border border-purple-500/30 p-8 rounded-2xl max-w-md text-center shadow-2xl">
      <p className="text-white mb-6">{modalMessage}</p>
      <button
        onClick={() => setModalMessage("")}
        className="bg-purple-600 px-6 py-3 rounded-xl hover:opacity-90"
      >
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Pricing;