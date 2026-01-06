"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-medium tracking-tight text-foreground">
            OAK RAILINGS LTD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#services"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/oakrailings/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#services"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://www.instagram.com/oakrailings/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get a Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
