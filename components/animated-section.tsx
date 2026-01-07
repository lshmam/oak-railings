"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    animation?: "fade-up" | "slide-left" | "slide-right" | "scale-in" | "fade-in"
    delay?: number
    duration?: number
}

const animations = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-in": {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
}

export function AnimatedSection({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
}: AnimatedSectionProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animations[animation]}
            transition={{
                duration,
                delay: delay / 1000,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
