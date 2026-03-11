import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Smart Online Voting System",
    description:
      "A Python-based backend application for secure online voting with authentication workflows, duplicate vote prevention, and database validation logic to ensure system integrity.",
    image: "/projects/project1.png",
    tags: ["Python", "Django", "Authentication", "MySQL"],
    link: "https://github.com/RepakaShekar",
    github: "https://github.com/RepakaShekar",
  },
  {
    title: "Fast Lane Detection (Attention Mechanism)",
    description:
      "Developed a Python-based lane detection system using attention mechanisms for identifying road lanes from image data with improved accuracy through preprocessing and model evaluation.",
    image: "/projects/project2.png",
    tags: ["Python", "Image Processing", "Model Evaluation"],
    link: "https://github.com/RepakaShekar",
    github: "https://github.com/RepakaShekar",
  },
  {
    title: "Task Manager Application",
    description:
      "A Python-based task management application allowing users to create, update, and track tasks with file-based data storage and backend validation logic.",
    image: "/projects/project3.png",
    tags: ["Python", "CRUD", "Backend Logic"],
    link: "https://github.com/RepakaShekar",
    github: "https://github.com/RepakaShekar",
  },
  {
    title: "LifeSync AI Agent",
    description:
      "Designed a modular Python-based personal automation agent to manage tasks and workflows with scalable architecture and version-controlled development.",
    image: "/projects/project4.png",
    tags: ["Python", "Automation", "Git"],
    link: "https://github.com/RepakaShekar",
    github: "https://github.com/RepakaShekar",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Real-world backend
            <span className="font-serif italic font-normal text-white">
              {" "}
              project experience.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Academic, internship, and personal projects focused on backend
            logic, authentication systems, and database-driven applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a 
          href="https://github.com/RepakaShekar" 
          target="_blank" 
          rel="noopener noreferrer"
          >
        <AnimatedBorderButton>
          View More Projects
        <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
        </a>
        </div>
      </div>
    </section>
  );
};