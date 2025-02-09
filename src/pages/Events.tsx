import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const pastEvents = [
  {
    season: "Season 3",
    year: "2023",
    title: "Sikkim Rising Star 3",
    description: "The third season brought even more challenges and adventures, featuring mountain climbing, cultural performances, and survival challenges.",
    participants: 250,
    location: "Multiple locations across Sikkim",
    winner: "Team Kanchenjunga",
    highlights: [
      "10-day adventure challenge",
      "Cultural heritage exploration",
      "Mountain survival tasks",
      "Traditional art competitions"
    ],
    image: "https://images.unsplash.com/photo-1606067317339-3cc14857786b"
  },
  {
    season: "Season 2",
    year: "2022",
    title: "Sikkim Rising Star 2",
    description: "Building on the success of season 1, this edition expanded to include more locations and diverse challenges.",
    participants: 200,
    location: "Gangtok and surrounding areas",
    winner: "Team Himalayan Eagles",
    highlights: [
      "Adventure sports competition",
      "Local cuisine challenge",
      "Photography contest",
      "Trekking expedition"
    ],
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99"
  },
  {
    season: "Season 1",
    year: "2021",
    title: "Sikkim Rising Star 1",
    description: "The inaugural season that started it all, focusing on discovering local talent and promoting Sikkim's tourism.",
    participants: 150,
    location: "Gangtok",
    winner: "Team Mountain Warriors",
    highlights: [
      "Talent showcase",
      "Adventure challenges",
      "Cultural performances",
      "Team building activities"
    ],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  }
]

const Events = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="text-blue-600 font-medium mb-6">Events</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Join the next chapter of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Sikkim's biggest talent hunt
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Upcoming Event Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <SlideIn className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
                  alt="Season 4 Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Coming Soon
                </div>
                <h2 className="text-2xl font-bold mb-4">Season 4 Auditions</h2>
                <p className="text-gray-600 mb-6">
                  Get ready to showcase your talent! Whether you're a singer, dancer, musician, or performer, this is your chance to shine on Sikkim's biggest stage.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Multiple locations across Sikkim</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Coming Soon in 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Limited spots available</span>
                  </div>
                </div>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                    Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Past Events Section */}
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Past Events</h2>
            <p className="text-gray-600">
              Relive the magic of our previous seasons and their incredible moments
            </p>
          </FadeIn>

          <div className="space-y-12">
            {pastEvents.map((event, index) => (
              <SlideIn 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                delay={index * 0.1}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-video md:aspect-auto">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <span className="text-sm font-semibold">{event.season}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="grid gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2 text-blue-600" />
                        {event.participants} Participants
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                        Winner: {event.winner}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Events