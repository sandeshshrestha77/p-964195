import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Star, Users, Trophy, MapPin, Calendar, ArrowRight, Play, Music, Mic } from "lucide-react"
import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { CountdownTimer } from "@/components/CountdownTimer"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.gpteng.co/videos/performance.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-8">
              <Star className="h-4 w-4 text-yellow-400" />
              Season 4 Registration Opening Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Journey to <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Stardom
              </span> Begins Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Join Sikkim's premier talent hunt competition and showcase your artistry on the region's biggest stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 h-14 px-8 text-lg">
                Register Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                <Play className="mr-2 h-5 w-5" /> Watch Highlights
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Performance Categories</h2>
            <p className="text-xl text-gray-600">Showcase your talent across multiple disciplines</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Vocal Performance",
                description: "From classical to contemporary, express yourself through song.",
                color: "bg-rose-500"
              },
              {
                icon: Music,
                title: "Instrumental",
                description: "Master musicians showcasing instrumental excellence.",
                color: "bg-blue-500"
              },
              {
                icon: Users,
                title: "Dance",
                description: "Traditional and modern dance forms welcome.",
                color: "bg-violet-500"
              }
            ].map((category, index) => (
              <SlideIn
                key={index}
                direction="up"
                delay={index * 0.2}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <div className={`absolute top-4 left-4 ${category.color} rounded-full p-3`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <img
                  src={`https://source.unsplash.com/random/800x600?${category.title.toLowerCase()}`}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Next Season Begins In</h2>
            <p className="text-xl text-gray-400">Don't miss your chance to participate</p>
          </FadeIn>
          <CountdownTimer />
        </div>
      </section>

      {/* Stats Section with Gradient Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "Successful Seasons", icon: Trophy },
              { value: "1000+", label: "Talented Performers", icon: Users },
              { value: "50+", label: "Performance Categories", icon: Music },
              { value: "100+", label: "Success Stories", icon: Star }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                  <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7')] opacity-10 bg-cover bg-center" />
        <div className="relative container mx-auto px-4">
          <FadeIn className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of talented performers who have taken their first step towards stardom with Sikkim Rising Star.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 h-14 px-8">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8">
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index