"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Flame, Calendar, Clock } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import Image from "next/image"

export default function ActiePage() {
    const currentMonth = new Date().toLocaleString('nl-NL', { month: 'long' })

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-6 md:px-12 max-w-[1800px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-bold tracking-wider uppercase mb-4 border border-orange-500/20">
                        Actie van de Maand
                    </span>
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter text-foreground mb-6">
                        DEAL VAN <span className="text-primary uppercase">{currentMonth}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Profiteer deze maand van exclusieve kortingen.
                        Deze aanbieding verloopt automatisch aan het einde van de maand.
                    </p>

                    {/* Timer */}
                    <div className="mb-12">
                        <CountdownTimer />
                    </div>
                </motion.div>

                {/* Fuel Deal - Hero Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-2 text-orange-600 font-bold mb-4 bg-white/50 backdrop-blur-sm w-fit px-3 py-1 rounded-full">
                                <Flame className="h-5 w-5 fill-orange-600" />
                                <span>WEGENS SUCCES VERLENGD</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Husqvarna Power Fuel 2T/4T
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                De beste brandstof voor uw machine. Schonere verbranding, langere levensduur en minder uitstoot.
                                Nu extra voordelig bij afname van 3 cans.
                            </p>

                            <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-6 mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-bold text-orange-600">€ 78,00</span>
                                    <span className="text-lg text-muted-foreground line-through decoration-red-500 decoration-2">€ 89,85</span>
                                </div>
                                <span className="text-lg font-medium text-foreground bg-white/60 px-3 py-1 rounded-lg">
                                    voor 3 stuks (5L cans)
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span>Keuze uit Oranje (2-takt) of Blauw (4-takt)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span>Langer houdbaar dan gewone benzine</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span>Alleen geldig bij afhalen in de showroom</span>
                                </div>
                            </div>

                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg shadow-orange-500/25 h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                                Reserveer Nu
                            </Button>
                        </div>

                        {/* Visual Representation */}
                        <div className="relative h-[400px] md:h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 border border-orange-100 overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50 via-transparent to-transparent opacity-50" />

                            <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
                                <div className="flex justify-center -space-x-12 mb-8">
                                    {/* Left Can (2T) */}
                                    <div className="relative w-40 h-56 bg-white rounded-xl shadow-2xl transform -rotate-12 border-4 border-white flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/images/husqvarna-fuel.png"
                                            alt="Husqvarna Power Fuel"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>

                                    {/* Center Can (4T) */}
                                    <div className="relative w-40 h-56 bg-white rounded-xl shadow-2xl transform rotate-6 border-4 border-white z-10 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/images/husqvarna-fuel-4t.png"
                                            alt="Husqvarna Power Fuel 4T"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>

                                    {/* Right Can (2T) */}
                                    <div className="relative w-40 h-56 bg-white rounded-xl shadow-2xl transform rotate-12 border-4 border-white flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/images/husqvarna-fuel.png"
                                            alt="Husqvarna Power Fuel"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mt-4">Husqvarna Aspen Fuel</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Deals Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        Meer Aanbiedingen
                    </h2>
                    <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Geldig t/m einde van de maand</span>
                    </div>
                </div>

                {/* Automower Deals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProductCard
                        title="Automower® 105"
                        price="Op aanvraag"
                        desc="Compacte driewielige robotmaaier voor open grasvelden tot 600 m²."
                        features={["Capaciteit: 600 m²", "Helling: 25%", "Oplaadtijd: 50 min"]}
                        image="/images/am-105.webp"
                    />
                    <ProductCard
                        title="Automower® 305"
                        price="€ 1.499,-"
                        desc="Ideaal voor kleinere, complexe tuinen. Vierwielig platform met systematische passagebehandeling."
                        features={["Capaciteit: 600 m²", "Helling: 40%", "Weertimer & Vorstbeveiliging"]}
                        highlight
                        image="/images/am-305.jpg"
                    />
                    <ProductCard
                        title="Automower® 405X"
                        price="Op aanvraag"
                        desc="Premium X-line model met GPS-navigatie en LED-koplampen."
                        features={["Capaciteit: 600 m²", "GPS Diefstalopsporing", "Automower® Connect"]}
                        image="/images/am-405x.webp"
                    />
                </div>

                <div className="mt-16 text-center text-muted-foreground text-sm max-w-3xl mx-auto">
                    <p>*) Prijswijzigingen voorbehouden. Robotmaaiers zijn exclusief installatie en installatie-kit. Acties zijn niet geldig in combinatie met andere aanbiedingen.</p>
                </div>

            </div>
        </main>
    )
}

function ProductCard({ title, price, desc, features, highlight = false, image }: { title: string, price: string, desc: string, features: string[], highlight?: boolean, image?: string }) {
    return (
        <div className={`relative rounded-3xl p-8 border ${highlight ? 'bg-foreground text-background border-foreground shadow-2xl scale-105 z-10' : 'bg-card border-border shadow-sm'} flex flex-col transition-all duration-300 hover:shadow-lg`}>
            {highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg whitespace-nowrap">
                    Beste Keuze
                </div>
            )}

            {image && (
                <div className="mb-6 relative h-48 w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'text-background' : 'text-foreground'}`}>{title}</h3>
            <div className={`text-3xl font-bold mb-6 ${highlight ? 'text-primary' : 'text-primary'}`}>{price}</div>

            <p className={`mb-8 leading-relaxed ${highlight ? 'text-gray-300' : 'text-muted-foreground'}`}>
                {desc}
            </p>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${highlight ? 'text-primary' : 'text-primary'}`} />
                        <span className={highlight ? 'text-gray-300' : 'text-muted-foreground'}>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button className={`w-full h-12 rounded-full font-bold text-lg ${highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                Meer Informatie
            </Button>
        </div>
    )
}
