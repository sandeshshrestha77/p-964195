export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">About Us</h3>
            <p className="text-sm leading-relaxed">
              Sikkim Rising Star is the region's premier talent hunt competition, bringing together exceptional performers from India and Nepal to showcase their artistic abilities on a grand stage.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="/events" className="text-sm hover:text-white transition-colors">Events</a></li>
              <li><a href="/past-events" className="text-sm hover:text-white transition-colors">Past Events</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: info@sikkimrisingstar.com</li>
              <li className="text-sm">Phone: +91 123 456 7890</li>
              <li className="text-sm">Location: Gangtok, Sikkim</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}