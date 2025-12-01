"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCcw, Leaf, Scissors, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Data & Logic ---

type Category = "mowing" | "sawing" | "cleaning"
type Usage = "home" | "pro"

interface Machine {
    id: string
    name: string
    description: string
    image: string
    badge?: string
}

const RECOMMENDATIONS: Record<Category, Record<Usage, Machine>> = {
    mowing: {
        home: {
            id: "am-305",
            name: "Husqvarna Automower® 305",
            description: "Perfect voor kleinere, complexe tuinen tot 600 m². Compact en efficiënt.",
            image: "/images/am-305.jpg", // Placeholder
            badge: "Best Seller"
        },
        pro: {
            id: "am-550",
            name: "Husqvarna Automower® 550 EPOS",
            description: "Professionele robotmaaier voor sportvelden en parken. Draadloze technologie.",
            image: "/images/am-550.jpg",
            badge: "Professional Choice"
        }
    },
    sawing: {
        home: {
            id: "120-mark-ii",
            name: "Husqvarna 120 Mark II",
            description: "Gebruiksvriendelijke allround kettingzaag voor haardhout en licht snoeiwerk.",
            image: "/images/120-mark.jpg",
        },
        pro: {
            id: "572-xp",
            name: "Husqvarna 572 XP®",
            description: "De ultieme zaag voor de professional. Extreem vermogen en uithoudingsvermogen.",
            image: "/images/572-xp.jpg",
            badge: "Heavy Duty"
        }
    },
    cleaning: {
        home: {
            id: "k4",
            name: "Kärcher K4 Power Control",
            description: "Ideaal voor het reinigen van auto's, tuinmeubilair en terrassen.",
            image: "/images/k4.jpg",
        },
        pro: {
            id: "hds-5",
            name: "Kärcher HDS 5/15 U",
            description: "Professionele warmwaterhogedrukreiniger. Compact maar krachtig.",
            image: "/images/hds-5.jpg",
            badge: "Hot Water"
        }
    }
}

// --- Component ---

export function MachineFinder() {
    const [step, setStep] = useState<1 | 2 | 3>(1)
    const [category, setCategory] = useState<Category | null>(null)
    const [usage, setUsage] = useState<Usage | null>(null)

    const reset = () => {
        setStep(1)
        setCategory(null)
        setUsage(null)
    }

    const handleCategorySelect = (c: Category) => {
        setCategory(c)
        setStep(2)
    }

    const handleUsageSelect = (u: Usage) => {
        setUsage(u)
        setStep(3)
    }

    const result = category && usage ? RECOMMENDATIONS[category][usage] : null

    return (
        <section className="py-24 bg-background" id="machine-finder">
            <div className="container px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
                        De Intelligente Machine Finder
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Beantwoord 2 simpele vragen en wij adviseren direct de perfecte machine voor uw klus.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border min-h-[400px] flex flex-col justify-center relative overflow-hidden">

                    <AnimatePresence mode="wait">

                        {/* STEP 1: CATEGORY */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Wat wilt u gaan doen?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <OptionCard
                                        icon={<Leaf className="w-8 h-8 text-primary" />}
                                        title="Maaien"
                                        desc="Gazononderhoud"
                                        onClick={() => handleCategorySelect("mowing")}
                                    />
                                    <OptionCard
                                        icon={<Scissors className="w-8 h-8 text-orange-500" />}
                                        title="Zagen & Snoeien"
                                        desc="Bomen en struiken"
                                        onClick={() => handleCategorySelect("sawing")}
                                    />
                                    <OptionCard
                                        icon={<Droplets className="w-8 h-8 text-blue-500" />}
                                        title="Reinigen"
                                        desc="Hogedruk & Vegen"
                                        onClick={() => handleCategorySelect("cleaning")}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: USAGE */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <Button variant="ghost" onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground">
                                        ← Terug
                                    </Button>
                                    <h3 className="text-2xl font-semibold text-center flex-1 pr-16 text-foreground">Hoe intensief is het gebruik?</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                    <OptionCard
                                        icon={<div className="text-2xl">🏡</div>}
                                        title="Particulier"
                                        desc="Voor eigen huis en tuin"
                                        onClick={() => handleUsageSelect("home")}
                                    />
                                    <OptionCard
                                        icon={<div className="text-2xl">🏗️</div>}
                                        title="Professioneel"
                                        desc="Dagelijks zwaar gebruik"
                                        onClick={() => handleUsageSelect("pro")}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: RESULT */}
                        {step === 3 && result && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full text-center"
                            >
                                <div className="mb-8">
                                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                        Onze Aanbeveling
                                    </span>
                                    <h3 className="text-3xl font-bold text-foreground mb-2">{result.name}</h3>
                                    {result.badge && (
                                        <span className="inline-block px-3 py-1 bg-foreground text-background text-xs font-bold rounded uppercase tracking-wider mb-4">
                                            {result.badge}
                                        </span>
                                    )}
                                    <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8">
                                        {result.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                                        Bekijk Details
                                    </Button>
                                    <Button size="lg" variant="outline" onClick={reset} className="gap-2 border-border text-foreground hover:bg-muted">
                                        <RefreshCcw className="w-4 h-4" />
                                        Opnieuw Zoeken
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}

function OptionCard({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center p-8 bg-background rounded-2xl border-2 border-transparent hover:border-primary shadow-sm hover:shadow-md transition-all duration-200 group text-center"
        >
            <div className="mb-4 p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                {icon}
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
            <p className="text-muted-foreground text-sm">{desc}</p>
        </button>
    )
}
