"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Wrench, Leaf, Truck, Settings, ShieldCheck, Zap } from "lucide-react"
import React from "react"

export function Services() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
                        Onze Diensten
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Van periodiek onderhoud tot complexe reparaties. Wij houden uw machines in topconditie.
                    </p>
                </div>

                <BentoGrid className="max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

const Skeleton = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ${color}`} />
);

const items = [
    {
        title: "Onderhoud & Reparatie",
        description: "Professioneel onderhoud voor alle merken in onze eigen werkplaats.",
        header: <Skeleton color="from-green-100 to-green-50" />,
        icon: <Wrench className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Winterbeurt Service",
        description: "Voorkom startproblemen in het voorjaar met onze complete winterbeurt.",
        header: <Skeleton color="from-blue-100 to-blue-50" />,
        icon: <Leaf className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Haal- en Brengservice",
        description: "Wij halen uw machine op in heel Flevoland en brengen hem weer terug.",
        header: <Skeleton color="from-orange-100 to-orange-50" />,
        icon: <Truck className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Automower Installatie",
        description: "Volledige installatie van robotmaaiers inclusief kabel leggen en programmeren.",
        header: <Skeleton color="from-emerald-100 to-emerald-50" />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Slijpservice",
        description: "Kettingen, messen en heggenscharen vlijmscherp geslepen.",
        header: <Skeleton color="from-red-100 to-red-50" />,
        icon: <Settings className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Garantie Afhandeling",
        description: "Als officieel dealer regelen wij al uw garantieclaims direct met de fabrikant.",
        header: <Skeleton color="from-purple-100 to-purple-50" />,
        icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
    },
];
