"use client"

import Image from "next/image"
import { CheckCircle2, Award } from "lucide-react"

export function About() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground mb-6">
                            <Award className="mr-2 h-4 w-4 text-primary" />
                            Sinds 2010
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-foreground">
                            Meer dan alleen een webshop. <br />
                            <span className="text-primary">Wij zijn uw lokale expert.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Bij Wesley Mintjes draait het niet om snelle verkoop, maar om langdurige service.
                            Met onze eigen **professionele werkplaats** in Lelystad zorgen wij dat uw machines
                            jaar in, jaar uit topprestaties leveren.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Officieel Husqvarna & Kärcher Dealer",
                                "Eigen werkplaats voor onderhoud & reparatie",
                                "Haal- en brengservice in Flevoland",
                                "Persoonlijk advies op maat"
                            ].map((item) => (
                                <li key={item} className="flex items-center text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image / Visual */}
                    <div className="relative h-[400px] bg-muted rounded-3xl overflow-hidden border border-border group">
                        <Image
                            src="/images/workshop-1.jpg"
                            alt="Onze Werkplaats"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Klanttevredenheid</p>
                                    <p className="text-2xl font-bold text-foreground">9.8 / 10</p>
                                </div>
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Award className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
