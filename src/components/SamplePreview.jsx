const SamplePreview = () => {
  const previews = [
    "/preview1.jpg",
    "/preview2.jpg",
    "/preview3.jpg",
  ];

  return (
    <section className="bg-[#0B0B0F] py-20 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Real <span className="text-[#FFD700]">Preview Samples</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {previews.map((img, index) => (
            <div
              key={index}
              className="bg-[#15151A] rounded-xl p-4 hover:scale-105 transition"
            >
              <img
                src={img}
                alt="Preview"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplePreview;