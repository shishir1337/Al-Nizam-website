import { Wrench, Zap, Thermometer, Hammer, Paintbrush, Clock } from "lucide-react"

const services = [
  {
    title: "Plumbing & Sanitary Installation",
    description: "Expert installation of plumbing systems and sanitary fixtures.",
    icon: Wrench,
  },
  {
    title: "Electrical Fittings & Fixtures",
    description: "Installation and maintenance of electrical systems and fixtures.",
    icon: Zap,
  },
  {
    title: "Air-Conditioning & Ventilation",
    description: "Installation and maintenance of HVAC and air filtration systems.",
    icon: Thermometer,
  },
  {
    title: "False Ceiling & Light Partitions",
    description: "Design and installation of false ceilings and light partitions.",
    icon: Hammer,
  },
  {
    title: "Painting & Tiling Works",
    description: "Professional painting and tiling services for walls and floors.",
    icon: Paintbrush,
  },
  {
    title: "24/7 Maintenance",
    description: "Round-the-clock support and maintenance services for all MEP systems.",
    icon: Clock,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl mb-4">
            Our Comprehensive Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            We provide a wide range of MEP services tailored to meet the unique requirements of commercial, residential,
            and industrial projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

