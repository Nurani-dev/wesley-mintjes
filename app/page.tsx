import { HeroOptimum } from "@/components/hero-optimum"
import { CategoryGrid } from "@/components/category-grid"
import { ProductCarousel } from "@/components/product-carousel"
import { MachineFinder } from "@/components/machine-finder"
import { EducationSection } from "@/components/education-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroOptimum />
      <CategoryGrid />
      <ProductCarousel />
      <MachineFinder />
      <EducationSection />
      <NewsletterSection />
    </main>
  )
}
