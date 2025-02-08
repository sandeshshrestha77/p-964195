import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Season 3 Winner",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "Participating in Sikkim Rising Star was life-changing. The challenges pushed me beyond my limits while the cultural experiences enriched my understanding of Sikkim.",
  },
  {
    name: "Raj Pradhan",
    role: "Season 2 Participant",
    image: "https://i.pravatar.cc/150?img=2",
    quote: "The friendships formed during the competition are priceless. It's not just about winning, it's about growing together and discovering yourself.",
  },
  {
    name: "Emily Chen",
    role: "Season 3 Finalist",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "From mountain treks to cultural performances, every challenge was thoughtfully designed. It's an experience I'll cherish forever.",
  },
  {
    name: "David Kumar",
    role: "Season 1 Winner",
    image: "https://i.pravatar.cc/150?img=4",
    quote: "The competition perfectly balances adventure with cultural immersion. It's a unique way to experience Sikkim's beauty and traditions.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Participants Say</h2>
          <p className="text-gray-600">
            Hear from those who've experienced the adventure firsthand
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}