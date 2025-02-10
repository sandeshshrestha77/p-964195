import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react'
import { FadeIn, SlideIn } from '../components/animations/animations'
import { MainLayout } from '../components/layouts/MainLayout'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <MainLayout>
      {/* Background with gradient */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let's bring your vision <br />
                <span className="text-primary">to life together</span>
              </h1>
              <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                Whether you have a question, want to start a project, or simply want to connect.
              </p>
            </FadeIn>
          </div>

          {/* Contact Methods Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-32">
            {contactMethods.map((method, index) => (
              <SlideIn 
                key={method.title}
                className="group relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300" 
                delay={index * 0.1}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary" />
                <div className="p-8">
                  <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a 
                    href={method.link} 
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    {method.linkText} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Form Side */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                    <p className="text-gray-600 mb-8">We'll get back to you as soon as possible</p>
                    
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                      </div>
                      <Button className="w-full bg-white text-black hover:bg-gray-100 h-12 rounded-xl text-base border border-gray-200">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </div>

                  {/* Map/Image Side */}
                  <div className="relative bg-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-50 bg-[url('/map-pattern.png')] bg-cover" />
                    <div className="relative text-center text-white p-12">
                      <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                      <p className="text-gray-300 mb-8">
                        M.G. Marg, Gangtok<br />
                        Sikkim, India
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        <a href="https://maps.google.com" className="hover:underline">
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const contactMethods = [
  {
    icon: <Mail className="h-7 w-7 text-primary" />,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    linkText: 'info@sikkimrisingstar.com',
    link: 'mailto:info@sikkimrisingstar.com'
  },
  {
    icon: <Phone className="h-7 w-7 text-primary" />,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    linkText: '+91 1234567890',
    link: 'tel:+911234567890'
  },
  {
    icon: <MapPin className="h-7 w-7 text-primary" />,
    title: 'Office',
    description: 'Come say hello at our office.',
    linkText: 'Get directions',
    link: 'https://maps.google.com'
  }
]

export default Contact
