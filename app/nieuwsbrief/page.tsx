"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NieuwsbriefPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center">
            <div className="container px-6 md:px-12 max-w-[600px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />

                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tighter text-foreground mb-4">
                        Blijf op de hoogte
                    </h1>
                    <p className="text-muted-foreground mb-10 leading-relaxed">
                        Meld u aan voor onze nieuwsbrief en ontvang als eerste updates over nieuwe machines, onderhoudstips en exclusieve acties.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2 text-left">
                            <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">E-mailadres</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="uw.naam@voorbeeld.nl"
                                className="h-12 bg-background border-border focus:ring-primary"
                            />
                        </div>
                        <Button size="lg" className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold text-lg">
                            Aanmelden
                        </Button>
                    </form>

                    <p className="mt-6 text-xs text-muted-foreground">
                        Wij respecteren uw privacy. U kunt zich op elk moment afmelden.
                    </p>

                </motion.div>
            </div>
        </main>
    )
}
