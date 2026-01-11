"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <AnimatedSection animation="fade-up" className="md:col-span-2">
            <Link href="/" className="text-3xl font-medium tracking-tight mb-4 block">
              OAK RAILINGS LTD
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              Transforming homes with beautifully handcrafted oak railings since 2020. Quality
              craftsmanship, timeless elegance.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link href="#gallery" className="text-sm text-background/70 hover:text-background transition-colors">
                Gallery
              </Link>
              <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                Our Services
              </Link>
              <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <Link
              href="https://www.instagram.com/oakrailings/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @oakrailings
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">© {new Date().getFullYear()} Oak Railings. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
