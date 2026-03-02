const HowItWorks = () => {
  const steps = [
    {
      title: "1. Secure Payment",
      desc: "Complete your purchase safely using Razorpay (UPI, Card, Netbanking supported).",
    },
    {
      title: "2. Instant Confirmation",
      desc: "You receive payment confirmation immediately after successful transaction.",
    },
    {
      title: "3. Access Within 24 Hours",
      desc: "Your Google Drive access is granted quickly so you can start posting content consistently.",
    },
  ];

  return (
    <section className="bg-black py-20 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It <span className="text-[#FFD700]">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#15151A] rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-[#FFD700]">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;