import Image from "next/image"
import Link from "next/link"
import ExperienceCard from "@/components/ExperienceCard"
import CategoryFilter from "@/components/CategoryFilter"

// Mock data for experiences
const allExperiences = [
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
  {
    id: "527815",
    title: "Virtual Tour: Tokyo Street Food Walk",
    rating: 4.98,
    reviews: 358,
    location: "Online",
    price: 25,
    hours: 1.5,
    image: "https://ext.same-assets.com/3140348022/2616406230.jpeg",
    host: "Tokyo Food Guide",
    isNew: false,
  },
  {
    id: "835745",
    title: "Cook Authentic Pasta with Italian Chef",
    rating: 5.0,
    reviews: 219,
    location: "Online",
    price: 39,
    hours: 2,
    image: "https://ext.same-assets.com/3140348022/554927045.jpeg",
    host: "Chef Mario",
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

export default function ExperiencesPage() {
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
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://ext.same-assets.com/3140348022/3231360687.jpeg"
                alt="All Experiences"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center">
                <div className="text-white max-w-xl px-8 md:px-16">
                  <h1 className="text-4xl md:text-5xl font-medium mb-4">Unforgettable activities hosted by locals</h1>
                  <p className="text-lg md:text-xl mb-6">
                    Find unique experiences and book activities hosted by local experts
                  </p>
                </div>
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
            {allExperiences.filter(exp => exp.isNew).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* Top-rated Experiences */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Top-rated experiences</h2>
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
            {allExperiences.filter(exp => !exp.isNew && exp.rating >= 4.9).map((experience) => (
              <ExperienceCard key={`rated-${experience.id}`} experience={experience} />
            ))}
          </div>
        </section>

        {/* Experience Types */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-medium">Experience types</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/s/experiences/online" className="relative aspect-[3/2] rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="https://ext.same-assets.com/3140348022/808373612.jpeg"
                alt="Online Experiences"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-medium mb-1">Online Experiences</h3>
                  <p className="text-sm">Activities you can do from home</p>
                </div>
              </div>
            </Link>
            <Link href="/s/experiences/indoor" className="relative aspect-[3/2] rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="https://ext.same-assets.com/3140348022/3950841709.jpeg"
                alt="In-person Experiences"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-medium mb-1">In-person Experiences</h3>
                  <p className="text-sm">Activities led by local hosts</p>
                </div>
              </div>
            </Link>
            <Link href="/s/experiences" className="relative aspect-[3/2] rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="https://ext.same-assets.com/3140348022/572157753.jpeg"
                alt="All Experiences"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-medium mb-1">All Experiences</h3>
                  <p className="text-sm">Browse the full collection</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Experiences */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-medium">All experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allExperiences.slice(0, 10).map((experience) => (
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
