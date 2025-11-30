"use client"

import { Wrench, ShoppingBag, Truck, ThermometerSnowflake } from "lucide-react"

const services = [
    {
        title: "Verkoop & Advies",
        description: "Nieuwe en gebruikte machines van topmerken. Wij adviseren u graag in onze showroom.",
        icon: ShoppingBag,
    },
    {
        title: "Onderhoud & Reparatie",
        description: "Eigen werkplaats met gecertificeerde monteurs voor alle merken tuinmachines.",
        icon: Wrench,
    },
    {
        title: "Storingshulpdienst",
        description: "Snelle service op locatie voor grote machines in de regio Flevoland.",
        icon: Truck,
    },
    {
        title: "Winterbeurt",
        description: "Complete servicebeurt inclusief haal- en brengservice, zodat u in het voorjaar direct aan de slag kunt.",
        icon: ThermometerSnowflake,
    },
]

export function Services() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
                        Onze Diensten
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Meer dan alleen verkoop. Wij zorgen dat uw machines altijd in topconditie zijn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
