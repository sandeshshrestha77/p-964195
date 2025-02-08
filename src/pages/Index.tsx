
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Activity, Users, Globe, Send, Menu, X } from "lucide-react"
import { useState } from "react"

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-semibold text-gray-900">Sikkim Rising Star</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#events" className="text-gray-600 hover:text-gray-900 transition-colors">Events</a>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#about" className="block text-gray-600 hover:text-gray-900">About</a>
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#events" className="block text-gray-600 hover:text-gray-900">Events</a>
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                Register Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your Hidden Potential in Sikkim
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Join the most exciting treasure hunt competition that challenges your wit and explores the beauty of Sikkim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Challenging Tasks</h3>
              <p className="text-gray-600">
                Test your skills with our carefully crafted challenges and puzzles.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Team Building</h3>
              <p className="text-gray-600">
                Form teams and work together to solve complex challenges.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Explore Sikkim</h3>
              <p className="text-gray-600">
                Discover hidden gems and beautiful locations across Sikkim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for updates on upcoming events and competitions.
            </p>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 h-12">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Sikkim Rising Star is dedicated to promoting adventure and discovery through unique competitions.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@sikkimrisingstar.com</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Location: Gangtok, Sikkim</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2024 Sikkim Rising Star. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
