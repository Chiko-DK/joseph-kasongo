"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Mail, CodeXml, FolderOpen, Home, IdCard } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: IdCard },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Services", href: "#services", icon: CodeXml },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md interactive-hover"
          aria-label="Chiko DK home"
        >
          <Image
            src="/icon.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl shadow-sm"
          />
          <span className="hidden font-semibold tracking-tight text-foreground sm:inline">
            Chiko DK
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent interactive-hover"
            >
              <link.icon size={18} className="opacity-80" />
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-md hover:bg-muted interactive-hover"
            aria-label="Toggle theme"
            type="button"
          >
            <Sun size={18} className="hidden text-accent dark:block" />
            <Moon size={18} className="text-accent dark:hidden" />
          </button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted interactive-hover"
            aria-label="Toggle theme"
            type="button"
          >
            <Sun size={18} className="hidden text-accent dark:block" />
            <Moon size={18} className="text-accent dark:hidden" />
          </button>
          <button
            className="interactive-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 sm:px-6 md:px-8 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-muted/50 interactive-hover border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <link.icon size={18} className="opacity-80" />
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
