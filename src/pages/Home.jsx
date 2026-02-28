import Hero from "../components/Hero";
import Features from "../components/Features";
import PreviewSection from "../components/PreviewSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <PreviewSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
        <Footer />
    </div>
  );
};

export default Home;