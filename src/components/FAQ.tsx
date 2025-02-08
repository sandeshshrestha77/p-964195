import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/animations/FadeIn"

const faqs = [
  {
    question: "What is Sikkim Rising Star?",
    answer: "Sikkim Rising Star is a premier adventure competition that combines cultural experiences, physical challenges, and exploration of Sikkim's breathtaking landscapes. It's designed to test participants' limits while promoting tourism and cultural awareness."
  },
  {
    question: "Who can participate?",
    answer: "The competition is open to individuals aged 18 and above who are physically fit and passionate about adventure. We welcome participants from all backgrounds and nationalities."
  },
  {
    question: "What kind of challenges can I expect?",
    answer: "Challenges include mountain trekking, survival skills, cultural performances, team-building exercises, and local heritage exploration. Each task is designed to test both physical and mental capabilities."
  },
  {
    question: "How long does the competition last?",
    answer: "The main competition typically runs for 10-14 days, with various stages and challenges spread across different locations in Sikkim."
  },
  {
    question: "Is previous experience required?",
    answer: "While previous adventure or trekking experience is beneficial, it's not mandatory. We provide necessary training and safety briefings before each challenge."
  },
  {
    question: "What safety measures are in place?",
    answer: "We maintain strict safety protocols with professional guides, medical support, and emergency response teams available throughout the competition. All activities are risk-assessed and monitored."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know about Sikkim Rising Star
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}