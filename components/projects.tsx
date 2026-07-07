import { Card } from "@/components/ui/card"
import AnalyticsLink from "@/components/analytics-link"
import { projects } from "@/lib/site"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Featured Projects
        </h2>
        <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm md:text-base">
          A showcase of public projects demonstrating full stack thinking, user interface work, and practical software design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group p-5 flex flex-col border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="w-full h-40 rounded-lg bg-muted overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={640}
                height={360}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-base font-semibold text-foreground mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              {project.description}
            </p>

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

            <div className="mt-auto flex flex-wrap gap-3">
              {project.github ? (
                <AnalyticsLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  eventName="project_link_click"
                  eventProperties={{ project: project.title, destination: "github" }}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
                >
                  <Github size={16} />
                  GitHub
                </AnalyticsLink>
              ) : null}

              {project.demo ? (
                <AnalyticsLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  eventName="project_link_click"
                  eventProperties={{ project: project.title, destination: "demo" }}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
                >
                  <ExternalLink size={16} />
                  Demo
                </AnalyticsLink>
              ) : null}

              {!project.github && !project.demo ? (
                <span className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">
                  Links coming soon
                </span>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
