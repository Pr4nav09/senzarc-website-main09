import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 bg-secondary/20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="SenzarC" className="h-9 w-auto mb-5" />
            <p className="text-muted-foreground max-w-sm">
              A digital marketing agency engineering growth for ambitious brands worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> contact@senzarc.agency</li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918897742987" className="hover:text-primary transition-colors">+91 88977 42987</a>
              </li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Follow</h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/senzarc/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/110474016/", label: "LinkedIn" },
                { Icon: Twitter, href: "https://x.com/ShopSenzarc", label: "X / Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} SenzarC Media Agency. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-foreground transition">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
