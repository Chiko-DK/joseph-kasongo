import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Research Collaboration Visualization Tool",
      description:
        "Interactive web application for exploring research topics and collaboration networks across thousands of academic publications.",
      stack: ["React", "D3.js", "Next.js", "Python"],
      links: { github: "#", demo: "#" },
    },
    {
      title: "Scrum Poker Web App",
      description:
        "Lightweight estimation tool focused on simplicity and fast team alignment, built with a clean and intuitive interface.",
      stack: ["Vue.js", "React", "Tailwind CSS"],
      links: { github: "#", demo: "#" },
    },
    {
      title: "P2P Lending Platform (Lown)",
      description:
        "Dashboard driven peer to peer lending concept focused on financial inclusion, transparency, and micro loan tracking.",
      stack: ["Next.js", "FastAPI", "SQLite"],
      links: { github: "#", demo: "#" },
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Featured Work
        </h2>
        <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm md:text-base">
          A showcase of recent projects demonstrating experience in full stack
          development and system design.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group p-5 flex flex-col border bg-background animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Image */}
            <div className="w-full h-40 rounded-lg bg-muted overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-sm text-foreground/40">
                  Project Image
                </span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-base font-semibold text-foreground mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-muted text-foreground/60 transition-colors group-hover:text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-auto flex gap-3">
              <a
                href={project.links.github}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href={project.links.demo}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
