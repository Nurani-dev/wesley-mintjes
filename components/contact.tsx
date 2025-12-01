"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section className="relative py-32 bg-background text-foreground overflow-hidden">
            {/* Background Elements - Light & Airy */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background to-transparent opacity-50" />

            <div className="container relative z-10 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Concierge Card - Floating White Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border p-10 md:p-16 rounded-none shadow-2xl relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />

                        <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
                            CONCIËRGE SERVICE
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-8 text-foreground">
                            Bezoek de Studio.
                        </h3>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-md">
                            Ervaar onze collectie in het echt. Onze specialisten staan klaar voor een persoonlijk adviesgesprek voor uw landgoed of bedrijf.
                        </p>

                        <div className="space-y-8 mb-12">
                            <ContactRow icon={MapPin} label="Locatie" value="Apolloweg 14, 8239 DA Lelystad" />
                            <ContactRow icon={Phone} label="Directe Lijn" value="06 - 123 456 78" />
                            <ContactRow icon={Mail} label="E-mail" value="info@wesleymintjes.nl" />
                        </div>

                        <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 rounded-none h-14 text-lg tracking-wide font-semibold shadow-lg shadow-primary/20">
                            Routebeschrijving
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    {/* Map / Visual - Clean Grayscale */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full bg-card border border-border shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.865887648468!2d5.496666315807964!3d52.53616697981685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64f7b6b6b6b6b%3A0x47c64f7b6b6b6b6b!2sApolloweg%2014%2C%208239%20DA%20Lelystad!5e0!3m2!1sen!2snl!4v1629789000000!5m2!1sen!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }} // Removed invert filter for light theme
                            allowFullScreen
                            loading="lazy"
                            title="Google Maps Location"
                        />

                        {/* Status Badge */}
                        <div className="absolute bottom-8 right-8 bg-white text-foreground px-6 py-3 flex items-center gap-3 border border-border shadow-md">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-mono tracking-wider">VANDAAG GEOPEND TOT 17:30</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) {
    return (
        <div className="flex items-center gap-6 group cursor-pointer">
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300 bg-background">
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">{value}</p>
            </div>
        </div>
    )
}
