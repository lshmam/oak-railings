import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-medium tracking-tight mb-4 block">
              Oak Railings
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              Transforming homes with beautifully handcrafted oak railings since 2010. Quality
              craftsmanship, timeless elegance.
            </p>
          </div>

          <div>
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
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <Link
              href="https://www.instagram.com/oakrailings/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @oakrailings
            </Link>
          </div>
        </div>

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
      </div>
    </footer>
  )
}
