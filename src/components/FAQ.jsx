import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do I get commercial resell rights?",
    answer:
      "Yes. You are allowed to use and resell the content as per the included license terms."
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. This is a lifetime access Library with a single one-time payment."
  },
  {
    question: "How do I get access after purchase?",
    answer:
      "After successful payment, we verify your email and grant restricted Google Drive access."
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Due to the nature of digital products, refunds are limited. Please read the terms before purchase."
  },
  {
    question: "Will I receive future updates?",
    answer:
      "If updates are released, they will be added to the vault for existing buyers."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".faq-item");

    gsap.fromTo(
      items,
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
    <section ref={sectionRef} className="relative py-28 px-6">
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span className="font-semibold text-lg">
                {faq.question}
              </span>
              <span
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-40 mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;