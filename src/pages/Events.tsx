import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
            
            <div className="space-y-8">
              <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sikkim Rising Star Season 4</h2>
                    <p className="text-gray-600 mb-4">
                      Get ready for our biggest season yet! Experience thrilling adventures, cultural challenges, and unforgettable moments across Sikkim.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Coming Soon
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        Multiple Locations
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        Limited Spots
                      </div>
                    </div>
                    <Link to="/register">
                      <Button className="bg-blue-600 hover:bg-blue-700">Register Interest</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Past Events</h2>
                <p className="text-gray-600 mb-6">
                  Curious about our previous seasons? Check out the highlights and memories from Sikkim Rising Star Seasons 1-3.
                </p>
                <Link to="/past-events">
                  <Button variant="outline">View Past Events</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Events