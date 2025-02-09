import { useEffect, useState } from "react"
import { FadeIn } from "./animations/FadeIn"

interface CountdownTimerProps {
  targetDate: string; // Add a prop for the target date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const SEASON_4_START = new Date(targetDate).getTime() // Use the passed targetDate
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = SEASON_4_START - now
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer) // Stop the timer when the countdown ends
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate]) // Add targetDate as a dependency

  return (
    <FadeIn className="flex justify-center gap-4 md:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-bold text-blue-600">
              {value}
            </span>
          </div>
          <div className="text-sm text-gray-600 capitalize">{unit}</div>
        </div>
      ))}
    </FadeIn>
  )
}