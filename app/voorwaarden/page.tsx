"use client"

import { motion } from "framer-motion"

export default function VoorwaardenPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-6 md:px-12 max-w-[1000px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-foreground mb-12">
                        Algemene Voorwaarden
                    </h1>

                    <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">

                        <Section title="Offerte">
                            <p>
                                Offertes zijn vrijblijvend en 14 dagen geldig tenzij anders aangegeven.
                                Wesley Mintjes behoudt zich het recht voor een offerte terug te trekken indien er wijzigingen in de opdracht zijn.
                            </p>
                        </Section>

                        <Section title="Aankopen">
                            <p>
                                Voor aankopen hanteren wij de volgende betalingsvoorwaarden:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Bij het verstrekken van de opdracht: <strong>50% aanbetaling</strong>.</li>
                                <li>Het restant van 50% bij aflevering.</li>
                            </ul>
                            <p className="mt-4">
                                Bij een overeengekomen afwijkende betalingsovereenkomst (bijvoorbeeld op rekening achteraf) geldt een maximale betalingstermijn van 14 dagen.
                                Na deze termijn wordt het bedrag direct vorderbaar met rente vanaf de factuurdatum.
                                Na een betalingsherinnering zal de vordering uit handen worden gegeven aan een incassobureau voor rekening van de klant, waarbij ook rente in rekening wordt gebracht.
                            </p>
                        </Section>

                        <Section title="Transportkosten">
                            <p>
                                Voor aflevering van aankopen kunnen transportkosten in rekening worden gebracht.
                                Transportkosten vallen <strong>niet</strong> onder de garantie.
                                Ook bij service- en reparatieopdrachten kunnen transportkosten in rekening worden gebracht.
                            </p>
                        </Section>

                        <Section title="Betaling">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Betalingen geschieden via bankoverschrijving.</li>
                                <li>Voor aflevering dient het bedrag op onze rekening te staan of ter plaatse via PIN te worden voldaan. (Denk aan het eventueel tijdelijk verhogen van uw limiet).</li>
                                <li>Contante betaling is alleen mogelijk na overleg.</li>
                            </ul>
                        </Section>

                        <Section title="Reparatie en Onderhoud">
                            <p>
                                Als u een machine voor reparatie en onderhoud aanbiedt, kan er op verzoek vooraf een prijsopgave worden gedaan.
                                De kosten dienen bij het ophalen of aflevering voldaan te worden.
                                Indien er vooraf een prijsopgave wordt gevraagd en de werkzaamheden niet worden uitgevoerd, wordt er uurloon voor de diagnose en eventuele transportkosten in rekening gebracht.
                            </p>
                        </Section>

                        <Section title="Garantie">
                            <p>
                                Op aankoop van machines is de wettelijke garantie van toepassing.
                                Op reparatie en onderdelen geldt een garantie van <strong>drie maanden</strong>, uitgezonderd bewegende onderdelen die aan slijtage onderhavig zijn.
                            </p>
                        </Section>

                        <Section title="Eigendomsvoorbehoud">
                            <p>
                                Totdat het volledige bedrag van de aankoop of reparatie is voldaan, blijven de goederen eigendom van Wesley Mintjes.
                                Deze kunnen zonder enige tegenwerping worden teruggevorderd zonder dat de overeenkomst komt te vervallen.
                                Bij onderhoud of reparatie kunnen goederen worden vastgehouden totdat de betaling is verricht (retentierecht).
                            </p>
                        </Section>

                    </div>
                </motion.div>
            </div>
        </main>
    )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
            <div className="leading-relaxed">
                {children}
            </div>
            <div className="h-[1px] w-full bg-border mt-8" />
        </div>
    )
}
