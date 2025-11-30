"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"

export function Hero() {
    return (
        <AuroraBackground>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-slate-200/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm text-slate-900 dark:text-slate-200 mb-8 shadow-lg"
                >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span className="font-medium">Officieel Husqvarna & Kärcher Dealer</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 drop-shadow-sm"
                >
                    Professionele Tuinmachines <br />
                    voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Flevoland</span>.
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed"
                >
                    Advies, verkoop en onderhoud vanuit Lelystad. <br className="hidden md:block" />
                    Wij helpen u de perfecte machine te vinden voor elke klus.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        Vind Uw Machine
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                        Bezoek Showroom
                    </Button>
                </motion.div>

                {/* Parallax Machine Image (Floating) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring" }}
                    className="mt-16 relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                >
                    <Image
                        src="/images/hero-machine.jpg"
                        alt="Wesley Mintjes Showroom"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
            </div>
        </AuroraBackground>
    )
}
