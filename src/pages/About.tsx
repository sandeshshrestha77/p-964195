import { ArrowRight, Users, Star, Award, Sparkles, Target, Heart, Globe, Music, Camera, Mic, Mountain, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"

const About = () => {
  return (
    <MainLayout>
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          {/* Hero Section with Background */}
          <div className="relative max-w-4xl mx-auto text-center mb-32">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
              <img 
                src="https://images.unsplash.com/photo-1506604900144-7360175909e2"
                alt="Sikkim Mountains"
                className="w-full h-full object-cover object-center rounded-[3rem] opacity-30"
              />
            </div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <Mountain className="h-4 w-4" />
                Celebrating Sikkim's Talent Since 2018
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Where Tradition Meets <br />
                <span className="text-primary">Modern Entertainment</span>
              </h1>
              <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                For over 5 years, Sikkim Rising Star has been discovering, nurturing, and celebrating 
                the diverse talents of the Himalayan region while preserving our rich cultural heritage.
              </p>
            </FadeIn>
          </div>

          {/* Legacy Stats */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-24">
            {legacyStats.map((stat, index) => (
              <SlideIn 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
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

          {/* Heritage & Innovation */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-medium">Our Legacy</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">A Journey of Cultural Excellence</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Since 2018, we've been bridging the gap between traditional artistry and contemporary entertainment,
                creating a platform that celebrates both heritage and innovation.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <SlideIn className="order-2 md:order-1">
                <div className="space-y-6">
                  {legacyHighlights.map((highlight, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/5 rounded-xl w-12 h-12 flex-shrink-0 flex items-center justify-center">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SlideIn>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                  alt="Cultural Performance"
                  className="rounded-[2.5rem] shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-5xl mx-auto mb-24">
            <FadeIn className="text-center mb-16">
              <span className="text-primary font-medium">Success Stories</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Voices of Our Journey</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Hear from the participants who have been part of our incredible journey.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <SlideIn 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                  delay={index * 0.1}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="text-primary text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm text-gray-500">{testimonial.achievement}</div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join us in our mission to discover and showcase the incredible talents of Sikkim.
              </p>
              <Link to="/register">
                <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-xl text-base">
                  Register for Auditions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const legacyStats = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    value: "10,000+",
    label: "Participants Since 2018"
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    value: "500+",
    label: "Cultural Performances"
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    value: "20+",
    label: "Districts Covered"
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    value: "50+",
    label: "Major Events"
  }
]

const legacyHighlights = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Cultural Preservation",
    description: "Dedicated to preserving and promoting Sikkim's rich cultural heritage through modern entertainment."
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Talent Development",
    description: "Providing platforms and opportunities for local artists to showcase their abilities."
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Community Impact",
    description: "Creating lasting positive change in the local entertainment and cultural landscape."
  }
]

const journeyTimeline = [
  {
    year: "2018",
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "The Beginning",
    description: "Launched with a vision to transform Sikkim's entertainment landscape.",
    achievements: [
      "First-ever talent hunt show in Sikkim",
      "Over 1,000 participants",
      "Coverage across 4 districts",
      "Groundbreaking finale event"
    ]
  },
  {
    year: "2019-2020",
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Growth & Recognition",
    description: "Expanded our reach and impact across the region.",
    achievements: [
      "Extended to 8 districts",
      "Introduced cultural categories",
      "First television broadcast",
      "Cultural preservation award"
    ]
  },
  {
    year: "2021-2022",
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Digital Evolution",
    description: "Adapted and innovated during challenging times.",
    achievements: [
      "Launched digital auditions",
      "Virtual showcase events",
      "International participants",
      "Online voting system"
    ]
  },
  {
    year: "2023",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "New Heights",
    description: "Reaching new milestones and setting higher standards.",
    achievements: [
      "Record-breaking participation",
      "National media coverage",
      "Cultural exchange programs",
      "Community outreach initiatives"
    ]
  }
]

const culturalInitiatives = [
  {
    title: "Heritage Preservation",
    description: "Documenting and promoting traditional art forms.",
    image: "https://images.unsplash.com/photo-1533462506003-13c20d204b26",
    highlights: [
      "Traditional music documentation",
      "Dance form preservation",
      "Cultural workshops",
      "Youth engagement programs"
    ]
  },
  {
    title: "Artist Development",
    description: "Nurturing talent through professional guidance.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    highlights: [
      "Mentorship programs",
      "Technical training",
      "Performance opportunities",
      "Industry connections"
    ]
  },
  {
    title: "Community Impact",
    description: "Creating positive change through arts and culture.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    highlights: [
      "Local events",
      "School programs",
      "Cultural festivals",
      "Community workshops"
    ]
  }
]

const teamMembers = [
  {
    name: "Tashi Wangchuk",
    role: "Founder & Creative Director",
    bio: "20+ years in cultural preservation and entertainment",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    achievements: ["Cultural Icon Award", "Arts Pioneer"]
  },
  {
    name: "Dichen Lhamu",
    role: "Program Director",
    bio: "Expert in talent development and event management",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    achievements: ["Event Excellence", "Youth Mentor"]
  },
  {
    name: "Karma Tenzing",
    role: "Cultural Advisor",
    bio: "Authority on Sikkimese arts and traditions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    achievements: ["Heritage Expert", "Author"]
  }
]

const testimonials = [
  {
    name: "Pema Yangzom",
    title: "Season 1 Winner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "Sikkim Rising Star gave me the platform to showcase my talent and preserve our cultural heritage.",
    achievement: "Now a recognized performer across Northeast India"
  },
  {
    name: "Rinchen Namgyal",
    title: "Season 2 Finalist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The mentorship and exposure I received transformed my artistic journey.",
    achievement: "Featured in national cultural events"
  }
]

export default About
