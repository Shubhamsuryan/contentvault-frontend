const Objections = () => {
  const objections = [
    {
      question: "Is this legal to use and resell?",
      answer:
        "Yes. You are granted resell rights for individual assets included in the bundle, as defined in our License Agreement.",
    },
    {
      question: "Will I face copyright issues?",
      answer:
        "You are allowed to modify and use the assets as per license terms. We recommend editing before resale for best results.",
    },
    {
      question: "Is this beginner friendly?",
      answer:
        "Yes. The bundle is organized in structured folders, making it easy even for first-time users.",
    },
    {
      question: "Is ₹499 really worth it?",
      answer:
        "The total bundle value exceeds ₹35,000+. Even selling a few assets can recover your investment.",
    },
  ];

  return (
    <section className="bg-black py-20 border-t border-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Still <span className="text-[#FFD700]">Thinking?</span>
        </h2>

        <div className="space-y-8 text-left">
          {objections.map((item, index) => (
            <div key={index} className="bg-[#15151A] p-6 rounded-xl">
              <h3 className="font-semibold text-[#FFD700] mb-2">
                {item.question}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Objections;