import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Mountain, Users, Trophy, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { CountdownTimer } from "@/components/CountdownTimer"
import { FadeIn } from "@/components/animations/FadeIn"
import { SlideIn } from "@/components/animations/SlideIn"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    caption: "Experience Sikkim's Majesty"
  },
  {
    url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
    caption: "Challenge Your Limits"
  },
  {
    url: "https://images.unsplash.com/photo-1606067317339-3cc14857786b",
    caption: "Discover Adventure"
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel className="mb-12">
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">{image.caption}</h2>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-medium mb-6">
                  Season 4 Coming Soon
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Adventure Awaits in the Heart of Sikkim
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Join Sikkim's premier adventure competition that combines culture, challenges, and unforgettable experiences.
                </p>
              </FadeIn>

              <div className="mb-12">
                <CountdownTimer />
              </div>

              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 w-full sm:w-auto">
                      Register Interest <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/past-events">
                    <Button variant="outline" className="h-12 px-8 w-full sm:w-auto">
                      Explore Past Seasons
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Successful Seasons" },
              { value: "600+", label: "Past Participants" },
              { value: "15+", label: "Locations" },
              { value: "50+", label: "Partners" }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-gray-600">
              Experience a unique blend of adventure, culture, and competition in the breathtaking landscapes of Sikkim.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: "Adventure Challenges",
                description: "Push your limits with thrilling mountain treks, survival tasks, and outdoor adventures."
              },
              {
                icon: Users,
                title: "Team Spirit",
                description: "Build lasting friendships and develop teamwork skills through collaborative challenges."
              },
              {
                icon: Trophy,
                title: "Cultural Immersion",
                description: "Experience Sikkim's rich heritage through cultural tasks and local interactions."
              }
            ].map((feature, index) => (
              <SlideIn
                key={index}
                direction="up"
                delay={index * 0.2}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Season 4 Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <SlideIn direction="left">
                  <h2 className="text-3xl font-bold mb-6">Season 4: Bigger & Better</h2>
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
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Register Interest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </SlideIn>
                <SlideIn direction="right" className="relative aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99"
                    alt="Season 4 Preview"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </SlideIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Be the first to know when Season 4 registration opens and receive exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 h-12 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index