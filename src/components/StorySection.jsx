const StorySection = () => {
  return (
    <section className="bg-[#0B0B0F] py-20 border-t border-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why We Built <span className="text-[#FFD700]">ContentVault Pro</span>
        </h2>

        <p className="text-gray-400 leading-relaxed mb-6">
          We saw creators wasting weeks downloading random bundles from different
          sources — unorganized, incomplete, and often low quality.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          So we structured everything into a properly categorized digital vault —
          ready for immediate use and resale.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Instead of chasing files everywhere, creators can now focus on
          launching, scaling, and earning.
        </p>

      </div>
    </section>
  );
};

export default StorySection;