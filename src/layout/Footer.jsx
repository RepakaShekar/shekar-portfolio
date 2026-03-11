import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/RepakaShekar",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shekar-repaka-2314b92a1/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/shekar_R3",
    label: "X (Twitter)",
  },
  {
    icon: Mail,
    href: "repakashekar3@gmail.com",
    label: "Gmail",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "My Work Approach" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Shekar Repaka<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm">
              Backend Developer specializing in Python, Django, and scalable
              REST APIs. Building secure and production-ready backend systems.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {currentYear} Shekar Repaka. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          Designed & Built with precision using modern web technologies.
        </div>
      </div>
    </footer>
  );
};