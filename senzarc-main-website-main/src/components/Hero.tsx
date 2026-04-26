import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur text-xs uppercase tracking-widest text-muted-foreground mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Digital Marketing Agency
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          We Don't Just Market.<br />
          <span className="text-gradient-red">We Make Brands</span>
          <br />
          <span className="text-gradient">Unforgettable.</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          Strategic growth, magnetic visibility, and measurable ROI — engineered for ambitious brands ready to dominate their market.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer">
              Get Started <ArrowRight className="ml-1" />
            </a>
          </Button>
          <Button variant="outlineRed" size="xl" asChild>
            <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer">
              <PhoneCall className="mr-1" /> Book a Free Strategy Call
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          {[
            { v: "30+", l: "Brands Scaled" },
            { v: "4x", l: "Avg ROAS" },
            { v: "₹50L+", l: "Ad Spend Managed" },
            { v: "98%", l: "Client Retention" },
          ].map((s) => (
            <div key={s.l} className="text-left md:text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-red">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
