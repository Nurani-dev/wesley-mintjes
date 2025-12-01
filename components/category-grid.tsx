"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const CATEGORIES = [
    {
        id: "mowing",
        title: "MAAIEN",
        subtitle: "Robotmaaiers & Zitmaaiers",
        image: "/images/cat-mowing.jpg", // Placeholder
        link: "/#machine-finder"
    },
    {
        id: "sawing",
        title: "ZAGEN",
        subtitle: "Kettingzagen & Snoeien",
        image: "/images/cat-sawing.jpg", // Placeholder
        link: "/#machine-finder"
    },
    {
        id: "cleaning",
        title: "REINIGEN",
        subtitle: "Hogedrukreinigers",
        image: "/images/cat-cleaning.jpg", // Placeholder
        link: "/#machine-finder"
    },
    {
        id: "service",
        title: "ONDERHOUD",
        subtitle: "Reparatie & Service",
        image: "/images/cat-service.jpg", // Placeholder
        link: "/#services"
    }
]

export function CategoryGrid() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                            KIES UW KLUS
                        </h2>
                        <p className="text-muted-foreground">
                            Vind direct de juiste machine voor uw werkzaamheden.
                        </p>
                    </div>
                    <Link href="/#machine-finder" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                        Bekijk Alle Categorieën <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat, index) => (
                        <Link key={cat.id} href={cat.link} className="group relative h-[400px] overflow-hidden rounded-2xl block">
                            {/* Image */}
                            <div className="absolute inset-0 bg-gray-200">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.div
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">{cat.title}</h3>
                                    <p className="text-gray-300 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {cat.subtitle}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        Bekijk Aanbod <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/#machine-finder" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        Bekijk Alle Categorieën <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}
