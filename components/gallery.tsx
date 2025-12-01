"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
    { src: "/images/hero-machine.jpg", title: "Husqvarna Automower 450X", category: "Robotmaaiers" },
    { src: "/images/rider-mower.jpg", title: "Rider R 214TC", category: "Zitmaaiers" },
    { src: "/images/chainsaw-stihl.jpg", title: "Stihl MS 500i", category: "Bosbouw" },
    { src: "/images/automower.jpg", title: "Kärcher HDS 8/18", category: "Professionele Reiniging" },
    { src: "/images/workshop-1.jpg", title: "Service Center", category: "Onderhoud" },
    { src: "/images/showroom-front.jpg", title: "Lelystad Showroom", category: "Beleving" },
]

export function Gallery() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Header Overlay */}
                <div className="absolute top-12 left-6 md:left-12 z-20">
                    <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
                        DE COLLECTIE
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
                        Showroom Hoogtepunten
                    </h3>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden bg-card border border-border shadow-lg"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 80vw, 40vw"
                            />

                            {/* Overlay Content - Gradient for text readability on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent flex flex-col justify-end p-8">
                                <span className="text-primary text-xs font-mono mb-2 uppercase tracking-wider">
                                    {image.category}
                                </span>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {image.title}
                                </h4>
                                <div className="h-[1px] w-full bg-white/20 mb-4 group-hover:bg-primary transition-colors duration-300" />
                                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white/80 text-sm">Bekijk Specificaties</span>
                                    <ArrowRight className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Final CTA Card */}
                    <div className="relative h-[60vh] w-[80vw] md:w-[30vw] flex-shrink-0 flex flex-col items-center justify-center bg-card border border-border p-8 text-center shadow-lg">
                        <h3 className="text-3xl font-bold text-foreground mb-4">Ontdek Meer</h3>
                        <p className="text-muted-foreground mb-8 max-w-xs">
                            Bezoek onze showroom in Lelystad om het volledige assortiment te ervaren.
                        </p>
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none shadow-md">
                            Bezoek Showroom
                        </Button>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
