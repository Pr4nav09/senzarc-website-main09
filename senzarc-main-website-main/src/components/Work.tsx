import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const projects = [
  { img: work1, tag: "E-commerce", title: "Lumière Skincare", result: "+412% Revenue in 90 days" },
  { img: work2, tag: "Social", title: "Moonlight App Launch", result: "1.2M organic reach" },
  { img: work3, tag: "Branding", title: "Sigity Rebrand", result: "3x Brand Recall Lift" },
  { img: work4, tag: "Performance", title: "Northwave SaaS", result: "8.4x ROAS · 60-day scale" },
];

const Work = () => {
  return (
    <section id="work" className="relative py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Selected Work</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Real brands. <span className="text-gradient-red">Real results.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of campaigns where strategy, design, and execution delivered measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary mb-3">
                  {p.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
                <p className="text-primary font-medium mt-2">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
