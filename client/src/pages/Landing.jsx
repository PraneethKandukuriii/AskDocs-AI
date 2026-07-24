import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Cta from "../components/landing/Cta";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Cta />

      <Footer />

    </div>
  );
};

export default Landing;