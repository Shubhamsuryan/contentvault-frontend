import Hero from "../components/Hero";
import Features from "../components/Features";
import MonetizeChannels from "../components/MonetizeChannels";
import PreviewSection from "../components/PreviewSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import SocialProof from "../components/SocialProof";
import SamplePreview from "../components/SamplePreview";
import Reviews from "../components/Reviews";
import AfterPayment from "../components/AfterPayment";
import BundleBreakdown from "../components/BundleBreakdown";
import DemoSection from "../components/DemoSection";
import Objections from "../components/Objections";
import NotForEveryone from "../components/NotForEveryone";
import Guarantee from "../components/Guarantee";
import StorySection from "../components/StorySection";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <MonetizeChannels />
      <SocialProof />
      <PreviewSection />
      <StorySection />
        <BundleBreakdown />
      <SamplePreview />
      <DemoSection />
      <Objections />
      <NotForEveryone />
      <Reviews />
      <HowItWorks />
      <Guarantee />
      <Pricing />
      <FAQ />
        <Footer />
        <div className="hidden md:block fixed right-6 bottom-6 z-50">
  <button
    onClick={() =>
      document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })
    }
    className="bg-[#FFD700] text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
  >
    Get Access – ₹499
  </button>
</div>
    </div>
  );
};

export default Home;