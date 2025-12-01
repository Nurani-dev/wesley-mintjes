"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroOptimum() {
    return (
        <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-black">

            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg" // We will need to ensure this exists or use a placeholder
                    alt="Husqvarna Automower"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 backdrop-blur-sm px-4 py-1 rounded-full text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        <Star className="w-4 h-4 fill-current" />
                        Officieel Husqvarna Dealer
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
                        KRACHT VOOR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            UW TUIN
                        </span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                        Van robotmaaiers tot professionele kettingzagen.
                        Ontdek het premium assortiment van Wesley Mintjes.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25">
                            Bekijk Showroom
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 h-14 rounded-full">
                            Maak Afspraak
                        </Button>
                    </div>

                </motion.div>
            </div>

            {/* Bottom USP Bar (Integrated into Hero like ON) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 py-4 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-white/90 text-sm font-medium tracking-wide">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Gratis Advies op Maat
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Eigen Reparatie Service
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Officieel Dealer Garantie
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        Haal- & Brengservice
                    </div>
                </div>
            </div>

        </section>
    )
}
