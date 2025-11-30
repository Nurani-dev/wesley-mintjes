import { Hero } from "@/components/hero"
import { MachineFinder } from "@/components/machine-finder"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MachineFinder />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
