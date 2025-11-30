"use client"

import { ArrowUpRight, Wrench, Leaf, Truck, Zap, Settings, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Services() {
    return (
        <section className="py-32 bg-zinc-950 text-white">
            <div className="container px-6 md:px-12 max-w-[1800px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-sm font-medium text-green-500 tracking-widest uppercase mb-4">
                            Technical Specifications
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
                            Service & Maintenance
                        </h3>
                    </div>
                    <p className="text-zinc-400 max-w-md text-right mt-6 md:mt-0 font-light">
                        Authorized service center for Husqvarna, Stihl, and Kärcher.
                        Factory-trained technicians. Genuine parts.
                    </p>
                </div>

                {/* Spec Sheet List */}
                <div className="grid grid-cols-1">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-white/10 py-12 hover:bg-white/5 transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4">

                                {/* Index & Icon */}
                                <div className="flex items-center gap-8 w-full md:w-1/4">
                                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                                    <service.icon className="h-6 w-6 text-zinc-500 group-hover:text-green-500 transition-colors duration-300" />
                                    <h4 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h4>
                                </div>

                                {/* Description */}
                                <div className="w-full md:w-1/2">
                                    <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="w-full md:w-auto flex justify-end">
                                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                                        <ArrowUpRight className="h-5 w-5 text-white transform group-hover:rotate-45 transition-transform duration-300" />
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
        title: "Precision Maintenance",
        description: "Comprehensive diagnostics and repair for all major brands. We use advanced telemetry tools to ensure your machine operates at peak efficiency.",
        icon: Wrench
    },
    {
        title: "Winter Storage Protocol",
        description: "Climate-controlled storage with battery maintenance and fuel stabilization. Your machine is prepped and ready for the first cut of spring.",
        icon: Leaf
    },
    {
        title: "Logistics & Transport",
        description: "White-glove pickup and delivery service across Flevoland. We handle the heavy lifting so you don't have to.",
        icon: Truck
    },
    {
        title: "Automower Integration",
        description: "Expert installation of robotic systems. Boundary wire mapping, docking station calibration, and software programming.",
        icon: Zap
    },
    {
        title: "Blade Sharpening",
        description: "Laser-guided sharpening for chains and blades. Restores factory-edge precision for a cleaner, healthier cut.",
        icon: Settings
    },
    {
        title: "Warranty Management",
        description: "Direct liaison with manufacturers for warranty claims. We handle the paperwork and parts procurement.",
        icon: ShieldCheck
    }
]
