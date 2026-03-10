import Library1 from "../assets/Library1.png";
import Library2 from "../assets/Library2.png";
import Library3 from "../assets/Library3.png";

const PreviewSection = () => {
  const modules = [

    
    {
      title: "2000+ Premium Animated High-Quality Videos, Templates",
      desc: "Ready-made animated longform videos for YouTube, ads and social media content. Fully customizable and easy to edit. Copyright free unique vedios delivers to every new buyers, so no copyright occures.",
      worth: "₹19,000",
      image: Library1,
    },
    {
      title: "40+ Digital Business Courses",
      desc: "Marketing, freelancing, ecommerce & AI content creation training courses.",
      worth: "₹6600",
      image: Library2,
    },
    {
      title: "2,00,000+ Viral Reels Library",
      desc: "High-quality ready-to-post reels for Instagram & YouTube growth.",
      worth: "₹14,000",
      image: Library3,
    }
  ];

  return (
    <section className="bg-[#0B0B0F] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Everything Included Inside The <span className="text-[#FFD700]">Mega Library</span>
        </h2>
        <h6 className="text-xl md:text-xl font-bold text-center mb-16">
         Total Library Worth ₹40,500+      
<span className="text-[#FFD700]">     Today Only (₹49)</span>
        </h6>

        <div className="space-y-10">
          {modules.map((item, index) => (
            <div
              key={index}
              className="bg-[#15151A] rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center hover:scale-[1.02] transition duration-300"
            >
              {/* Placeholder Image Box */}
              <div className="h-56 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center text-gray-500">
                <img src={item.image} alt="Library 1" className="h-full w-full object-cover rounded-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#FFD700]">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.desc}
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  Worth {item.worth} • Included in Library
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PreviewSection;