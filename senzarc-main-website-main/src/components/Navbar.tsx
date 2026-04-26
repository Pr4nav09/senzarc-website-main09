import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-dark.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ai", label: "AI" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/50" : ""
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="SenzarC Media Agency" className="h-9 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/50">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/80 hover:text-primary transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <a href="https://www.instagram.com/senzarc/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book a Call</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
