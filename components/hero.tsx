"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 mb-6"
                >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Officieel Husqvarna & Kärcher Dealer
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mb-6 text-slate-900"
                >
                    Professionele Tuinmachines voor <span className="text-green-600">Flevoland</span>.
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
                >
                    Advies, verkoop en onderhoud vanuit Lelystad. Wij helpen u de perfecte machine te vinden voor elke klus.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-lg rounded-full">
                        Vind Uw Machine
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-300 hover:bg-slate-100">
                        Bezoek Showroom
                    </Button>
                </motion.div>

            </div>
        </section>
    )
}
