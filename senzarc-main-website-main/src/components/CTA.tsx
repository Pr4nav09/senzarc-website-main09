import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-12 md:p-20 text-center">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-red" />

          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Ready When You Are</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
              Let's <span className="text-gradient-red">Grow</span>
              <br />Your Brand.
            </h2>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground mt-6">
              Book a free strategy call. We'll audit your funnel, find the leaks, and map a plan to scale.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer">
                  Start Now <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="outlineRed" size="xl" asChild>
                <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer">Book Free Strategy Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
