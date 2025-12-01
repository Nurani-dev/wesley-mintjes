"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-6 md:px-12 max-w-[1000px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-foreground mb-12">
                        Privacy Statement
                    </h1>

                    <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">

                        <Section title="Wie zijn wij">
                            <p>
                                Wesley Mintjes is een bedrijf dat zich begeeft op de markt van professionele tuinmachines voor zakelijke klanten en particulieren.<br />
                                <strong>Website:</strong> https://wesleymintjes.nl<br />
                                <strong>Facebook:</strong> Wesley Mintjes Tuinmachines
                            </p>
                        </Section>

                        <Section title="Welke persoonlijke informatie registreren wij">
                            <p>
                                Wij registreren niet meer dan u via een contactformulier of vrijwillige inschrijving op deze site zelf verstrekt.
                            </p>
                        </Section>

                        <Section title="Media en Bestanden">
                            <p>
                                Als u afbeeldingen/video/bestanden naar de website uploadt, dient u te voorkomen dat deze ingesloten locatiegegevens (EXIF GPS) bevatten.
                                Bezoekers van de website kunnen locatiegegevens downloaden en extraheren uit afbeeldingen op de website.
                            </p>
                            <p className="mt-4">
                                Het is niet toegestaan om foto’s waarvan de rechten bij anderen liggen te uploaden zonder bronvermelding.
                                Het is tevens niet toegestaan media van deze site te gebruiken zonder toestemming van de rechthebbende.
                            </p>
                        </Section>

                        <Section title="Cookies">
                            <p>
                                In de browser worden alleen tijdelijke cookies geplaatst voor analytische doeleinden, niet voor het verkrijgen van persoonlijke informatie.
                            </p>
                        </Section>

                        <Section title="Informatie van andere websites">
                            <p>
                                Wij maken gebruik van verwijzingen naar andere sites en informatie van andere sites. Voor zover mogelijk zullen wij de bron vermelden.
                            </p>
                        </Section>

                        <Section title="Met wie delen wij uw data">
                            <p>
                                <strong>Wij delen uw data met niemand.</strong> De data is uitsluitend voor intern gebruik en wij doen er alles aan om deze goed te beheren.
                            </p>
                        </Section>

                        <Section title="Hoelang bewaren wij uw gegevens">
                            <p>
                                Als u een opmerking achterlaat, worden de opmerking en de bijbehorende metagegevens voor onbepaalde tijd bewaard.
                                Voor gebruikers die zich registreren op onze website (indien van toepassing), slaan we ook de persoonlijke informatie op die ze verstrekken in hun gebruikersprofiel.
                                Alle gebruikers kunnen hun persoonlijke gegevens op elk gewenst moment bekijken, bewerken of verwijderen (behalve hun gebruikersnaam).
                                Website-beheerders kunnen die informatie ook bekijken en bewerken.
                            </p>
                        </Section>

                        <Section title="Welke rechten u hebt over uw gegevens">
                            <p>
                                Als u een account op deze site hebt of opmerkingen hebt achtergelaten, kunt u een geëxporteerd bestand ontvangen van de persoonlijke gegevens die we over u bewaren.
                                U kunt ook verzoeken dat we alle persoonlijke gegevens die we over u bewaren, wissen.
                                Dit omvat geen gegevens die we verplicht moeten bewaren voor administratieve, wettelijke of beveiligingsdoeleinden.
                            </p>
                        </Section>

                        <Section title="Hoe we uw gegevens beschermen">
                            <p>
                                Uw data wordt door het webhostingbedrijf op de daarvoor gangbare wijze beveiligd tegen onrechtmatig gebruik.
                            </p>
                        </Section>

                        <Section title="Auteursrecht">
                            <p>
                                Wij hebben getracht de eigenaren van afbeeldingen op de site te achterhalen. Mocht dit niet gelukt zijn, verzoeken wij u contact met ons op te nemen; wij zullen in goed overleg de gegevens aanpassen of verwijderen.
                                Alle rechten van materiaal (foto’s, video’s, teksten) op de site komen toe aan de maker en mogen niet zonder toestemming vooraf gebruikt of gedupliceerd worden.
                            </p>
                        </Section>

                        <Section title="Onvoorzien">
                            <p>
                                Mochten deze regels onverhoopt niet toereikend zijn, zullen wij deze op eerste vordering aanpassen en de wet daarin volgen.
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
