"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
              Start your project today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Ready to transform your home with beautiful oak railings? Give us a call for a free, no-obligation
              consultation. We&apos;d love to discuss your vision and provide expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-medium text-foreground">(778) 536-9536</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium text-foreground">oakrailingsltd@gmail.com</p>
                </div>
              </div>
            </div>

            <a href="tel:+17785369536">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (778) 536-9536
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
