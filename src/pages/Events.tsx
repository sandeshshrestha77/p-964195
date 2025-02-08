
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
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
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mountain Trek Challenge</h2>
                    <p className="text-gray-600 mb-4">
                      A thrilling adventure through Sikkim's most scenic mountain trails, testing endurance and teamwork.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        June 15-20, 2024
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        Gangtok
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        200 spots
                      </div>
                    </div>
                    <Link to="/register">
                      <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cultural Heritage Hunt</h2>
                    <p className="text-gray-600 mb-4">
                      Explore Sikkim's rich cultural heritage through an exciting treasure hunt across historical landmarks.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        July 1-3, 2024
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        Multiple Locations
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        150 spots
                      </div>
                    </div>
                    <Link to="/register">
                      <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Events
