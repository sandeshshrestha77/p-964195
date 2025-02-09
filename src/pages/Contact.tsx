import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="text-black font-medium mb-6">Contact us</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Get in touch with{" "}
              <span className="text-black">
                our team
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <SlideIn className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all p-8" delay={0.1}>
            <Mail className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help.
            </p>
            <a href="mailto:info@sikkimrisingstar.com" className="text-black hover:text-gray-600">
              info@sikkimrisingstar.com
            </a>
          </SlideIn>

          <SlideIn className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all p-8" delay={0.2}>
            <Phone className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">
              Mon-Fri from 9am to 5pm.
            </p>
            <a href="tel:+911234567890" className="text-black hover:text-gray-600">
              +91 123 456 7890
            </a>
          </SlideIn>

          <SlideIn className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all p-8" delay={0.3}>
            <MapPin className="h-8 w-8 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office</h3>
            <p className="text-gray-600 mb-4">
              Come visit us.
            </p>
            <address className="text-black not-italic">
              MG Marg, Gangtok<br />
              Sikkim, India
            </address>
          </SlideIn>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <form className="bg-white rounded-xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact