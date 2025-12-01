"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background text-foreground">
            {/* Background Visual (Daylight Showroom) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-machine.jpg"
                    alt="Wesley Mintjes Showroom"
                    fill
                    className="object-cover opacity-80" // Higher opacity for daylight feel
                    priority
                />
                {/* Light Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
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
                        <span className="h-[2px] w-12 bg-primary"></span>
                        <span className="text-primary font-medium tracking-widest text-sm uppercase">
                            Officieel Dealer
                        </span>
                    </div>

                    {/* Massive Headline */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 font-heading text-foreground leading-[0.9]">
                        KRACHT.<br />
                        PRECISIE.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                            PERFECTIE.
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed">
                        Ervaar de ultieme prestaties van Husqvarna & Kärcher. <br className="hidden md:block" />
                        Uw partner voor professioneel tuinonderhoud in Flevoland.
                    </p>

                    {/* Automotive Style CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg rounded-none tracking-wide font-semibold transition-all duration-300 min-w-[200px] shadow-lg shadow-primary/20"
                        >
                            Vind Uw Machine
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground h-14 px-8 text-lg rounded-none tracking-wide backdrop-blur-sm transition-all duration-300 min-w-[200px]"
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
                className="absolute bottom-8 right-8 md:right-12 flex items-center space-x-4 text-muted-foreground"
            >
                <span className="text-xs tracking-widest uppercase">Scroll om te ontdekken</span>
                <div className="h-[1px] w-12 bg-foreground/30"></div>
            </motion.div>
        </section>
    )
}
