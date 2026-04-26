import { Instagram, Linkedin, Twitter, Palette, TrendingUp, Lightbulb, Target } from "lucide-react";
import founderImg from "@/assets/founder.png";

const traits = [
  { icon: Palette, label: "Creative Director", desc: "Crafting brand identities that are bold, intentional, and impossible to ignore." },
  { icon: TrendingUp, label: "Growth Strategist", desc: "Turning raw attention into compounding business results through smart systems." },
  { icon: Target, label: "Performance-Minded", desc: "Every creative decision is backed by data and tied to a measurable outcome." },
  { icon: Lightbulb, label: "Content Architect", desc: "Building content ecosystems that work 24/7 to attract, engage, and convert." },
];

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/senzarc/", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/pranav-periboina/", label: "LinkedIn" },
  { Icon: Twitter, href: "https://x.com/ShopSenzarc", label: "X / Twitter" },
];

const Founder = () => {
  return (
    <section id="founder" className="relative py-28 bg-secondary/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Meet the Mind Behind It</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            The <span className="text-gradient-red">Founder</span>.
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="relative w-72 md:w-96 rounded-3xl overflow-hidden border border-primary/30 shadow-red">
                <img
                  src={founderImg}
                  alt="Pranav Periboina — Founder & Creative Director, Senzarc"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full glass border border-primary/40 text-xs font-semibold uppercase tracking-widest text-primary whitespace-nowrap shadow-glow">
                Founder & Creative Director
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Pranav <span className="text-gradient-red">Periboina</span>
              </h3>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mt-2 font-medium">
                Senzarc · Founder & Creative Director
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pranav Periboina is a digital marketing strategist and founder of Senzarc, focused on building brands that don't just look good — but <span className="text-foreground font-medium">perform</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                He specializes in <span className="text-foreground font-medium">content, branding, and growth strategies</span>, helping businesses turn attention into real results. At Senzarc, every strategy is personal — engineered to make your brand unforgettable in a crowded market.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Connect</span>
              <div className="h-px flex-1 bg-border" />
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Traits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((t, i) => (
            <div
              key={t.label}
              className="group relative p-7 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/0 group-hover:bg-primary/15 rounded-full blur-3xl transition-all duration-500" />
              <div className="absolute top-5 right-5 font-display text-5xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <t.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">{t.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
