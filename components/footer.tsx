import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="AL NIZAM Logo"
              width={120}
              height={40}
              className="h-auto w-auto object-contain"
            />
            <p className="mt-4 text-gray-400">
              A MEP licensed government-authorized and fully registered company providing top-quality mechanical and
              electrical contracting services in UAE.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 transition-colors hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#mechanical" className="text-gray-400 transition-colors hover:text-white">
                  Mechanical Works
                </Link>
              </li>
              <li>
                <Link href="/services#electrical" className="text-gray-400 transition-colors hover:text-white">
                  Electrical Works
                </Link>
              </li>
              <li>
                <Link href="/services#plumbing" className="text-gray-400 transition-colors hover:text-white">
                  Plumbing Systems
                </Link>
              </li>
              <li>
                <Link href="/services#hvac" className="text-gray-400 transition-colors hover:text-white">
                  HVAC Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-400 transition-colors hover:text-white">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">Office No. 412, Building Name Murjan Tower Al Nahda 2, Near carrefour. Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">+971 5 085 77432</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">04 575 8261</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">Alnizam2025@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AL NIZAM MECHANICAL ELECTRICAL WORK CONTRACTING LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

