"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Visual (Cinematic) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-machine.jpg"
                    alt="Wesley Mintjes Showroom"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            </div>

            {/* Content Container - Bottom Left Alignment (Automotive Style) */}
            <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Brand Tag */}
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="h-[1px] w-12 bg-green-500"></span>
                        <span className="text-green-400 font-medium tracking-widest text-sm uppercase">
                            Official Dealer
                        </span>
                    </div>

                    {/* Massive Headline */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 font-heading text-white leading-[0.9]">
                        POWER.<br />
                        PRECISION.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                            PERFECTION.
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
                        Ervaar de ultieme prestaties van Husqvarna & Kärcher. <br className="hidden md:block" />
                        Uw partner voor professioneel tuinonderhoud in Flevoland.
                    </p>

                    {/* Automotive Style CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg rounded-none tracking-wide font-semibold transition-all duration-300 min-w-[200px]"
                        >
                            Vind Uw Machine
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white/10 hover:border-white h-14 px-8 text-lg rounded-none tracking-wide backdrop-blur-sm transition-all duration-300 min-w-[200px]"
                        >
                            <Play className="mr-2 h-4 w-4 fill-current" />
                            Bekijk Showroom
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 right-8 md:right-12 flex items-center space-x-4 text-white/50"
            >
                <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                <div className="h-[1px] w-12 bg-white/30"></div>
            </motion.div>
        </section>
    )
}
