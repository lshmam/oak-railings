import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Section 1: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="/1.jpg"
              alt="Beautiful oak staircase installation"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-6">
              Are your stairs unsafe? Do they meet your current building code?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your staircase is the focal point in your home. Safety features may be outdated and no
              longer meeting current building code. Our expert team ensures every installation is
              compliant and beautiful.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              New stairs and railings will bring new life to your home.
            </p>
            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us Today
              </Button>
            </a>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-6">
              Renovations don&apos;t have to be stressful!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With our stress-free guide, it has never been easier than before to renovate your home!
              Our 14 years of experience will make your process as smooth as possible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We handle everything from design to installation so you can focus on enjoying your new space.
            </p>
            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us Today
              </Button>
            </a>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              src="/7.jpg"
              alt="Happy homeowner with oak railing"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Section 3: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="/8.jpg"
              alt="Oak Railings LTD team member"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-6">
              Your next steps are easy!
            </h2>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">1.</span>
                <span>Approve your estimate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">2.</span>
                <span>Book your consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">3.</span>
                <span>Choose your start date</span>
              </li>
            </ul>
            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us Today
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
