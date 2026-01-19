import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 scroll-mt-16">
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            If you are building something interesting, I am listening.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-3">
          <a href="mailto:cdamberd@gmail.com" className="flex items-center gap-3 group">
            <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">
              cdamberd@gmail.com
            </span>
          </a>

          <a
            href="tel: +27634523316"
            className="flex items-center gap-3 group"
          >
            <Phone className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">+27 63 452 3316</span>
          </a>

          <a
            href="https://github.com/Chiko-DK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <Github className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">
              github.com/Chiko-DK
            </span>
          </a>
        </div>

        {/* Email CTA Button */}
        <div className="pt-4">
          <a href="mailto:cdamberd@gmail.com">
            <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Send me an email
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
