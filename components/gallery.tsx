"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    id: 1,
    title: "Georgian Railing",
    category: "Traditional",
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "Modern Landing",
    category: "Contemporary",
    image: "/2.jpg",
  },
  {
    id: 3,
    title: "Spiral Beauty",
    category: "Bespoke",
    image: "/3.jpg",
  },
  {
    id: 4,
    title: "Farmhouse Charm",
    category: "Rustic",
    image: "/4.jpg",
  },
  {
    id: 5,
    title: "Minimalist Design",
    category: "Contemporary",
    image: "/5.jpg",
  },
  {
    id: 6,
    title: "Victorian Restoration",
    category: "Traditional",
    image: "/6.jpg",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground leading-tight">Our finest creations</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale-in"
              delay={index * 100}
            >
              <div
                className="group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={600}>
          <a
            href="https://www.instagram.com/oakrailings/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-accent hover:text-accent/80 transition-colors"
          >
            See more on Instagram
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </AnimatedSection>
      </div>

      {/* Lightbox with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-xs tracking-widest uppercase text-primary-foreground/60 mb-1">
                  {selectedImage.category}
                </p>
                <h3 className="text-2xl font-medium text-primary-foreground">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
