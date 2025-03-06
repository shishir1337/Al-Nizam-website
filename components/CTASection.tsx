import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-20 text-white lg:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/background1.jpg"
          alt="Blueprint Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Elevate Your Project?</h2>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Contact AL NIZAM today to discuss your MEP requirements and discover how we can deliver exceptional
            solutions for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

