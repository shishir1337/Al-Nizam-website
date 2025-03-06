import type React from "react"
import { CheckCircle, Zap, Clock, Users, Award, ThumbsUp } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20 dark:bg-gray-800 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Why Choose AL NIZAM
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            We combine technical expertise with a commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureCard(
            "Experienced Professionals",
            "Our team consists of certified experts with extensive industry experience.",
            <Users className="h-10 w-10" />,
          )}
          {featureCard(
            "Government-Authorized",
            "We are a fully registered and government-authorized MEP contracting company.",
            <CheckCircle className="h-10 w-10" />,
          )}
          {featureCard(
            "High-Quality Work",
            "We ensure superior quality in all our projects, meeting the highest industry standards.",
            <Award className="h-10 w-10" />,
          )}
          {featureCard(
            "Timely Completion",
            "We are committed to completing projects on schedule without compromising quality.",
            <Clock className="h-10 w-10" />,
          )}
          {featureCard(
            "Cost-Effective Solutions",
            "We provide energy-efficient and cost-effective MEP solutions for all projects.",
            <Zap className="h-10 w-10" />,
          )}
          {featureCard(
            "24/7 Customer Support",
            "Our team is available round the clock to address your concerns and provide support.",
            <ThumbsUp className="h-10 w-10" />,
          )}
        </div>
      </div>
    </section>
  )
}

function featureCard(title: string, description: string, icon: React.ReactNode) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-900">
      <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary dark:bg-primary/20">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

