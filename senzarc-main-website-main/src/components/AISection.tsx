import { Brain, Zap, BarChart3, Wand2, SearchCheck, MessageSquareText } from "lucide-react";

const aiFeatures = [
  {
    icon: Wand2,
    title: "AI-Powered Content Creation",
    desc: "We use AI to ideate, script, and refine content at speed — so your brand always has fresh, relevant, and on-brand material without the wait.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "AI analyzes your audience behaviour, peak engagement windows, and content performance to help us make smarter decisions — before we even post.",
  },
  {
    icon: SearchCheck,
    title: "Trend & Competitor Intelligence",
    desc: "Our AI tools scan thousands of data points across platforms in real time, surfacing trends and competitor moves so we stay ahead of the curve for you.",
  },
  {
    icon: MessageSquareText,
    title: "Smarter Ad Copy & Targeting",
    desc: "AI helps us craft high-converting ad copy variations and fine-tune audience targeting — cutting wasted spend and maximising your ROI.",
  },
  {
    icon: Brain,
    title: "Brand Voice Training",
    desc: "We train AI models on your specific tone, vocabulary, and values — so every piece of content sounds unmistakably like you, at scale.",
  },
  {
    icon: Zap,
    title: "Faster Execution, Zero Compromise",
    desc: "AI handles the repetitive work so our team focuses on strategy and creativity — giving you agency-level quality at a fraction of the usual timeline.",
  },
];

const AISection = () => {
  return (
    <section id="ai" className="relative py-28 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Next-Level Marketing</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            We don't just use AI.{" "}
            <span className="text-gradient-red">We weaponise it.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6 leading-relaxed">
            At Senzarc, AI isn't a gimmick — it's built into every layer of our workflow. From content to campaigns to analytics, AI gives your brand an unfair advantage.
          </p>
        </div>

        {/* Central badge */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-3 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/35 transition-all duration-700" />
            <div className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-card border border-primary/40 shadow-glow">
              <Brain className="w-6 h-6 text-primary animate-pulse" />
              <span className="font-display text-lg font-bold tracking-wide">AI-Enhanced Agency</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/15 rounded-full blur-3xl transition-all duration-700" />

              {/* Number watermark */}
              <div className="absolute top-5 right-6 font-display text-6xl font-bold text-primary/8 group-hover:text-primary/20 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-card p-8 md:p-12 text-center">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-red" />
          <div className="relative">
            <p className="font-display text-2xl md:text-3xl font-bold">
              Human creativity.{" "}
              <span className="text-gradient-red">AI precision.</span>{" "}
              Results that speak.
            </p>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              The best agencies in 2025 aren't choosing between human and AI — they're combining both. That's exactly what Senzarc does for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
