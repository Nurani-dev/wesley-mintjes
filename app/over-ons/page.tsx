import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Over Ons | Wesley Mintjes',
    description: 'Leer meer over Wesley Mintjes, onze eigen werkplaats en service afdeling.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit text-foreground">
                            Over Ons
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Eigen werkplaats en <span className="text-primary">service afdeling</span>
                            </h2>
                            <p>
                                <span className="font-bold text-foreground">WESLEY MINTJES</span> is een jong en dynamisch bedrijf. Wij doen zelf de in- en verkoop en de service.
                            </p>
                            <p>
                                De modern ingerichte werkplaats wordt door mij en een medewerker bezet, dus altijd een bekende aan uw machine, daarom weet u met wie u te maken heeft.
                            </p>
                            <p>
                                Geen verkooppraatjes. Ervaring zorgt voor de kennis die u nodig heeft.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6" />
                            <div className="relative h-full w-full bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
                                <Image
                                    src="/images/wesley-van-hunnik-v2.jpg"
                                    alt="Wesley Mintjes"
                                    fill
                                    className="object-cover object-center rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Signature/Name Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white py-4 px-8 rounded-xl shadow-lg border border-border">
                                <p className="font-outfit font-bold text-xl text-foreground tracking-wide">
                                    WESLEY MINTJES
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
