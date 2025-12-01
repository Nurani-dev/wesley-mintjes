"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter text-foreground mb-6 block">
                            WESLEY MINTJES
                        </Link>
                        <p className="text-muted-foreground font-light leading-relaxed mb-6">
                            Uw partner voor professioneel tuinonderhoud en machines in Flevoland.
                            Officieel dealer van topmerken.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={Facebook} href="#" />
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-6">Navigatie</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/#services" label="Diensten" />
                            <FooterLink href="/#gallery" label="Showroom" />
                            <FooterLink href="/#contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-6">Diensten</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/#services" label="Onderhoud & Reparatie" />
                            <FooterLink href="/#services" label="Winterstalling" />
                            <FooterLink href="/actie" label="Acties & Aanbiedingen" />
                            <FooterLink href="/nieuwsbrief" label="Nieuwsbrief" />
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-6">Informatie</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/voorwaarden" label="Algemene Voorwaarden" />
                            <FooterLink href="/privacy-statement" label="Privacy Policy" />
                            <FooterLink href="#" label="Disclaimer" />
                            <FooterLink href="#" label="Cookies" />
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Wesley Mintjes. Alle rechten voorbehouden.</p>
                    <p>Ontwikkeld door Nurani</p>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link href={href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {label}
            </Link>
        </li>
    )
}

function SocialIcon({ icon: Icon, href }: { icon: React.ElementType, href: string }) {
    return (
        <a href={href} className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
            <Icon className="h-5 w-5" />
        </a>
    )
}
