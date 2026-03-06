const BundleBreakdown = () => {
  const items = [
    "2,00,000+ Copyright free Reels",
    "6,000+ Business & Finance Reels",
    "4,000+ AI & Tech Shorts",
    "5,000+ Editable Templates",
    "40+ Digital Courses",
    "Complete Resell Rights Documentation"
  ];

  return (
    <section className="bg-black py-20 border-t border-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What’s Inside The <span className="text-[#FFD700]">Vault</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {items.map((item, index) => (
            <div key={index} className="bg-[#15151A] p-5 rounded-xl">
              <p className="text-gray-300">✔ {item}</p>
            </div>
          ))}
        </div>

        <p className="text-[#FFD700] font-bold text-xl mt-12">
          Total Bundle Worth ₹40,500+ — Today Only ₹599
        </p>

      </div>
    </section>
  );
};

export default BundleBreakdown;