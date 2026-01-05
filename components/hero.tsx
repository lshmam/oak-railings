import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-[72px] bg-background">
      {/* Video Hero */}
      <div className="relative w-full aspect-video max-h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/oak-railings-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text Content - Below Video */}
      <div className="max-w-8xl mx-auto px-6 py-8 lg:py-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground text-balance mb-6">
          Timeless craftsmanship meets exquisite design
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform your home with beautifully handcrafted oak railings and balustrades. Every piece tells a story
          of dedication, precision, and natural beauty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="tel:+17785369536">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Request a Consultation
            </Button>
          </a>

        </div>
      </div>
    </section>
  )
}


