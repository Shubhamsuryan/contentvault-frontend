import Storyboard from "../assets/Storyboard.mp4";

const DemoSection = () => {
  return (
    <section className="bg-[#0B0B0F] py-20 border-t border-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          See How Everything Is <span className="text-[#FFD700]">Organized</span>
        </h2>

        <div className="bg-[#15151A] p-4 rounded-xl">
          <video
            controls
            className="w-full rounded-lg "
          >
            <source src={Storyboard} type="video/mp4" />
          </video>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          Quick preview of folder structure & content categories.
        </p>

      </div>
    </section>
  );
};

export default DemoSection;