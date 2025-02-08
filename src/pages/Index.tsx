
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy, MapPin, Target, Compass } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="relative bg-[#000000e6] py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-[#F97316] transition-all duration-300 hover:scale-105" />
              <span className="text-xl font-medium text-[#F97316]">Sikkim Rising Star</span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">About</a>
              <a href="#events" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Events</a>
              <a href="#leaderboard" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Leaderboard</a>
              <a href="#register" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Register</a>
            </div>
          </nav>
          <div className="mt-32 mb-32 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-medium text-[#F97316] mb-8 leading-tight tracking-tight">
              Discover Sikkim's Hidden Treasures
            </h1>
            <p className="text-xl text-[#F97316]/80 mb-12 leading-relaxed">
              Join the ultimate treasure hunt competition that challenges your wit and explores the beauty of Sikkim since 2018.
            </p>
            <div className="flex justify-center gap-6">
              <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                Register Now
              </Button>
              <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-4xl font-medium text-[#F97316]">Sacred Locations</h2>
              </div>
              <p className="text-xl text-[#F97316]/80 leading-relaxed">
                Embark on an adventure through Sikkim's most mystical and sacred locations. 
                Each hunt leads you to discover hidden gems while learning about our rich cultural heritage.
              </p>
              <div className="flex gap-6 pt-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8">Join Hunt</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10 px-8">
                  View Locations
                </Button>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Sikkim Mountains"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
            <div className="md:order-2 space-y-8">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-4xl font-medium text-[#F97316]">Complex Riddles</h2>
              </div>
              <p className="text-xl text-[#F97316]/80 leading-relaxed">
                Test your problem-solving skills with our carefully crafted riddles 
                that combine local knowledge, history, and modern technology.
              </p>
              <div className="flex gap-6 pt-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8">Try Riddles</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10 px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:order-1 relative group">
              <img
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                alt="Mountain Riddle Location"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-4xl font-medium text-[#F97316]">Amazing Prizes</h2>
              </div>
              <p className="text-xl text-[#F97316]/80 leading-relaxed">
                Compete for prestigious awards and prizes while making unforgettable 
                memories exploring the breathtaking landscapes of Sikkim.
              </p>
              <div className="flex gap-6 pt-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8">View Prizes</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10 px-8">
                  Past Winners
                </Button>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="Prize Ceremony"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#000000e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-medium text-[#F97316] text-center mb-20">
            5 Years of Adventure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <div className="text-center">
              <p className="text-5xl font-medium text-[#F97316] mb-4">1000+</p>
              <p className="text-xl text-[#F97316]/80">Participants</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-medium text-[#F97316] mb-4">50+</p>
              <p className="text-xl text-[#F97316]/80">Locations</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-medium text-[#F97316] mb-4">₹5L+</p>
              <p className="text-xl text-[#F97316]/80">Prize Pool</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-medium text-[#F97316] mb-4">100+</p>
              <p className="text-xl text-[#F97316]/80">Riddles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-medium text-[#F97316] mb-6">Stay Updated</h2>
          <p className="text-xl text-[#F97316]/80 mb-12">Get the latest updates about upcoming hunts and events</p>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-[#F97316]/20 text-[#F97316] h-12"
            />
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8 h-12">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000e6] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Trophy className="h-8 w-8 text-[#F97316]" />
              <span className="text-xl font-medium text-[#F97316]">Sikkim Rising Star</span>
            </div>
            <nav className="flex space-x-12">
              <a href="#privacy" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Privacy</a>
              <a href="#terms" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Terms</a>
              <a href="#contact" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">Contact</a>
              <a href="#faq" className="text-[#F97316]/80 hover:text-[#F97316] transition-colors">FAQ</a>
            </nav>
          </div>
          <div className="text-center text-[#F97316]/60">
            <p>© 2018-2024 Sikkim Rising Star. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

