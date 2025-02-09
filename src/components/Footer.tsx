
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-6">About Us</h3>
            <p className="text-sm leading-relaxed">
              Sikkim Rising Star is the region's premier talent hunt competition, bringing together exceptional performers from India and Nepal to showcase their artistic abilities on a grand stage.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>About</a></li>
              <li><a href="/events" className="hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Events</a></li>
              <li><a href="/past-events" className="hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Past Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                info@sikkimrisingstar.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                +91 123 456 7890
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                Gangtok, Sikkim
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Newsletter</h4>
              <p className="text-sm mb-4">Stay updated with our latest events and announcements.</p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 bg-gray-700/50 rounded border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 Sikkim Rising Star. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
