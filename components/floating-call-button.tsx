import { Phone } from "lucide-react"
import Link from "next/link"

export function FloatingCallButton() {
    return (
        <Link
            href="tel:7785369536"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
            <Phone className="w-5 h-5" />
            <span className="font-medium">(778) 536-9536</span>
        </Link>
    )
}
