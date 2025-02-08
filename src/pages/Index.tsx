
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
              <Trophy className="h-8 w-8 text-[#F97316]" />
              <span className="text-xl font-bold text-[#F97316]">Sikkim Rising Star</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-[#F97316] hover:text-[#F97316]/80">About</a>
              <a href="#events" className="text-[#F97316] hover:text-[#F97316]/80">Events</a>
              <a href="#leaderboard" className="text-[#F97316] hover:text-[#F97316]/80">Leaderboard</a>
              <a href="#register" className="text-[#F97316] hover:text-[#F97316]/80">Register</a>
            </div>
          </nav>
          <div className="mt-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F97316] mb-6">
              Discover Sikkim's Hidden Treasures
            </h1>
            <p className="text-xl text-[#F97316]/80 mb-8 max-w-2xl mx-auto">
              Join the ultimate treasure hunt competition that challenges your wit and explores the beauty of Sikkim since 2018.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black">Register Now</Button>
              <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10">Learn More</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-3xl font-bold text-[#F97316]">Explore Sacred Locations</h2>
              </div>
              <p className="text-[#F97316]/80 mb-8">
                Embark on an adventure through Sikkim's most mystical and sacred locations. 
                Each hunt leads you to discover hidden gems while learning about our rich cultural heritage.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black">Join Hunt</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10">View Locations</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Sikkim Mountains"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-3xl font-bold text-[#F97316]">Solve Complex Riddles</h2>
              </div>
              <p className="text-[#F97316]/80 mb-8">
                Test your problem-solving skills with our carefully crafted riddles 
                that combine local knowledge, history, and modern technology.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black">Try Sample Riddles</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10">Learn More</Button>
              </div>
            </div>
            <div className="md:order-1">
              <img
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                alt="Mountain Riddle Location"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="h-6 w-6 text-[#F97316]" />
                <h2 className="text-3xl font-bold text-[#F97316]">Win Amazing Prizes</h2>
              </div>
              <p className="text-[#F97316]/80 mb-8">
                Compete for prestigious awards and prizes while making unforgettable 
                memories exploring the breathtaking landscapes of Sikkim.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black">View Prizes</Button>
                <Button variant="outline" className="text-[#F97316] border-[#F97316] hover:bg-[#F97316]/10">Past Winners</Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="Prize Ceremony"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#000000e6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#F97316] mb-4">Hunter Stories</h2>
            <p className="text-[#F97316]/80 max-w-2xl mx-auto">
              Hear from our past participants about their thrilling experiences and adventures
              during the Sikkim Rising Star competition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black border border-[#F97316]/20 rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start gap-8">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Past Winner"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#F97316]/80 mb-4">
                    "Participating in Sikkim Rising Star was an incredible journey. The riddles 
                    challenged my mind while the locations took my breath away. It's more than 
                    just a competition - it's an adventure that connects you with Sikkim's soul."
                  </p>
                  <h3 className="font-bold text-[#F97316]">Karma Tshering</h3>
                  <p className="text-[#F97316]/60">2022 Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F97316] text-center mb-12">
            5 Years of Adventure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316] mb-2">1000+</p>
              <p className="text-[#F97316]/80">Participants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316] mb-2">50+</p>
              <p className="text-[#F97316]/80">Locations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316] mb-2">₹5L+</p>
              <p className="text-[#F97316]/80">Prize Pool</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316] mb-2">100+</p>
              <p className="text-[#F97316]/80">Riddles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#000000e6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F97316] mb-4">Stay Updated</h2>
          <p className="text-xl text-[#F97316]/80 mb-8">Get the latest updates about upcoming hunts and events</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border-[#F97316]/20 text-[#F97316]"
            />
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-black">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Trophy className="h-8 w-8 text-[#F97316]" />
              <span className="text-xl font-bold text-[#F97316]">Sikkim Rising Star</span>
            </div>
            <nav className="flex space-x-8">
              <a href="#privacy" className="text-[#F97316]/80 hover:text-[#F97316]">Privacy</a>
              <a href="#terms" className="text-[#F97316]/80 hover:text-[#F97316]">Terms</a>
              <a href="#contact" className="text-[#F97316]/80 hover:text-[#F97316]">Contact</a>
              <a href="#faq" className="text-[#F97316]/80 hover:text-[#F97316]">FAQ</a>
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

