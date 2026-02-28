import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll(".animate-item");

    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-10 right-10"></div>
<div className="absolute w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full bottom-20 left-10"></div>
<div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full top-20 right-20"></div>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="animate-item text-4xl md:text-6xl font-bold leading-tight">
            Launch Your <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Content Business
            </span>{" "}
            Today.
          </h1>

          <p className="animate-item text-gray-400 text-lg">
            20,000+ Shorts • 1,000+ Long Videos • Commercial Resell Rights
          </p>

          <div className="animate-item space-y-4">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <span className="line-through text-gray-500 text-lg">
                ₹1499
              </span>
              <span className="text-3xl font-bold text-white">
                ₹599
              </span>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-95 transition-all duration-300 px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-purple-500/30">
              Get Instant Access
            </button>
          </div>
        </div>

        {/* Right Preview */}
        <div className="animate-item flex justify-center">
  <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center floating">
    <div className="absolute inset-0 rounded-3xl bg-black/20 backdrop-blur-md"></div>
    <span className="relative text-xl font-semibold">
      Vault Preview
    </span>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;