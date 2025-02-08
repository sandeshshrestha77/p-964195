import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="relative bg-white py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true"
              alt="Logo"
              className="h-8 w-auto"
            />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About us</a>
              <a href="#events" className="text-gray-600 hover:text-gray-900">Events</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            </div>
          </nav>
          <div className="mt-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Website heading goes here
            </h1>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">Feature name</h2>
              <p className="text-gray-600 mb-8">
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </p>
              <div className="flex space-x-4">
                <Button>Try now</Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/9eddbfaafd978d0f56682813e3db91701e526c4b40fb9e974d7545f7e4562ad1?placeholderIfAbsent=true"
                alt="Feature illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4">Feature name</h2>
              <p className="text-gray-600 mb-8">
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </p>
              <div className="flex space-x-4">
                <Button>Try now</Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
            <div className="md:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b579f5c6b5323ec84dd7befc85056971d5c056edd2e61a573bfc28c86c1e8b05?placeholderIfAbsent=true"
                alt="Feature illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Feature name</h2>
              <p className="text-gray-600 mb-8">
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </p>
              <div className="flex space-x-4">
                <Button>Try now</Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/865feb173212241cabdb42a15965543b8e96e1e150f7272ceee483d4fe4e3b4e?placeholderIfAbsent=true"
                alt="Feature illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From the people</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We love hearing from our customers! You're the reason we're here
              and the reason we do what we do.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start gap-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/b97f030bd396620749ff37f637e38b3615f204ee599c5750c955ed4b011e2608?placeholderIfAbsent=true"
                  alt="Customer"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-gray-600 mb-4">
                    The ring itself is stunning, with a beautiful design that
                    catches the light and sparkles from every angle. The quality
                    of the materials used is evident, as the ring feels
                    substantial and durable. The gemstone is exquisite, with a
                    vibrant color and exceptional clarity.
                  </p>
                  <h3 className="font-bold">Anna Fernandez</h3>
                  <p className="text-gray-500">USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Loved by Product-led Teams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={`URL_${index + 11}`}
                  alt={`Brand logo ${index}`}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for something</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/068612288de14b679bb19d087dcdd69c/2cd1699fb70d821508fb804f8b47d2ff0bbc80901c21646271842332dcf65f3c?placeholderIfAbsent=true"
              alt="Logo"
              className="h-8 w-auto mb-4 md:mb-0"
            />
            <nav className="flex space-x-8">
              <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#terms" className="text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#help" className="text-gray-600 hover:text-gray-900">Help</a>
              <a href="#devices" className="text-gray-600 hover:text-gray-900">Devices</a>
            </nav>
          </div>
          <div className="text-center text-gray-600">
            <p>© PlayCine Media Direct, LLC. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;