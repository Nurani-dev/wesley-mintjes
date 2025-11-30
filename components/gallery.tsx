"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    { src: "/images/hero-machine.jpg", alt: "Professionele Freesmachine" },
    { src: "/images/rider-mower.jpg", alt: "Husqvarna Rider" },
    { src: "/images/chainsaw-work.jpg", alt: "Kettingzaag Onderhoud" },
    { src: "/images/leaf-blower.jpg", alt: "Bladblazer Reparatie" },
    { src: "/images/workshop-1.jpg", alt: "Werkplaats Interieur" },
    { src: "/images/workshop-2.jpg", alt: "Specialistisch Gereedschap" },
]

export function Gallery() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
                        Geleverd & Onderhouden
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Een greep uit de machines die wij in topconditie houden voor onze klanten in Flevoland.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
