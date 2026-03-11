import LibraryImage from "../assets/Library.png";
import HeroCounter from "./herocounter";

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
            2,00,000+ Shorts,  1000+ Long Videos <span className="text-yellow-400">Ready to Upload & Grow Your Channel</span> Lifetime Access
          </h1>

          {/* <p className="mt-6 text-lg text-gray-300">
            2,00,000+ Shorts • 1000+ Long Videos • Full Resell Rights • Lifetime Access
          </p> */}

          <p className="mt-4 text-sm text-gray-400">
            Built for Indian creators to grow consistent income from Instagram, YouTube, and TikTok.
          </p>

          {/* PRICE BLOCK */}
          <div className="mt-8 space-y-2">
            <p className="text-gray-400  text-2xl"> Worth   <span className="text-gray-400 line-through text-2xl">₹9,999</span></p>
            <p className="text-4xl md:text-5xl font-bold text-[#FFD700]">₹29</p>
            {/* <p className="text-green-400 text-lg">
              Extra ₹50 OFF with Promo 
            </p> */}
            <br />
            <p className="text-red-400 text-lg">
              ⚡ Launch price expires today, don't miss the chance to grab this deal.
            </p>
            <HeroCounter />
          </div>

          {/* CTA BUTTON */}
          
          <button
            onClick={handleBuy}
            className="mt-8 bg-[#FFD700] text-black font-bold px-10 py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            Unlock full Library – ₹29
          </button>
          <div className="flex flex-wrap  gap-6 mt-6 text-sm text-gray-400">
  <span>✔ Lifetime Access</span>
  <span>✔ Instant Digital Delivery</span>
  <span>✔ Trusted by 11,000+ Creators</span>
</div>
          <p className="text-sm text-gray-400 mt-4">
            🔒 Secured by Cashfree.com (UPI/Card/Netbanking) • 📩 Instant Email Confirmation
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-300">
            <span className="px-3 py-1 rounded-full border border-white/20">11,000+ Digital Creators Joined</span>
            <span className="px-3 py-1 rounded-full border border-white/20">India-Focused Growth Library</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={LibraryImage}
            alt="AI Digital Library"
            className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;