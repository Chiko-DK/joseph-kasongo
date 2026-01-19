import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          
          {/* Brand */}
          <h2 className="text-xl font-semibold text-foreground">
            Chiko DK
          </h2>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
            <Link href="#home" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex gap-4 text-foreground/70">
            <a
              href="https://www.instagram.com/chiko_dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/joseph-chiko-kasongo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://wa.me/27634523316"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.18 1.6 6.02L0 24l6.2-1.63A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.48-8.52zm-8.51 18.4a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.68.97.98-3.58-.24-.37A9.92 9.92 0 1122 12c0 5.48-4.46 9.88-9.99 9.88zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.06.15.2 2.11 3.23 5.11 4.53.71.31 1.27.5 1.7.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground/50">
            © {currentYear} Chiko DK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
