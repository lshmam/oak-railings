"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-[72px] min-h-[80vh] md:min-h-screen overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="flex flex-col items-start text-left order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-black mb-6"
          >
            Need a railing? Oak Railings LTD has you covered.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-black/80 mb-10 leading-relaxed"
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

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-1 md:order-2"
        >
          <Image
            src="/10.jpg"
            alt="Oak Railings"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
