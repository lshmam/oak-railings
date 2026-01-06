import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
              Start your project today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Ready to transform your home with beautiful oak railings? Contact us for a free, no-obligation
              consultation. We&apos;d love to discuss your vision and provide expert guidance.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-medium text-foreground">(778) 536-9536</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium text-foreground">oakrailingsltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Our location</p>
                  <p className="font-medium text-foreground">Delta, BC &bull; Serving Vancouver & the Lower Mainland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border p-8 md:p-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">Request a Free Quote</h3>
            <form
              action="https://formsubmit.co/oakrailingsltd@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Quote Request - Oak Railings" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
