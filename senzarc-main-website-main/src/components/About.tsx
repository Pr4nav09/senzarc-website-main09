const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">About SenzarC</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              A results-driven agency built for <span className="text-gradient-red">bold brands</span>.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              SenzarC blends sharp creativity with cold, hard data. We don't chase trends — we engineer growth systems that turn attention into revenue.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From scrappy startups to scaling enterprises, our team delivers campaigns that move metrics, build culture, and make competitors nervous.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-display text-2xl font-bold">Creative</div>
                <div className="text-sm text-muted-foreground">Bold, original, on-brand.</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="font-display text-2xl font-bold">Data-Driven</div>
                <div className="text-sm text-muted-foreground">Every move is measured.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
