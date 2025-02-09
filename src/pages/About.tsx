
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn>
              <div className="text-blue-600 font-medium mb-6">About us</div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Sikkim Rising Star is transforming the{" "}
                <span className="text-gray-400">entertainment landscape in the Himalayan region</span>
              </h1>
            </FadeIn>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <SlideIn className="bg-white p-8 rounded-xl border" delay={0.1}>
              <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
              <p className="text-gray-600">
                Preserving and promoting the rich cultural traditions of Sikkim through artistic expression.
              </p>
            </SlideIn>

            <SlideIn className="bg-white p-8 rounded-xl border" delay={0.2}>
              <h3 className="text-xl font-semibold mb-4">Talent Development</h3>
              <p className="text-gray-600">
                Nurturing emerging artists with professional mentorship and industry exposure.
              </p>
            </SlideIn>

            <SlideIn className="bg-white p-8 rounded-xl border" delay={0.3}>
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Creating opportunities for local artists and enriching the regional entertainment scene.
              </p>
            </SlideIn>

            <SlideIn className="bg-white p-8 rounded-xl border" delay={0.4}>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Blending traditional art forms with modern performance techniques.
              </p>
            </SlideIn>
          </div>

          {/* Expertise Section */}
          <div className="bg-gray-900 text-white rounded-2xl p-12 mb-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-blue-400 font-medium mb-4">Expertise</div>
                <h2 className="text-3xl font-bold mb-6">Highly specialized mentors</h2>
                <p className="text-gray-400 mb-8">
                  Our panel consists of industry veterans, accomplished performers, and cultural experts who guide participants through their artistic journey.
                </p>
                <Link to="/events">
                  <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {/* Expertise Cards */}
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Performance Training</h3>
                  <p className="text-gray-400">Comprehensive training in various performing arts disciplines</p>
                </div>
                <div className="bg-blue-600 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Industry Connection</h3>
                  <p className="text-gray-100">Direct access to entertainment industry professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <FadeIn>
              <div className="text-blue-600 text-5xl md:text-7xl font-bold mb-4">
                3+
              </div>
              <div className="text-xl text-gray-600">
                Years of successful seasons showcasing exceptional talent
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-blue-600 text-5xl md:text-7xl font-bold mb-4">
                1000+
              </div>
              <div className="text-xl text-gray-600">
                Talented performers have graced our stage
              </div>
            </FadeIn>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">Ready to showcase your talent?</h2>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Register for Auditions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
