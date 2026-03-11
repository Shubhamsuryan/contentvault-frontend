const Reviews = () => {
  const reviews = [
    {
      name: "Aman Sharma",
      role: "Digital Marketer",
      text: "The Library is properly organized. Much better than random Telegram folders.",
      rating: "★★★★★"
    },
    {
      name: "Riya Kapoor",
      role: "Instagram Page Owner",
      text: "I liked how everything is categorized. Saves a lot of time.",
      rating: "★★★★☆"
    },
    {
      name: "Harsh Patel",
      role: "Freelancer",
      text: "Worth the price honestly. The templates alone are useful for client work.",
      rating: "★★★★☆"
    },
    {
      name: "Sneha Verma",
      role: "Content Creator",
      text: "Got access quickly and download speed was smooth.",
      rating: "★★★★★"
    },
    {
      name: "Aditya Mehta",
      role: "Student",
      text: "Good starting point if someone wants to try digital reselling.",
      rating: "★★★★☆"
    },
    {
      name: "Neha Singh",
      role: "Small Business Owner",
      text: "The reels collection is huge. I didn’t expect this much data.",
      rating: "★★★★★"
    },
    {
      name: "Kunal Jain",
      role: "Agency Beginner",
      text: "Helpful for quick content needs. Clean structure impressed me.",
      rating: "★★★★☆"
    },
    {
      name: "Pooja Nair",
      role: "Freelance Designer",
      text: "Templates are practical and easy to edit.",
      rating: "★★★★★"
    },
    {
      name: "Rahul Desai",
      role: "Side Hustler",
      text: "For ₹29, the value makes sense. No complaints so far.",
      rating: "★★★★☆"
    },
  ];

  return (
    <section className="bg-black py-20 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          What Early <span className="text-[#FFD700]">Buyers Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#15151A] rounded-2xl p-6 text-left hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>

              <p className="text-[#FFD700] text-sm mb-3">{review.rating}</p>

              <p className="text-gray-400 text-sm">
                {review.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;