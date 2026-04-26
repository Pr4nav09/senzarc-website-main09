import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Testimonials from "@/components/Testimonials";
import Founder from "@/components/Founder";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>

        <Hero />
        <About />
        <Services />
        <AISection />
        <Testimonials />
        <Founder />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
