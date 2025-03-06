"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const projectImages = [
  {
    src: "/project1.jpg",
    alt: "Project 1",
  },
  {
    src: "/project2.jpg",
    alt: "Project 2",
  },
  // Add more images here if needed
]

const IMAGES_PER_PAGE = 6

export default function ProjectsGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projectImages.length / IMAGES_PER_PAGE)
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE
  const visibleImages = projectImages.slice(startIndex, startIndex + IMAGES_PER_PAGE)

  const openLightbox = (index: number) => {
    setCurrentImage(startIndex + index)
    setIsOpen(true)
  }

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Our Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Explore some of our recent projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={640}
                height={480}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        )}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={projectImages[currentImage].src}
          nextSrc={projectImages[(currentImage + 1) % projectImages.length].src}
          prevSrc={projectImages[(currentImage + projectImages.length - 1) % projectImages.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentImage((currentImage + projectImages.length - 1) % projectImages.length)}
          onMoveNextRequest={() => setCurrentImage((currentImage + 1) % projectImages.length)}
          imageTitle={projectImages[currentImage].alt}
        />
      )}
    </section>
  )
}

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

