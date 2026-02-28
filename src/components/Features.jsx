import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".feature-card");

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Everything You Need To Start
        </h2>
        <p className="text-gray-400 mt-4">
          Professionally structured assets to launch instantly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {[
          "20,000+ Ready-to-Upload Shorts",
          "1,000+ Long Form Videos",
          "Fully Organized Folder Structure",
          "Commercial Resell Rights Included",
        ].map((item, index) => (
          <div
            key={index}
            className="feature-card backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item}
            </h3>
            <p className="text-gray-400 text-sm">
              High-quality assets structured for immediate use and resale.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;