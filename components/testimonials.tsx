import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Parminder Josan",
    location: "Vancouver",
    text: "Absolutely stunning work. Jashan transformed our hallway with a beautiful Georgian-style balustrade. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    name: "James & Emma Thompson",
    location: "Delta",
    text: "From the initial consultation to the final installation, the entire experience was exceptional. Our spiral staircase is now the talking point of our home.",
    rating: 5,
  },
  {
    name: "Robert Hayes",
    location: "Surrey",
    text: "Professional, punctual, and passionate about their craft. The oak handrails have brought warmth and character to our new build.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-medium text-secondary-foreground leading-tight">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card p-8 shadow-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-medium text-lg text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

