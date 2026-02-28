import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const steps = sectionRef.current.querySelectorAll(".step");
    const line = sectionRef.current.querySelector(".progress-line");

    // Animate line growth
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Animate steps
    gsap.fromTo(
      steps,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 px-6">
      
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold">
          How It Works
        </h2>
        <p className="text-gray-400 mt-4">
          Simple. Secure. Instant.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Progress Line (Desktop Only) */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-white/10">
          <div className="progress-line h-full bg-gradient-to-r from-blue-500 to-purple-500 origin-left scale-x-0"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          
          {[
            {
              title: "Secure Purchase",
              desc: "Complete payment safely using Razorpay."
            },
            {
              title: "Email Verification",
              desc: "We verify your purchase email."
            },
            {
              title: "Private Vault Access",
              desc: "Get restricted Google Drive access instantly."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="step backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="text-4xl font-bold mb-4 text-purple-400">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default HowItWorks;