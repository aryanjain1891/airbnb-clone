import Image from "next/image"
import Link from "next/link"
import ExperienceCard from "@/components/ExperienceCard"
import CategoryFilter from "@/components/CategoryFilter"

// Mock data for in-person experiences
const indoorExperiences = [
  {
    id: "5886078",
    title: "Tour The Original LA Flower Market and build a bouquet",
    rating: 5.0,
    reviews: 15,
    location: "Los Angeles, California",
    price: 49,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/1348296063.jpeg",
    host: "Floral Expert",
    isNew: true,
  },
  {
    id: "5776922",
    title: "Explore and sketch Downtown LA's Art Deco architecture",
    rating: 0,
    reviews: 0,
    location: "Los Angeles, California",
    price: 55,
    hours: 2.5,
    image: "https://ext.same-assets.com/3140348022/2382609700.jpeg",
    host: "LA Architecture Guide",
    isNew: true,
  },
  {
    id: "5928277",
    title: "Sushi, sweets, and stories with an actor in Little Tokyo",
    rating: 0,
    reviews: 0,
    location: "Los Angeles, California",
    price: 60,
    originalPrice: 70,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/2209690789.jpeg",
    host: "Tokyo Explorer",
    isNew: true,
  },
  {
    id: "5705097",
    title: "Dive into vinyl and music history at Permanent Records",
    rating: 0,
    reviews: 0,
    location: "Los Angeles, California",
    price: 40,
    hours: 1.5,
    image: "https://ext.same-assets.com/3140348022/1423073146.jpeg",
    host: "Vinyl Enthusiast",
    isNew: true,
  },
  {
    id: "143492",
    title: "Book a Memorable Portrait Experience - Also Reels and Film",
    rating: 5.0,
    reviews: 67,
    location: "Los Angeles, California",
    price: 222,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/277918512.jpeg",
    host: "Professional Photographer",
    isNew: false,
  },
  {
    id: "3292874",
    title: "Private Night Photoshoot in Downtown",
    rating: 4.98,
    reviews: 210,
    location: "Los Angeles, California",
    price: 115,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/3811120941.jpeg",
    host: "Night Photography Expert",
    isNew: false,
  },
]

// Mock categories for filter
const categories = [
  { id: "1", name: "Art and culture", icon: "🎨" },
  { id: "2", name: "Entertainment", icon: "🎭" },
  { id: "3", name: "Food and drink", icon: "🍷" },
  { id: "4", name: "Sports", icon: "⚽" },
  { id: "5", name: "Tours", icon: "🚶" },
  { id: "6", name: "Sightseeing", icon: "🏙️" },
  { id: "7", name: "Workshops", icon: "🛠️" },
  { id: "8", name: "Nature", icon: "🌿" },
]

export default function IndoorExperiences() {
  return (
    <div className="pb-10">
      {/* Filter Section */}
      <div className="border-b border-gray-200 mb-6">
        <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter categories={categories} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src="https://ext.same-assets.com/3140348022/3950841709.jpeg"
              alt="In-person Experiences"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-16 w-full md:w-1/2">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-medium mb-4">In-person Experiences</h1>
                <p className="text-lg md:text-xl mb-6">
                  Local activities led by experts, creating unforgettable memories
                </p>
                <Link
                  href="#all-experiences"
                  className="mt-2 text-sm font-medium bg-white text-black py-3 px-5 rounded-lg inline-block"
                >
                  Browse all experiences
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Experiences */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">New Experiences</h2>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                  <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                </svg>
              </button>
              <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                  <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {indoorExperiences.filter(exp => exp.isNew).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* Featured Experiences */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Featured Experiences</h2>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                  <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                </svg>
              </button>
              <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                  <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {indoorExperiences.filter(exp => !exp.isNew).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* All In-person Experiences */}
        <section id="all-experiences">
          <div className="mb-6">
            <h2 className="text-2xl font-medium">All in-person experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {indoorExperiences.map((experience) => (
              <ExperienceCard key={`all-${experience.id}`} experience={experience} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Load more
            </button>
          </div>
        </section>

        {/* Host Experience CTA */}
        <section className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src="https://ext.same-assets.com/3140348022/572157753.jpeg"
              alt="Host an Experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-16 w-full md:w-1/2">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Host an Experience</h2>
                <p className="text-lg mb-6">
                  Share your passion with travelers and earn extra income doing what you love.
                </p>
                <Link
                  href="/host/experiences"
                  className="mt-2 text-sm font-medium bg-white text-black py-3 px-5 rounded-lg inline-block"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
