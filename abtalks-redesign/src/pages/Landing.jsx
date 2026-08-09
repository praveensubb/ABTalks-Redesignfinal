import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import WhySection from "../components/landing/WhySection";
import Statistics from "../components/landing/Statistics";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CallToAction from "../components/landing/CallToAction";
import Footer from "../components/common/Footer";

function Landing() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <WhySection />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

export default Landing;