"use client"

import { MapPin, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Kom langs in de showroom</h2>
                        <p className="text-slate-400 mb-12 text-lg">
                            De koffie staat klaar. Bekijk de nieuwste modellen of breng uw machine langs voor onderhoud.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-green-500 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Adres</h3>
                                    <p className="text-slate-400">Zuiveringweg 48b<br />8243 PZ Lelystad</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-green-500 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Contact</h3>
                                    <p className="text-slate-400">info@wesleymintjes.nl</p>
                                    <p className="text-slate-500 text-sm mt-1">(Telefonisch beperkt bereikbaar, mail heeft voorkeur)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="h-6 w-6 text-green-500 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Openingstijden</h3>
                                    <p className="text-slate-400">Ma - Vr: 08:30 - 17:30</p>
                                    <p className="text-red-400 font-medium mt-1">Woensdag: GESLOTEN</p>
                                    <p className="text-slate-400">Za: 09:00 - 12:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                                Plan Route
                            </Button>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] lg:h-auto bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.567890123456!2d5.495678!3d52.512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63123456789ab%3A0x1234567890abcdef!2sZuiveringweg%2048b%2C%208243%20PZ%20Lelystad!5e0!3m2!1sen!2snl!4v1620000000000!5m2!1sen!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        {/* Note: Coordinates are approximate placeholders. In production, use exact embed link. */}
                    </div>

                </div>
            </div>
        </section>
    )
}
