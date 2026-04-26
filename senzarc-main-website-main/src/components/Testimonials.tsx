import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Senzarc completely transformed our brand presence. From visuals to content strategy, everything feels premium and aligned with our identity. We have seen a noticeable boost in engagement and customer interest.",
    name: "Blings & Love",
    role: "Client, Senzarc",
  },
  {
    quote: "Working with Senzarc helped us turn our social media into a real growth channel. Their content strategy and consistency brought more reach, more orders, and a stronger brand voice.",
    name: "CraveYum",
    role: "Client, Senzarc",
  },
  {
    quote: "The team at Senzarc understands aesthetics and audience psychology perfectly. Our page now looks cohesive, attractive, and converts viewers into customers.",
    name: "Siera Cafe",
    role: "Client, Senzarc",
  },
  {
    quote: "Senzarc did not just manage our content. They elevated our entire brand. From creatives to campaigns, everything is executed with clarity and purpose.",
    name: "The Saaz",
    role: "Client, Senzarc",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Client Love</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Trusted by <span className="text-gradient-red">real brands</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-lg">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
