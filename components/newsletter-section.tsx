"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
    return (
        <section className="py-24 bg-foreground text-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">

                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-8">
                        <Mail className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        BLIJF OP DE HOOGTE
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Meld u aan voor onze nieuwsbrief en ontvang direct updates over nieuwe machines,
                        seizoensacties en onderhoudstips.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Uw e-mailadres"
                            className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:bg-white/20 rounded-full px-6"
                        />
                        <Button size="lg" className="h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8">
                            Aanmelden
                        </Button>
                    </form>

                    <p className="mt-6 text-xs text-gray-500">
                        Wij respecteren uw privacy. U kunt zich op elk moment afmelden.
                    </p>

                </div>
            </div>
        </section>
    )
}
