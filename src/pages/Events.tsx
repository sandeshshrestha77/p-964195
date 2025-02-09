
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const Events = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Upcoming <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Events</span>
            </h1>
          </FadeIn>
          
          <div className="space-y-8">
            <SlideIn className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-violet-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sikkim Rising Star Season 4 Auditions</h2>
                  <p className="text-gray-600 mb-4">
                    Get ready to showcase your talent! Whether you're a singer, dancer, musician, or performer, this is your chance to shine on Sikkim's biggest stage.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Coming Soon
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      Multiple Venues
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Limited Spots
                    </div>
                  </div>
                  <Link to="/register">
                    <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                      Register for Auditions
                    </Button>
                  </Link>
                </div>
              </div>
            </SlideIn>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Past Performances</h2>
              <p className="text-gray-600 mb-6">
                Relive the magic of previous seasons! Watch incredible performances, success stories, and memorable moments from Sikkim Rising Star Seasons 1-3.
              </p>
              <Link to="/past-events">
                <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
                  View Past Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Events
