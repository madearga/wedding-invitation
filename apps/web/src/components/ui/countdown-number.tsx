"use client"

import React, { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

const MotionNumberFlow = motion.create(NumberFlow)

interface CountdownProps {
  endDate: Date
  startDate?: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date()
      const end = new Date(endDate)
      const difference = end.getTime() - start.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate, startDate])

  return (
    <div className={`flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 ${className}`}>
      <div className="flex flex-col items-center min-w-0">
        <MotionNumberFlow
          value={timeLeft.days}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tighter leading-none"
          style={{ color: '#452912' }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs sm:text-sm mt-0.5 sm:mt-1" style={{ color: '#6b4423' }}>Hari</span>
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl font-bold px-1" style={{ color: '#452912' }}>:</div>
      <div className="flex flex-col items-center min-w-0">
        <MotionNumberFlow
          value={timeLeft.hours}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tighter leading-none"
          style={{ color: '#452912' }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs sm:text-sm mt-0.5 sm:mt-1" style={{ color: '#6b4423' }}>Jam</span>
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl font-bold px-1" style={{ color: '#452912' }}>:</div>
      <div className="flex flex-col items-center min-w-0">
        <MotionNumberFlow
          value={timeLeft.minutes}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tighter leading-none"
          style={{ color: '#452912' }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs sm:text-sm mt-0.5 sm:mt-1" style={{ color: '#6b4423' }}>Menit</span>
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl font-bold px-1" style={{ color: '#452912' }}>:</div>
      <div className="flex flex-col items-center min-w-0">
        <MotionNumberFlow
          value={timeLeft.seconds}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tighter leading-none"
          style={{ color: '#452912' }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-xs sm:text-sm mt-0.5 sm:mt-1" style={{ color: '#6b4423' }}>Detik</span>
      </div>
    </div>
  )
}