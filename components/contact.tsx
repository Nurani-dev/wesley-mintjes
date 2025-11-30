"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-slate-900 to-slate-900" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
                            Kom langs in de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Showroom</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                            De koffie staat klaar. Bekijk de nieuwste modellen van Husqvarna en Kärcher in het echt en laat u adviseren door onze experts.
                        </p>

                        <div className="space-y-6">
                            <ContactItem icon={MapPin} title="Adres" content="Apolloweg 14, 8239 DA Lelystad" />
                            <ContactItem icon={Phone} title="Telefoon" content="06 - 123 456 78" />
                            <ContactItem icon={Mail} title="E-mail" content="info@wesleymintjes.nl" />
                            <ContactItem icon={Clock} title="Openingstijden" content="Ma - Vr: 08:00 - 17:30 | Za: 09:00 - 15:00" />
                        </div>

                        <div className="mt-10">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 h-12 font-medium">
                                Routebeschrijving
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Glassmorphism Map Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.865887648468!2d5.496666315807964!3d52.53616697981685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64f7b6b6b6b6b%3A0x47c64f7b6b6b6b6b!2sApolloweg%2014%2C%208239%20DA%20Lelystad!5e0!3m2!1sen!2snl!4v1629789000000!5m2!1sen!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                            allowFullScreen
                            loading="lazy"
                            title="Google Maps Location"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-xs">
                            <p className="text-sm font-medium text-white mb-1">Gratis Parkeren</p>
                            <p className="text-xs text-slate-400">Ruime parkeergelegenheid direct voor de deur.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                <Icon className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">{title}</p>
                <p className="text-base font-medium text-white">{content}</p>
            </div>
        </div>
    )
}
