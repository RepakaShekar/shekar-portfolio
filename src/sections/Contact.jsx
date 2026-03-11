import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfXcs2YlnXtsupe2IV1t53kdD6gdCWkxjQaQ2FGxOKqKAedFg/viewform?usp=sharing&ouid=105255017859227397071"; 

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "repakashekar3@gmail.com",
    href: "mailto:repakashekar3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7036901637",
    href: "tel:+917036901637",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let’s work on{" "}
            <span className="font-serif italic font-normal text-white">
              scalable backend solutions.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Open to backend development roles, internships, and freelance
            opportunities focused on Python, Django, and REST API development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CTA Card */}
          <div className="glass p-10 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 text-center space-y-6">
            <h3 className="text-2xl font-semibold">
              Start a Conversation
            </h3>

            <p className="text-muted-foreground">
              Click below to reach out and discuss your project or opportunity.
              I usually respond within 24 hours.
            </p>

            <a href={FORM_LINK}>
              <Button className="w-full" size="lg">
                Contact Me
                <Send className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-sm">
                Actively seeking backend development opportunities in Python,
                Django, and database-driven systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};