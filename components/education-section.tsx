"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function EducationSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                    ADVIES & EXPERTISE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Article 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="/images/advice-robot.jpg" // Placeholder
                                alt="Robotmaaier Advies"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Keuzehulp</span>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                Welke Automower® past bij uw tuin?
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                                Een complexe tuin met smalle doorgangen of een open grasveld?
                                Ontdek waar u op moet letten bij de aanschaf van een robotmaaier.
                            </p>
                            <Button variant="link" className="p-0 text-foreground font-bold group-hover:text-primary transition-colors">
                                Lees Artikel <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6">
                            <Image
                                src="/images/advice-maintenance.jpg" // Placeholder
                                alt="Onderhoud Tips"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Onderhoud</span>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                5 Tips voor een langere levensduur
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                                Goed onderhoud is het halve werk. Met deze simpele tips houdt u uw
                                kettingzaag of bosmaaier in topconditie, seizoen na seizoen.
                            </p>
                            <Button variant="link" className="p-0 text-foreground font-bold group-hover:text-primary transition-colors">
                                Lees Artikel <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
