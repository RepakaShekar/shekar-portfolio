import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "I approach backend development with clear structure and proper planning. I design Django applications with organized apps, models, and REST APIs that are easy to maintain and extend.",
    author: "Structured Development",
    role: "Clean Django Architecture",
    avatar:
      "/projects/approach1.jpg",
  },
  {
    quote:
      "Security and validation are essential. I implement authentication workflows, input validation, and database integrity rules to ensure reliable backend systems.",
    author: "Security & Validation",
    role: "Authentication & Data Protection",
    avatar:
      "/projects/approach2.jpg",
  },
  {
    quote:
      "I focus on writing efficient SQL queries and optimizing backend logic to improve performance and maintain system stability.",
    author: "Performance Awareness",
    role: "Optimized Queries & Backend Logic",
    avatar:
      "/projects/approach3.jpg",
  },
  {
    quote:
      "My workflow includes using Git for version control, Postman for API testing, and consistent debugging practices to ensure clean and production-ready code.",
    author: "Professional Workflow",
    role: "Testing, Debugging & Version Control",
    avatar:
      "/projects/approach4.jpg",
  },
];

export const Myworkapproach = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="approach" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Work Approach
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            How I build{" "}
            <span className="font-serif italic font-normal text-white">
              reliable backend systems.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};