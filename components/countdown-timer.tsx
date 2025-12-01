"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null)

    useEffect(() => {
        function getTimeUntilNextMonth() {
            const now = new Date()
            const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
            const diff = nextMonth.getTime() - now.getTime()

            if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)

            return { days, hours, minutes, seconds }
        }

        // Set initial time immediately on mount
        // eslint-disable-next-line
        setTimeLeft(getTimeUntilNextMonth())

        const timer = setInterval(() => {
            setTimeLeft(getTimeUntilNextMonth())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!timeLeft) {
        return (
            <div className="flex gap-4 justify-center">
                <TimeUnit value={0} label="Dagen" />
                <TimeUnit value={0} label="Uur" />
                <TimeUnit value={0} label="Min" />
                <TimeUnit value={0} label="Sec" />
            </div>
        )
    }

    return (
        <div className="flex gap-4 justify-center">
            <TimeUnit value={timeLeft.days} label="Dagen" />
            <TimeUnit value={timeLeft.hours} label="Uur" />
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
    )
}

function TimeUnit({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                key={value}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-600 rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-4xl font-bold text-white shadow-lg mb-2 border border-green-500"
            >
                {value.toString().padStart(2, '0')}
            </motion.div>
            <span className="text-xs md:text-sm font-medium text-foreground uppercase tracking-wider">
                {label}
            </span>
        </div>
    )
}
