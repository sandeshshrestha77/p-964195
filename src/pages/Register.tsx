
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { MainLayout } from "@/components/layouts/MainLayout"
import { FadeIn } from "@/components/animations/FadeIn"
import { Send, Users, Calendar, MapPin } from "lucide-react"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "singing",
    experience: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-[100px]" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Registration Open
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Begin your journey to <br />
                <span className="text-primary">stardom</span>
              </h1>
              <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                Take the first step towards your dreams. Register now for Sikkim Rising Star Season 4 auditions.
              </p>
            </FadeIn>
          </div>

          {/* Info Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            {infoCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-8">Registration Form</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full h-12 rounded-xl"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-12 rounded-xl"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full h-12 rounded-xl"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Performance Category
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        required
                      >
                        <option value="singing">Singing</option>
                        <option value="dancing">Dancing</option>
                        <option value="instrumental">Instrumental</option>
                        <option value="acting">Acting</option>
                        <option value="comedy">Stand-up Comedy</option>
                        <option value="other">Other Performing Arts</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Experience (Optional)
                      </label>
                      <textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        rows={4}
                        placeholder="Tell us about your performance experience..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-white text-black hover:bg-gray-100 h-12 rounded-xl text-base border border-gray-200"
                    >
                      Submit Registration <Send className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By registering, you agree to our terms and conditions.
                    </p>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const infoCards = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Limited Spots",
    description: "Register early to secure your audition slot"
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Audition Dates",
    description: "Multiple dates available across different locations"
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Venues",
    description: "Convenient locations across Sikkim"
  }
]

export default Register
