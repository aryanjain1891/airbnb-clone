"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart } from "lucide-react"
import { useState } from "react"

interface Experience {
  id: string
  title: string
  rating: number
  reviews: number
  location: string
  price: number
  originalPrice?: number
  hours: number
  image: string
  host: string
  isNew: boolean
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/experiences/${experience.id}`} className="block">
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-2">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className={`object-cover transition duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-3 right-3 z-10"
          >
            <Heart
              size={24}
              className={`${
                isFavorite
                  ? 'fill-red-500 text-white'
                  : 'fill-transparent text-white stroke-white'
              } transition duration-200 hover:opacity-80`}
            />
          </button>
          {experience.isNew && (
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md">
              <span className="text-xs font-medium">New</span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-truncate">{experience.title}</h3>
          </div>

          <div className="flex items-center gap-1">
            {experience.rating > 0 ? (
              <>
                <Star size={14} className="fill-current text-black" />
                <span className="text-sm">{experience.rating}</span>
                <span className="text-sm text-gray-500">({experience.reviews})</span>
              </>
            ) : (
              <span className="text-sm text-gray-500">New</span>
            )}
            <span className="text-sm text-gray-500 mx-1">·</span>
            <span className="text-sm text-gray-500">{experience.hours} {experience.hours === 1 ? 'hour' : 'hours'}</span>
          </div>

          <p className="text-sm text-gray-500">Hosted by {experience.host}</p>

          <div className="flex items-center">
            {experience.originalPrice ? (
              <>
                <span className="text-sm line-through text-gray-500 mr-2">${experience.originalPrice}</span>
                <span className="font-medium">${experience.price}</span>
              </>
            ) : (
              <span className="font-medium">From ${experience.price}</span>
            )}
            <span className="text-sm ml-1">/ person</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
