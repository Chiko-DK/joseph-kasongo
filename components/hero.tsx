"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, BriefcaseBusiness } from "lucide-react"

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
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 slide-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground slide-up">
                Hi, I'm Chiko
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-foreground slide-up">
                {text}
                <span className="ml-1 animate-pulse">|</span>
              </h2>
              
              <p className="text-lg text-foreground/70 leading-relaxed slide-up">Full-stack focused developer with experience across web, backend, data visualization, machine learning, and systems thinking.</p>
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

            {/*Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/docs/CV.pdf" download className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
                Download CV
              </Button>
              </a>

              <a href="#contact" className="flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-border hover:bg-muted bg-transparent button-hover"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="flex items-center justify-center scale-in">
            <div className="w-full aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border border-border interactive-hover">
              <div className="text-center space-y-2">
                <p className="text-sm text-foreground/60">Anime-style portrait</p>
                <p className="text-xs text-foreground/40">placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Updated animation to be more subtle */}
        <div className="flex justify-center pt-12">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="text-accent transition-colors duration-300" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
