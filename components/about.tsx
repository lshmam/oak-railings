export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-medium text-secondary-foreground leading-tight mb-8">
              Craftsmanship you can trust
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Oak Railings, we believe your home deserves more than ordinary. Our handcrafted oak balustrades
                and stair components are built to last generations, combining timeless design with uncompromising quality.
              </p>
              <p>
                Every project receives our full attention—from the initial consultation to the final installation.
                We work directly with you to understand your vision and bring it to life with precision and care.
              </p>
              <p>
                Proudly serving Vancouver, Delta, Surrey, and the entire Lower Mainland, we source only the finest
                Canadian and European oak to create railings that become the centerpiece of your home.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/new-rail.jpg"
              alt="Oak railing craftsmanship"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

