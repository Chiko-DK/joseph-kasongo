"use client"

import { Code, Smartphone, BarChart3, Server } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive web applications with clean architecture, strong performance, and long term maintainability.",
    icon: Code,
  },
  {
    title: "App Development",
    description:
      "Designing and developing scalable applications with intuitive user experiences across web based platforms.",
    icon: Smartphone,
  },
  {
    title: "Data Visualization",
    description:
      "Transforming complex datasets into clear, interactive visualizations that support insight and decision making.",
    icon: BarChart3,
  },
  {
    title: "Backend & APIs",
    description:
      "Creating robust backend systems and APIs that are secure, scalable, and easy to extend over time.",
    icon: Server,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14 animate-fade-up">
          <h2 className="text-3xl font-bold text-foreground">
            Features & Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            What I build and the problems I help solve through software.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="group relative rounded-xl bg-card border border-border p-6 card-hover scale-in"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 text-accent interactive-hover group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
