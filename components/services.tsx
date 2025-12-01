"use client"

import { ArrowUpRight, Wrench, Leaf, Truck, Zap, Settings, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Services() {
    return (
        <section className="py-32 bg-background text-foreground">
            <div className="container px-6 md:px-12 max-w-[1800px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-border pb-8">
                    <div>
                        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                            TECHNISCHE SPECIFICATIES
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-foreground">
                            Service & Onderhoud
                        </h3>
                    </div>
                    <p className="text-muted-foreground max-w-md text-right mt-6 md:mt-0 font-light">
                        Erkend servicepunt voor Husqvarna, Stihl en Kärcher.
                        Fabrieksgetrainde monteurs. Originele onderdelen.
                    </p>
                </div>

                {/* Spec Sheet List */}
                <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-card border border-border p-8 md:p-12 hover:shadow-lg hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                                {/* Index & Icon */}
                                <div className="flex items-center gap-8 w-full md:w-1/4">
                                    <span className="text-xs font-mono text-muted-foreground/50">0{index + 1}</span>
                                    <service.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                    <h4 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-foreground">
                                        {service.title}
                                    </h4>
                                </div>

                                {/* Description */}
                                <div className="w-full md:w-1/2">
                                    <p className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="w-full md:w-auto flex justify-end">
                                    <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-white transform group-hover:rotate-45 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const services = [
    {
        title: "Precisie Onderhoud",
        description: "Uitgebreide diagnose en reparatie voor alle grote merken. Wij gebruiken geavanceerde telemetrie om uw machine optimaal te laten presteren.",
        icon: Wrench
    },
    {
        title: "Winterstalling Protocol",
        description: "Geconditioneerde opslag met accu-onderhoud en brandstofstabilisatie. Uw machine staat klaar voor de eerste maaibeurt van het voorjaar.",
        icon: Leaf
    },
    {
        title: "Haal- en Brengservice",
        description: "Premium haal- en brengservice in heel Flevoland. Wij doen het zware werk, zodat u dat niet hoeft te doen.",
        icon: Truck
    },
    {
        title: "Automower Installatie",
        description: "Vakkundige installatie van robotsystemen. Draad leggen, laadstation kalibreren en software programmeren.",
        icon: Zap
    },
    {
        title: "Slijpservice",
        description: "Laser-gestuurd slijpen voor kettingen en messen. Herstelt de fabrieksscherpte voor een schoner en gezonder maairesultaat.",
        icon: Settings
    },
    {
        title: "Garantie Afhandeling",
        description: "Direct contact met fabrikanten voor garantieclaims. Wij regelen het papierwerk en de onderdelen.",
        icon: ShieldCheck
    }
]
