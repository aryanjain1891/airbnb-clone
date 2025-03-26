import Image from "next/image"
import Link from "next/link"
import ExperienceCard from "@/components/ExperienceCard"
import CategoryFilter from "@/components/CategoryFilter"

// Mock data for experiences
const experiences = [
  {
    id: "109978",
    title: "Learn to Fly an airplane Above LA",
    rating: 4.96,
    reviews: 1364,
    location: "Los Angeles, California",
    price: 130,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/3231360687.jpeg",
    host: "Mohamad Hani",
    isNew: false,
  },
  {
    id: "82265",
    title: "Fabulous views, Hike Runyon Canyon with rescue dogs",
    rating: 4.96,
    reviews: 2700,
    location: "Los Angeles, California",
    price: 35,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/1057118888.jpeg",
    host: "Runyon Canyon",
    isNew: false,
  },
  {
    id: "4636276",
    title: "Full Day Photoshoot Throughout Southern California",
    rating: 5.0,
    reviews: 15,
    location: "Los Angeles, California",
    price: 440,
    hours: 8,
    image: "https://ext.same-assets.com/3140348022/2388318033.jpeg",
    host: "Photography Tours",
    isNew: false,
  },
  {
    id: "5776991",
    title: "Savor East LA's mariscos culture with a seafood chef",
    rating: 0,
    reviews: 0,
    location: "Los Angeles, California",
    price: 65,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/2026593776.jpeg",
    host: "Chef Martinez",
    isNew: true,
  },
  {
    id: "5563467",
    title: "Intimate cooking class and dinner party with a cause",
    rating: 0,
    reviews: 0,
    location: "Los Angeles, California",
    price: 136,
    originalPrice: 170,
    hours: 3,
    image: "https://ext.same-assets.com/3140348022/4275240782.jpeg",
    host: "Community Kitchen",
    isNew: true,
  },
  {
    id: "400520",
    title: "Lets Goat Hike",
    rating: 4.99,
    reviews: 1403,
    location: "Los Angeles, California",
    price: 95,
    hours: 2.5,
    image: "https://ext.same-assets.com/3140348022/709076381.jpeg",
    host: "Yogigoats",
    isNew: false,
  },
]

// Mock data for highly rated experiences
const highlyRated = [
  {
    id: "527815",
    title: "Third Eye Sensory Journey",
    rating: 4.98,
    reviews: 258,
    location: "Joshua Tree, California",
    price: 89,
    originalPrice: 111,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/2389639175.jpeg",
    host: "Spiritual Guide",
    isNew: false,
  },
  {
    id: "835745",
    title: "LlamaMazing Fun Tour desert walk",
    rating: 5.0,
    reviews: 319,
    location: "Palm Springs, California",
    price: 95,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/1142580233.jpeg",
    host: "Llama Ranch",
    isNew: false,
  },
  {
    id: "37451",
    title: "Enchanted Wolf Encounters",
    rating: 4.96,
    reviews: 467,
    location: "Angeles National Forest, California",
    price: 250,
    hours: 2.5,
    image: "https://ext.same-assets.com/3140348022/3248903258.jpeg",
    host: "Wolf Sanctuary",
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
]

export default function Home() {
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
          <div className="flex items-center gap-3 overflow-hidden rounded-2xl">
            <div className="relative aspect-video w-[45%] md:w-[30%] overflow-hidden rounded-l-2xl">
              <Image
                src="https://ext.same-assets.com/3140348022/3029055038/1883153557.mp4"
                alt="Fly an airplane"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-2">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path d="M27.024 14.273L6.008 2.013c-.461-.268-1.024.13-.899.64l3.142 12.596c.058.234.289.405.525.405h8.951c.244 0 .443.2.443.443s-.199.444-.443.444H8.814a.558.558 0 0 0-.543.407l-3.08 12.59c-.121.512.435.91.896.64l21.001-12.263c.426-.248.428-.857-.064-1.142z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative aspect-video w-[55%] md:w-[70%] overflow-hidden rounded-r-2xl">
              <video
                src="https://ext.same-assets.com/3029055038/1883153557.mp4"
                poster="https://ext.same-assets.com/3140348022/3231360687.jpeg"
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          <div className="absolute left-8 top-0 h-full flex flex-col justify-center max-w-[400px] z-10 text-white">
            <h1 className="text-4xl font-medium mb-4">Unforgettable activities hosted by locals</h1>
            <Link
              href="/s/experiences"
              className="mt-2 text-sm font-medium bg-white text-black py-2 px-4 rounded-lg inline-block w-fit"
            >
              Explore all experiences
            </Link>
          </div>
        </section>

        {/* Experiences You Might Like */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Experiences you might like</h2>
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
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* Highly Rated for Uniqueness */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Highly rated for uniqueness</h2>
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
            {highlyRated.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* All Experiences Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-medium">All Experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...experiences, ...highlyRated].slice(0, 10).map((experience) => (
              <ExperienceCard key={`all-${experience.id}`} experience={experience} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Load more
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
