
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"

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

const PastEvents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Past Events</h1>
            
            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <span className="text-sm font-semibold">{event.season}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{event.year}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{event.title}</h2>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                        {event.year}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Event Highlights</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PastEvents
