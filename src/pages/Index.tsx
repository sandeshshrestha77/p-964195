import React from "react"
import { ArrowRight, Users, Star, Award, Sparkles, Target, Heart, Globe, Music, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"
import { LucideIcon } from "lucide-react"
import { CountdownTimer } from "@/components/CountdownTimer"

interface StatItem {
  Icon: LucideIcon
  value: string
  label: string
}

interface CategoryItem {
  Icon: LucideIcon
  title: string
  description: string
  features: string[]
}

interface ProcessItem {
  Icon: LucideIcon
  title: string
  description: string
}

const stats: StatItem[] = [
  {
    Icon: Users,
    value: "10,000+",
    label: "Participants"
  },
  {
    Icon: Star,
    value: "3",
    label: "Successful Seasons"
  },
  {
    Icon: MapPin,
    value: "20+",
    label: "Districts Covered"
  },
  {
    Icon: Music,
    value: "500+",
    label: "Performances"
  }
]

const categories: CategoryItem[] = [
  {
    Icon: Music,
    title: "Vocal Performance",
    description: "Showcase your singing talent across various genres and styles.",
    features: [
      "Classical Singing",
      "Modern Contemporary",
      "Folk Music",
      "Fusion Performances"
    ]
  },
  {
    Icon: Users,
    title: "Dance",
    description: "Express yourself through traditional and contemporary dance forms.",
    features: [
      "Traditional Folk Dance",
      "Classical Dance",
      "Contemporary Styles",
      "Group Performances"
    ]
  },
  {
    Icon: Globe,
    title: "Cultural Arts",
    description: "Celebrate and showcase Sikkim's rich cultural heritage.",
    features: [
      "Traditional Instruments",
      "Folk Art Forms",
      "Cultural Performances",
      "Heritage Showcase"
    ]
  }
]

const process: ProcessItem[] = [
  {
    Icon: Users,
    title: "Register Online",
    description: "Fill out the simple online registration form with your basic information and performance category."
  },
  {
    Icon: Calendar,
    title: "Choose Audition Slot",
    description: "Select your preferred audition date and venue from our multiple regional centers."
  },
  {
    Icon: Star,
    title: "Prepare Performance",
    description: "Get ready for your audition with our guidelines and preparation tips."
  },
  {
    Icon: Award,
    title: "Attend Audition",
    description: "Showcase your talent in front of our expert panel of judges at your chosen venue."
  }
]

const Index = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[90vh] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
            <img 
              src="https://images.unsplash.com/photo-1506604900144-7360175909e2"
              alt="Sikkim Rising Star"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full neo-blur text-white text-sm font-medium mb-8">
              <Star className="h-4 w-4" />
              Season 4 Registrations Open
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Discover Your <br />
              <span className="text-gradient">Star Potential</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mx-auto max-w-2xl mb-12">
              Join Sikkim's premier talent hunt platform celebrating artistry, 
              culture, and entertainment since 2018.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button className="bg-white text-black hover:bg-gray-100 h-14 px-8 rounded-xl text-lg border border-gray-200">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100 h-14 px-8 rounded-xl text-lg border border-gray-200">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 -mt-20 mb-32 relative z-10">
            {stats.map((stat, index) => (
              <SlideIn 
                key={index}
                className="glass-morphism p-8 text-center rounded-2xl"
                delay={index * 0.1}
              >
                <div className="bg-white/5 rounded-xl w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <stat.Icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </SlideIn>
            ))}
          </div>

          {/* Categories Section */}
          <div className="max-w-6xl mx-auto mb-32">
            <FadeIn className="text-center mb-16">
              <span className="text-primary/80 font-medium">Performance Categories</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 text-gradient">Showcase Your Talent</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Multiple categories to express your artistic abilities and cultural heritage.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <SlideIn 
                  key={index}
                  className="glass-morphism p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300"
                  delay={index * 0.1}
                >
                  <div className="bg-white/5 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Countdown Section */}
          <div className="max-w-5xl mx-auto mb-32">
            <FadeIn className="text-center mb-16">
              <span className="text-primary/80 font-medium">Next Season</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 text-gradient">Registration Closing Soon</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Don't miss your chance to participate in Season 4
              </p>
            </FadeIn>
            <div className="glass-morphism p-12 rounded-3xl">
              <CountdownTimer targetDate="2024-06-01" />
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-6xl mx-auto mb-32">
            <FadeIn className="text-center mb-16">
              <span className="text-primary/80 font-medium">How It Works</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 text-gradient">Simple Registration Process</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Four easy steps to begin your journey with Sikkim Rising Star.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <SlideIn 
                  key={index}
                  className="glass-morphism p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  delay={index * 0.1}
                >
                  <div className="flex gap-6">
                    <div className="bg-white/5 rounded-xl w-14 h-14 flex-shrink-0 flex items-center justify-center">
                      <step.Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="inline-block glass-morphism px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center pb-32">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Begin Your Journey Today</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Take the first step towards your dreams. Register now for Sikkim Rising Star Season 4 auditions.
              </p>
              <Link to="/register">
                <Button className="bg-white text-black hover:bg-gray-100 h-14 px-8 rounded-xl text-lg border border-gray-200">
                  Register for Auditions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
