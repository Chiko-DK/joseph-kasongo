"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Mail, CodeXml, FolderOpen, Home, IdCard } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: IdCard },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Services", href: "#services", icon: CodeXml },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight text-foreground interactive-hover">
          DK
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

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 rounded-md hover:bg-muted interactive-hover"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-accent" />
              ) : (
                <Moon size={18} className="text-accent" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-muted interactive-hover"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-accent" />
              ) : (
                <Moon size={18} className="text-accent" />
              )}
            </button>
          )}
          <button
            className="interactive-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col animate-in-view">
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
