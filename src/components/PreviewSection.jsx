import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreviewSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const preview = sectionRef.current.querySelector(".preview-box");

    gsap.fromTo(
      preview,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
    
    gsap.to(preview, {
  y: -30,
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6">
      
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Inside The Vault
        </h2>
        <p className="text-gray-400 mt-4">
          Organized folders. Ready-to-use assets. Instant access.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="preview-box relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-6 shadow-2xl">

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl border border-purple-500/20 pointer-events-none"></div>

          {/* Mock Preview Content */}
          <div className="bg-[#111827] rounded-2xl h-[300px] md:h-[450px] flex items-center justify-center text-gray-400">
            Drive Folder Preview (Add screenshot later)
          </div>

        </div>
      </div>

    </section>
  );
};

export default PreviewSection;