"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-32 md:w-40">
                        <Image
                            src="/images/logo.png"
                            alt="Wesley Mintjes Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/actie" className={cn("text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Actie
                    </Link>
                    <Link href="/#machine-finder" className={cn("text-sm font-medium hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Machine Finder
                    </Link>
                    <Link href="/#services" className={cn("text-sm font-medium hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Diensten
                    </Link>
                    <Link href="/#gallery" className={cn("text-sm font-medium hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Showroom
                    </Link>
                    <Link href="/nieuwsbrief" className={cn("text-sm font-medium hover:text-primary transition-colors", isScrolled ? "text-foreground" : "text-white")}>
                        Nieuwsbrief
                    </Link>
                    <Button
                        variant={isScrolled ? "default" : "secondary"}
                        className={cn("gap-2", isScrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-foreground hover:bg-white/90")}
                    >
                        <Phone className="h-4 w-4" />
                        Contact
                    </Button>
                </nav>

                <Button variant="ghost" size="icon" className="md:hidden text-white">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </header>
    )
}
