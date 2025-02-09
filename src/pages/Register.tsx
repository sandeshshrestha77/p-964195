
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Register for Auditions</h1>
            
            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Performance Category
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md"
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
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Experience (Optional)
                  </label>
                  <textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Tell us about your performance experience..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Audition Registration
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By registering, you'll be notified about your audition slot and venue details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Register
