import bundleImage from "../assets/bundle.png";

const Hero = () => {
  const handleBuy = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-[#0B0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Launch Your Digital Business With <span className="text-[#FFD700]">AI Digital Bundle</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            20,000+ Shorts • 1000+ Long Videos • Full Resell Rights • Lifetime Access
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Built for Indian creators to grow consistent income from Instagram, YouTube, and TikTok.
          </p>

          {/* PRICE BLOCK */}
          <div className="mt-8 space-y-2">
            <p className="text-gray-400 line-through text-2xl">₹1999</p>
            <p className="text-4xl md:text-5xl font-bold text-[#FFD700]">₹599</p>
            <p className="text-green-400 text-lg">
              Extra ₹100 OFF with Promo → <span className="font-bold">Final ₹499</span>
            </p>
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={handleBuy}
            className="mt-8 bg-[#FFD700] text-black font-bold px-10 py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            Get Instant Access – ₹499
          </button>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
  <span>✔ Secure Razorpay Checkout</span>
  <span>✔ Lifetime Access</span>
  <span>✔ Instant Digital Delivery</span>
  <span>✔ Trusted by 500+ Creators</span>
</div>
          <p className="text-sm text-gray-400 mt-4">
            🔒 Secured by Razorpay (UPI/Card/Netbanking) • 📩 Instant Email Confirmation
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-300">
            <span className="px-3 py-1 rounded-full border border-white/20">19,000+ Digital Creators Joined</span>
            <span className="px-3 py-1 rounded-full border border-white/20">India-Focused Growth Bundle</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={bundleImage}
            alt="AI Digital Bundle"
            className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;