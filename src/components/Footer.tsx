
import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Past Events", href: "/past-events" },
    { name: "Contact", href: "/contact" },
    { name: "Register", href: "/register" }
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ]
}

export const Footer = () => {
  return (
    <footer className="neo-blur mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="SRS Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl text-gradient">SRS</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Sikkim Rising Star is the premier talent platform celebrating and promoting 
              the diverse cultural heritage of the Himalayan region since 2018.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Gangtok, Sikkim</li>
              <li>India</li>
              <li>contact@sikkimrisingstar.com</li>
              <li>+91 1234567890</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
