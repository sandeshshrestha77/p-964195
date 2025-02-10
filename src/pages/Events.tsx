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
                Season 4 Coming Soon
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Join the next chapter of <br />
                <span className="text-primary">Sikkim's biggest talent hunt</span>
              </h1>
              <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                Whether you're a singer, dancer, musician, or performer, this is your chance to shine on Sikkim's biggest stage.
              </p>
            </FadeIn>
          </div>

          {/* Upcoming Event Card */}
          <div className="max-w-4xl mx-auto mb-32">
            <SlideIn className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
                    alt="Season 4 Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                    Coming Soon
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Season 4 Auditions</h2>
                  <p className="text-gray-600 mb-8">
                    Get ready for an extraordinary journey of talent and creativity. Register now to be part of Sikkim's most prestigious talent competition.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">Multiple locations across Sikkim</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">Coming Soon in 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-gray-600">Limited spots available</span>
                    </div>
                  </div>
                  <Link to="/register">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 rounded-xl text-base">
                      Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Past Events Section */}
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Past Events</h2>
              <p className="text-gray-600 text-lg">
                Relive the magic of our previous seasons and their incredible moments
              </p>
            </FadeIn>

            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <SlideIn 
                  key={index}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl"
                  delay={index * 0.1}
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="text-sm font-semibold">{event.season}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{event.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <p className="text-gray-600 mb-8">{event.description}</p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-3 text-primary" />
                          {event.participants} Participants
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-3 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Trophy className="h-5 w-5 mr-3 text-primary" />
                          Winner: {event.winner}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Event Highlights</h4>
                        <ul className="grid gap-3">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
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
      </div>
    </MainLayout>
  )
}

export default Events