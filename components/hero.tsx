"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-[72px] min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/10.jpg')" }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content - Overlaid on Image */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white mb-6 max-w-4xl"
        >
          Need a railing? Oak Railings LTD has you covered.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
        >
          Premium handcrafted oak railings. Serving Vancouver, Delta, Surrey, and the Lower Mainland.
        </motion.p>
        <motion.a
          href="tel:+17785369536"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Find Out More
          </Button>
        </motion.a>
      </div>
    </section>
  )
}
