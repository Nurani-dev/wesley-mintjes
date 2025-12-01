"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, ChevronDown, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function HeaderOptimum() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">

            {/* TOP BAR - USP / Promo */}
            <div className="bg-foreground text-background py-2 px-4 text-xs md:text-sm font-medium tracking-wide text-center relative z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="hidden md:flex gap-6">
                        <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-primary" /> Officieel Dealer Flevoland</span>
                        <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-primary" /> Eigen Werkplaats</span>
                    </div>
                    <div className="mx-auto md:mx-0 font-bold text-primary">
                        GRATIS VERZENDING VANAF € 50,-
                    </div>
                    <div className="hidden md:block">
                        <Link href="/contact" className="hover:text-primary transition-colors">Klantenservice</Link>
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className={cn(
                "bg-white border-b border-border transition-all duration-300 relative z-40",
                isScrolled ? "shadow-md py-2" : "py-4"
            )}>
                <div className="container mx-auto px-4 flex items-center justify-between gap-8">

                    {/* LOGO */}
                    <Link href="/" className="relative h-10 w-32 md:w-40 flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            alt="Wesley Mintjes"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* DESKTOP NAV - MEGA MENU */}
                    <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                        <NavItem
                            title="Machines"
                            id="machines"
                            activeId={activeDropdown}
                            setActiveId={setActiveDropdown}
                        >
                            <MegaMenuMachines />
                        </NavItem>
                        <NavItem
                            title="Diensten"
                            id="services"
                            activeId={activeDropdown}
                            setActiveId={setActiveDropdown}
                        >
                            <MegaMenuServices />
                        </NavItem>
                        <Link href="/actie" className="text-sm font-bold uppercase tracking-wide bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                            Acties
                        </Link>
                        <Link href="/over-ons" className="text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors text-foreground">
                            Over Ons
                        </Link>
                    </nav>

                    {/* SEARCH & ACTIONS */}
                    <div className="flex items-center gap-4 flex-shrink-0">

                        {/* Search Bar (Desktop) */}
                        <div className="hidden md:flex items-center relative w-64">
                            <Input
                                placeholder="Zoeken..."
                                className="pr-10 bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-full h-10"
                            />
                            <Search className="absolute right-3 w-4 h-4 text-muted-foreground" />
                        </div>

                        {/* Contact Button */}
                        <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full font-bold px-6">
                            Contact
                        </Button>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2 text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[100%] left-0 right-0 bg-white border-b border-border shadow-xl p-4 lg:hidden flex flex-col gap-4 z-30"
                    >
                        <Input placeholder="Zoeken..." className="bg-secondary/30" />
                        <nav className="flex flex-col gap-4">
                            <Link href="/#machine-finder" className="font-bold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Machines</Link>
                            <Link href="/#services" className="font-bold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Diensten</Link>
                            <Link href="/actie" className="font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>Acties</Link>
                            <Link href="/over-ons" className="font-bold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Over Ons</Link>
                            <Link href="/contact" className="font-bold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* DROPDOWN BACKDROP */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 top-[115px]"
                    onMouseEnter={() => setActiveDropdown(null)}
                />
            )}
        </header>
    )
}

// --- SUBCOMPONENTS ---

function NavItem({ title, id, activeId, setActiveId, children }: { title: string, id: string, activeId: string | null, setActiveId: (id: string | null) => void, children: React.ReactNode }) {
    const isActive = activeId === id

    return (
        <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
        >
            <button className={cn(
                "text-sm font-bold uppercase tracking-wide flex items-center gap-1 transition-colors py-4",
                isActive ? "text-primary" : "text-foreground hover:text-primary"
            )}>
                {title}
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isActive && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-b-xl shadow-xl border-t border-primary/20 overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function MegaMenuMachines() {
    return (
        <div className="grid grid-cols-2 p-6 gap-8 bg-white">
            <div>
                <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-wider">Categorieën</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Robotmaaiers</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Zitmaaiers</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Kettingzagen</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Bladblazers</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Hogedrukreinigers</Link></li>
                </ul>
            </div>
            <div className="bg-secondary/20 p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Machine Finder</h4>
                <p className="text-sm text-muted-foreground mb-4">Weet u niet zeker wat u nodig heeft?</p>
                <Button size="sm" className="w-full">Start Wizard</Button>
            </div>
        </div>
    )
}

function MegaMenuServices() {
    return (
        <div className="grid grid-cols-2 p-6 gap-8 bg-white">
            <div>
                <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-wider">Onze Diensten</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Onderhoud & Reparatie</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Winterstalling</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Slijpservice</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Haal- en Brengservice</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-wider">Informatie</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Tarieven</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Veelgestelde Vragen</Link></li>
                    <li><Link href="#" className="block text-foreground hover:text-primary hover:translate-x-1 transition-all">Garantie</Link></li>
                </ul>
            </div>
        </div>
    )
}
