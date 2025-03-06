import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Users, Award } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl mb-4">
            About AL NIZAM
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Your trusted partner in high-quality MEP solutions across the UAE
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Founded in January 2023, AL NIZAM MECHANICAL ELECTRICAL WORK CONTRACTING LLC has quickly established
              itself as a leading MEP contracting company in Dubai and beyond. We take pride in delivering high-quality
              projects on time and within budget.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our team of skilled professionals ensures that every project meets the highest industry standards. We
              combine technical expertise with a commitment to excellence, efficiency, and safety, bringing innovative
              solutions to commercial, residential, and industrial projects across the UAE.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/team.jpg"
              alt="AL NIZAM Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Calendar, title: "Founded", value: "2023" },
            { icon: Users, title: "Expert Team", value: "50+" },
            { icon: Award, title: "Projects Completed", value: "100+" },
            { icon: CheckCircle, title: "Client Satisfaction", value: "99%" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
              <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary text-white hover:bg-primary/90">Learn More About Us</Button>
        </div>
      </div>
    </section>
  )
}
