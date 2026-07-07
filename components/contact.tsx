import { Button } from "@/components/ui/button"
import AnalyticsLink from "@/components/analytics-link"
import { profile } from "@/lib/site"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 scroll-mt-16">
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            If you are hiring, collaborating, or building something interesting, I am ready to talk.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-3">
          <AnalyticsLink
            href={`mailto:${profile.email}`}
            eventName="contact_click"
            eventProperties={{ method: "email", placement: "contact_section" }}
            className="flex items-center gap-3 group"
          >
            <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">
              {profile.email}
            </span>
          </AnalyticsLink>

          <AnalyticsLink
            href={`tel:${profile.phone}`}
            eventName="contact_click"
            eventProperties={{ method: "phone", placement: "contact_section" }}
            className="flex items-center gap-3 group"
          >
            <Phone className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">+27 63 452 3316</span>
          </AnalyticsLink>

          <AnalyticsLink
            href={profile.github}
            target="_blank"
            rel="me noopener noreferrer"
            eventName="external_profile_click"
            eventProperties={{ destination: "github", placement: "contact_section" }}
            className="flex items-center gap-3 group"
          >
            <Github className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">
              github.com/Chiko-DK
            </span>
          </AnalyticsLink>

          <AnalyticsLink
            href={profile.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            eventName="external_profile_click"
            eventProperties={{ destination: "linkedin", placement: "contact_section" }}
            className="flex items-center gap-3 group"
          >
            <Linkedin className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg text-foreground/80 group-hover:text-accent transition-colors">
              linkedin.com/in/joseph-chiko-kasongo
            </span>
          </AnalyticsLink>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Button asChild className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            <AnalyticsLink
              href={`mailto:${profile.email}`}
              eventName="contact_click"
              eventProperties={{ method: "email", placement: "contact_cta" }}
            >
              Send me an email
            </AnalyticsLink>
          </Button>

          <Button asChild variant="outline" className="w-full md:w-auto">
            <AnalyticsLink
              href="/docs/CV.pdf"
              download
              eventName="download_cv"
              eventProperties={{ placement: "contact_section" }}
            >
              Download CV
            </AnalyticsLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
