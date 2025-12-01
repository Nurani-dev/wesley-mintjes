"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const PRODUCTS = [
    {
        id: "am-305",
        title: "Automower® 305",
        category: "Robotmaaiers",
        price: "€ 1.499,-",
        image: "/images/am-305.jpg", // Placeholder
        badge: "Best Seller"
    },
    {
        id: "572-xp",
        title: "Husqvarna 572 XP®",
        category: "Kettingzagen",
        price: "Op aanvraag",
        image: "/images/572-xp.jpg", // Placeholder
        badge: "Professional"
    },
    {
        id: "k4",
        title: "Kärcher K4 Power",
        category: "Reiniging",
        price: "€ 289,-",
        image: "/images/k4.jpg", // Placeholder
        badge: "Nieuw"
    },
    {
        id: "am-405x",
        title: "Automower® 405X",
        category: "Robotmaaiers",
        price: "Op aanvraag",
        image: "/images/am-550.jpg", // Placeholder
        badge: "X-Line"
    },
    {
        id: "120-mark",
        title: "Husqvarna 120 Mark II",
        category: "Kettingzagen",
        price: "€ 249,-",
        image: "/images/120-mark.jpg", // Placeholder
        badge: "Instapmodel"
    }
]

export function ProductCarousel() {
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = direction === "left" ? -300 : 300
            current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <section className="py-16 bg-secondary/30 border-y border-border">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        UITGELICHTE MACHINES
                    </h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full border-border bg-background hover:bg-muted">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full border-border bg-background hover:bg-muted">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[280px] md:min-w-[320px] bg-card rounded-2xl p-6 border border-border shadow-sm snap-center flex flex-col group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Badge */}
                            <div className="mb-4">
                                {product.badge && (
                                    <span className={cn(
                                        "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full",
                                        product.badge === "Best Seller" ? "bg-primary text-white" : "bg-foreground text-background"
                                    )}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Image */}
                            <div className="relative h-48 mb-6 bg-muted rounded-xl overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-1">{product.category}</p>
                                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">{product.title}</h3>

                                {/* Rating Placeholder */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                                    ))}
                                    <span className="text-xs text-muted-foreground ml-1">(24)</span>
                                </div>

                                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                    <span className="text-lg font-bold text-foreground">{product.price}</span>
                                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
                                        Bekijk
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
