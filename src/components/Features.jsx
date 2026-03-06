const Features = () => {
  return (
    <section className="bg-black border-t border-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Everything You Need To Start & Scale
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#FFD700]">2,00,000+</h3>
            <p className="text-gray-400 mt-3">High Quality Shorts</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FFD700]">2,000+</h3>
            <p className="text-gray-400 mt-3">Long Form Videos</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FFD700]">Full</h3>
            <p className="text-gray-400 mt-3">Commercial Resell Rights</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FFD700]">Lifetime</h3>
            <p className="text-gray-400 mt-3">Access & Updates</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;