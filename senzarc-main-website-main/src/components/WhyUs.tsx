import { Zap, Brain, Rocket, UserCheck } from "lucide-react";

const reasons = [
  { icon: Zap, title: "ROI-Focused", desc: "Every dollar tracked. Every decision tied to revenue." },
  { icon: Brain, title: "Creative + Analytical", desc: "Right-brain ideas validated by left-brain data." },
  { icon: Rocket, title: "Fast Execution", desc: "From kickoff to live campaign in days — not months." },
  { icon: UserCheck, title: "Personalized Strategy", desc: "No templates. Every plan built around your brand." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-28">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Built different. <span className="text-gradient-red">By design.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary transition-all duration-500"
            >
              <div className="absolute top-6 right-6 font-display text-5xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors">
                0{i + 1}
              </div>
              <r.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
