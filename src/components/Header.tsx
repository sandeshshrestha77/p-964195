
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
            <Star className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sikkim Rising Star
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`${isActive('/events') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Events
            </Link>
            <Link 
              to="/past-events" 
              className={`${isActive('/past-events') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Past Events
            </Link>
            <Link to="/register">
              <Button variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6">
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
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link 
              to="/about" 
              className={`block ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`block ${isActive('/events') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Events
            </Link>
            <Link 
              to="/past-events" 
              className={`block ${isActive('/past-events') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Past Events
            </Link>
            <Link to="/register" className="block">
              <Button variant="default" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
