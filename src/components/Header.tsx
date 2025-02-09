import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Star } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-black" />
            <span className="text-xl font-bold text-black">
              Sikkim Rising Star
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              Events
            </Link>
            <Link 
              to="/past-events" 
              className={`${isActive('/past-events') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              Past Events
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
            >
              Contact
            </Link>
            <Link to="/register">
              <Button variant="default" className="bg-black text-white hover:bg-gray-800">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link 
              to="/about" 
              className={`block ${isActive('/about') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`block ${isActive('/events') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black`}
            >
              Events
            </Link>
            <Link 
              to="/past-events" 
              className={`block ${isActive('/past-events') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black`}
            >
              Past Events
            </Link>
            <Link 
              to="/contact" 
              className={`block ${isActive('/contact') ? 'text-black font-medium' : 'text-gray-600'} hover:text-black`}
            >
              Contact
            </Link>
            <Link to="/register" className="block">
              <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}