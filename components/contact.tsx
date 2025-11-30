"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section className="relative py-32 bg-zinc-950 text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50" />

            <div className="container relative z-10 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Concierge Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-none shadow-2xl relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent" />

                        <h2 className="text-sm font-medium text-green-500 tracking-widest uppercase mb-6">
                            Concierge Service
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-8">
                            Visit the Studio.
                        </h3>
                        <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-md">
                            Experience our collection in person. Our specialists are ready to provide a personalized consultation for your estate or business needs.
                        </p>

                        <div className="space-y-8 mb-12">
                            <ContactRow icon={MapPin} label="Location" value="Apolloweg 14, 8239 DA Lelystad" />
                            <ContactRow icon={Phone} label="Direct Line" value="06 - 123 456 78" />
                            <ContactRow icon={Mail} label="Email" value="info@wesleymintjes.nl" />
                        </div>

                        <Button size="lg" className="w-full bg-white text-black hover:bg-zinc-200 rounded-none h-14 text-lg tracking-wide font-semibold">
                            Get Directions
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    {/* Map / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full bg-zinc-900 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.865887648468!2d5.496666315807964!3d52.53616697981685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64f7b6b6b6b6b%3A0x47c64f7b6b6b6b6b!2sApolloweg%2014%2C%208239%20DA%20Lelystad!5e0!3m2!1sen!2snl!4v1629789000000!5m2!1sen!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen
                            loading="lazy"
                            title="Google Maps Location"
                        />

                        {/* Status Badge */}
                        <div className="absolute bottom-8 right-8 bg-black text-white px-6 py-3 flex items-center gap-3 border border-white/20">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-mono tracking-wider">OPEN TODAY UNTIL 17:30</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ContactRow({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-6 group cursor-pointer">
            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-500 transition-colors duration-300">
                <Icon className="h-5 w-5 text-zinc-400 group-hover:text-green-500 transition-colors duration-300" />
            </div>
            <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-lg font-medium text-white group-hover:text-green-400 transition-colors duration-300">{value}</p>
            </div>
        </div>
    )
}
