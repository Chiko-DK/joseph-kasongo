"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import AnalyticsLink from "@/components/analytics-link"
import { ArrowDown, BriefcaseBusiness, Github, MapPin } from "lucide-react"
import Image from "next/image"

const roles = [
  "Web Developer",
  "Software Developer",
  "Mobile Developer",
  "Business Analyst",
]

export default function Hero() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setRoleIndex(prev => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])
  
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                Full Stack Software Developer
              </span>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                Hi, I&apos;m Chiko
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-foreground slide-up">
                {text}
                <span className="ml-1 animate-pulse">|</span>
              </h2>
              
              <p className="text-lg text-foreground/70 leading-relaxed slide-up">I build practical software across the frontend, backend, and data layer. Full-stack focused developer with experience across web, mobile, data visualization, machine learning, and systems thinking.</p>
            </div>

            {/* Location and availability row */}
            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>Cape Town, South Africa</span>
              </div>

              <span className="text-foreground/30">•</span>

              <div className="flex items-center gap-1">
                <BriefcaseBusiness size={14} />
                <span>Available now</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
                <AnalyticsLink
                  href="/docs/CV.pdf"
                  download
                  eventName="download_cv"
                  eventProperties={{ placement: "hero" }}
                >
                  Download CV
                </AnalyticsLink>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-muted bg-transparent button-hover"
              >
                <AnalyticsLink
                  href="#contact"
                  eventName="section_navigation"
                  eventProperties={{ target: "contact", placement: "hero" }}
                >
                  Contact Me
                </AnalyticsLink>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/pics/hero-workspace.svg"
                alt="Illustration of a full stack development workspace"
                width={720}
                height={720}
                priority
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/70 bg-background/85 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Frontend + Backend + Data</p>
                    <p className="text-xs text-muted-foreground">React, Next.js, APIs, SQL, Python</p>
                  </div>
                  <AnalyticsLink
                    href="https://github.com/Chiko-DK"
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label="Visit Joseph Kasongo on GitHub"
                    eventName="external_profile_click"
                    eventProperties={{ destination: "github", placement: "hero" }}
                    className="rounded-md bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    <Github size={18} />
                  </AnalyticsLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-accent transition-colors duration-300" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
