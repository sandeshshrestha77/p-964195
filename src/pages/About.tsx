import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Sikkim Rising Star</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Founded in 2021, Sikkim Rising Star is a pioneering initiative that combines adventure, culture, and competition to showcase the beauty and potential of Sikkim while nurturing local talent.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To create engaging and challenging experiences that inspire youth, promote tourism, and preserve Sikkim's rich cultural heritage while fostering community development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-600">
                    To become the premier platform for discovering and nurturing talent in Sikkim, creating opportunities for growth and cultural exchange.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Values</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Innovation and Creativity</li>
                    <li>Cultural Preservation</li>
                    <li>Community Engagement</li>
                    <li>Sustainable Development</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">600+</div>
                    <div className="text-gray-600">Total Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                    <div className="text-gray-600">Successful Seasons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Partner Organizations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/events">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore Our Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About