import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="MEP Systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Elevating Spaces with <span className="text-accent">MEP Excellence</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          AL NIZAM delivers top-quality mechanical, electrical, and plumbing solutions for projects across the UAE.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#services"
            className="bg-accent text-primary hover:bg-accent/90 text-lg font-medium px-8 py-3 rounded-md transition duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            href="/#contact"
            className="border border-white bg-transparent text-white hover:bg-white hover:text-primary text-lg font-medium px-8 py-3 rounded-md transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

