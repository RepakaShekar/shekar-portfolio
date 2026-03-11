import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "REST APIs",
  "MySQL",
  "SQL",
  "Postman",
  "Git",
  "Azure Fundamentals",
  "HTML",
  "CSS",
  "JavaScript (Basics)",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#3b82f6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Python Backend Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building secure
                <br />
                and scalable
                <br />
                <span className="font-serif italic font-normal text-white">
                  backend systems.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Shekar Repaka — a Python Backend Developer with
                hands-on experience in Django and REST API development.
                I build authentication workflows, database-driven applications,
                and clean backend architectures.
              </p>
            </div>


            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              {/* Contact Link */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXcs2YlnXtsupe2IV1t53kdD6gdCWkxjQaQ2FGxOKqKAedFg/viewform?usp=sharing&ouid=105255017859227397071" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                  </Button>
                  </a>
              
             {/* Resume Download Link */}
             <a 
             href="https://drive.google.com/file/d/1a2Z8VAAg35zpQw4MChHsJwOmqPX5sB8c/view?usp=sharing" 
             target="_blank" 
             rel="noopener noreferrer" 
             download
             >
            <AnimatedBorderButton>
              <Download className="w-5 h-5" />
              Download Resume
            </AnimatedBorderButton>
            </a>
          </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>
              {[
                { icon: Github, href: "https://github.com/RepakaShekar" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shekar-repaka-2314b92a1/" },
                { icon: Twitter, href: "https://x.com/shekar_R3" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-full p-2">
                <img
                  src="/profile-photo.jpg"
                  alt="Shekar Repaka"
                  className="w-full aspect-square object-cover rounded-full"
                />

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for opportunities
                    </span>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xs text-muted-foreground">
                    Entry Level Backend Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies & Tools
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};