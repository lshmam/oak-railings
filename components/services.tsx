import { Ruler, PenTool, Hammer, Truck } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Free Consultation",
    description:
      "We visit your property to discuss your vision, take precise measurements, and provide expert advice on the perfect railing solution.",
  },
  {
    icon: PenTool,
    title: "Bespoke Design",
    description:
      "Our designers create detailed CAD drawings tailored to your specifications, ensuring every detail meets your expectations before production.",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description:
      "Our skilled craftsmen bring your vision to life using traditional techniques and premium European oak in our dedicated workshop.",
  },
  {
    icon: Truck,
    title: "Professional Installation",
    description:
      "Our experienced installation team ensures a flawless fit, treating your home with the utmost care and respect throughout the process.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground leading-tight">From concept to completion</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground mb-3">0{index + 1}</div>
              <h3 className="text-xl font-medium text-foreground mb-4">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

