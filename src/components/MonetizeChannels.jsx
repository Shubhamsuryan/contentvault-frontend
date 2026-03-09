const MonetizeChannels = () => {
  const channels = [
    {
      name: "Instagram",
      description: "Publish consistently to grow followers, attract brand deals, and sell your own digital products.",
    },
    {
      name: "YouTube",
      description: "Turn repeatable uploads into long-term views, ad revenue, and steady trust with your audience.",
    },
    {
      name: "TikTok",
      description: "Post high-frequency short content that drives reach, engagement, and direct conversions.",
    },
  ];

  return (
    <section className="bg-[#0B0B0F] py-20 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Monetize Your Channels With <span className="text-[#FFD700]">Consistency</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto ">
          Build a repeatable posting system across Instagram, YouTube, and TikTok so each week moves you closer to stable income.
        </p>
        <p className="text-red-400 text-center max-w-3xl mx-auto mb-14">
          🔥 Launch Offer Ending Soon <br />
Join 11,000+ creators who already downloaded the vault.
<br />

⏳ Offer expires in 24 hours
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="bg-[#15151A] rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">{channel.name}</h3>
              <p className="text-gray-400">{channel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonetizeChannels;