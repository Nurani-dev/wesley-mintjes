"use client"

import { ParallaxScroll } from "@/components/ui/parallax-scroll"

const images = [
    "/images/hero-machine.jpg",
    "/images/rider-mower.jpg",
    "/images/chainsaw-stihl.jpg",
    "/images/automower.jpg",
    "/images/workshop-1.jpg",
    "/images/showroom-front.jpg",
    "/images/hero-machine.jpg", // Repeating for demo effect if needed, or scrape more
    "/images/rider-mower.jpg",
    "/images/chainsaw-stihl.jpg",
]

export function Gallery() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
                        Geleverd & Onderhouden
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Een greep uit de machines die wij in topconditie houden voor onze klanten in Flevoland.
                    </p>
                </div>

                <ParallaxScroll images={images} className="h-[60rem]" />

            </div>
        </section>
    )
}
