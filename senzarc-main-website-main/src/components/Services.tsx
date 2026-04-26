import { Megaphone, Target, Palette, Video, TrendingUp, Sparkles } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Build a magnetic presence across Instagram, TikTok, LinkedIn & X with content that converts." },
  { icon: Target, title: "Performance Marketing", desc: "High-ROAS paid ad campaigns on Meta, Google, and TikTok engineered to scale profitably." },
  { icon: Palette, title: "Branding & Design", desc: "Identity systems, visuals, and design that command attention and earn trust." },
  { icon: Video, title: "Content Creation", desc: "Scroll-stopping reels, photography, and copy crafted for your audience." },
  { icon: TrendingUp, title: "SEO & Growth Strategy", desc: "Rank, grow, and convert — sustainable organic strategies that compound over time." },
  { icon: Sparkles, title: "Full-Funnel Strategy", desc: "End-to-end marketing roadmaps aligned with your business goals and KPIs." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-secondary/20">
      <div className="absolute inset-0 bg-glow opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Services that <span className="text-gradient-red">drive growth</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/20 rounded-full blur-3xl transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
