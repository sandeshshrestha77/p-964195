import { MainLayout } from "@/components/layouts/MainLayout"
import { Calendar, MapPin, Trophy, Users, Star, Award, Music, Camera } from "lucide-react"
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
    runnerUp: "Team Everest Explorers",
    highlights: [
      "10-day adventure challenge",
      "Cultural heritage exploration",
      "Mountain survival tasks",
      "Traditional art competitions"
    ],
    achievements: [
      "Highest viewer ratings in show history",
      "Featured in National Geographic",
      "Cultural preservation award",
      "Community impact recognition"
    ],
    specialMoments: [
      {
        title: "Grand Finale",
        description: "Spectacular performance at MG Marg with over 10,000 attendees"
      },
      {
        title: "Heritage Challenge",
        description: "Participants showcased traditional Sikkimese art forms"
      }
    ],
    image: "https://images.unsplash.com/photo-1606067317339-3cc14857786b",
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
    ]
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
                <Star className="h-4 w-4" />
                Our Journey So Far
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Celebrating <span className="text-primary">3 Seasons</span> of<br />
                Talent & Creativity
              </h1>
              <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                Relive the magical moments, incredible performances, and inspiring journeys that have shaped Sikkim Rising Star.
              </p>
            </FadeIn>
          </div>

          {/* Stats Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <SlideIn 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                delay={index * 0.1}
              >
                <div className="bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </SlideIn>
            ))}
          </div>

          {/* Past Events Timeline */}
          <div className="max-w-4xl mx-auto">
            {pastEvents.map((event, index) => (
              <SlideIn 
                key={index}
                className="mb-20"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                  {/* Main Image */}
                  <div className="aspect-video">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <span className="text-sm font-semibold">{event.season}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{event.year}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
                    <p className="text-gray-600 text-lg mb-8">{event.description}</p>

                    {/* Key Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-3 text-primary" />
                          {event.participants} Participants
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-3 text-primary" />
                          {event.location}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                          <Trophy className="h-5 w-5 mr-3 text-primary" />
                          Winner: {event.winner}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Award className="h-5 w-5 mr-3 text-primary" />
                          Runner-up: {event.runnerUp}
                        </div>
                      </div>
                    </div>

                    {/* Highlights & Achievements */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Event Highlights</h3>
                        <ul className="space-y-3">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                        <ul className="space-y-3">
                          {event.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Special Moments */}
                    <div className="mb-12">
                      <h3 className="text-xl font-semibold mb-6">Special Moments</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {event.specialMoments.map((moment, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-6">
                            <h4 className="font-semibold mb-2">{moment.title}</h4>
                            <p className="text-gray-600">{moment.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Gallery */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Event Gallery</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {event.gallery.map((image, idx) => (
                          <div key={idx} className="aspect-video rounded-xl overflow-hidden">
                            <img 
                              src={image}
                              alt={`Gallery image ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
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

const stats = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    value: "600+",
    label: "Total Participants"
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    value: "300+",
    label: "Performances"
  },
  {
    icon: <Camera className="h-6 w-6 text-primary" />,
    value: "50+",
    label: "Event Days"
  },
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    value: "15+",
    label: "Awards Given"
  }
]

export default PastEvents
