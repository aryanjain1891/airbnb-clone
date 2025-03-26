import Image from "next/image"
import Link from "next/link"
import ExperienceCard from "@/components/ExperienceCard"
import CategoryFilter from "@/components/CategoryFilter"

// Mock data for online experiences
const onlineExperiences = [
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
    title: "Virtual Wildlife Safari from South Africa",
    rating: 4.96,
    reviews: 467,
    location: "Online",
    price: 20,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/61988002.jpeg",
    host: "Safari Guides",
    isNew: false,
  },
  {
    id: "103125",
    title: "Learn Authentic Spanish with a Native",
    rating: 4.9,
    reviews: 189,
    location: "Online",
    price: 15,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/4051882526.jpeg",
    host: "Maria Garcia",
    isNew: false,
  },
  {
    id: "519980",
    title: "Virtual Cocktail Mixology Class",
    rating: 4.93,
    reviews: 215,
    location: "Online",
    price: 35,
    hours: 1.5,
    image: "https://ext.same-assets.com/3140348022/1483408660.jpeg",
    host: "Master Mixologist",
    isNew: false,
  },
  {
    id: "889234",
    title: "Virtual Magic Show and Lesson",
    rating: 4.97,
    reviews: 312,
    location: "Online",
    price: 25,
    hours: 1,
    image: "https://ext.same-assets.com/3140348022/3923490053.jpeg",
    host: "The Amazing Magician",
    isNew: false,
  },
]

// Mock categories for filter
const categories = [
  { id: "1", name: "Arts & Writing", icon: "🎨" },
  { id: "2", name: "Cooking", icon: "🍳" },
  { id: "3", name: "Dance", icon: "💃" },
  { id: "4", name: "Drinks", icon: "🍹" },
  { id: "5", name: "Entertainment", icon: "🎭" },
  { id: "6", name: "Fitness", icon: "🏋️" },
  { id: "7", name: "History & Culture", icon: "🏛️" },
  { id: "8", name: "Magic", icon: "🎩" },
  { id: "9", name: "Music", icon: "🎵" },
  { id: "10", name: "Social Impact", icon: "✨" },
  { id: "11", name: "Wellness", icon: "🧘" },
  { id: "12", name: "Olympic & Paralympic", icon: "🏅" },
]

export default function OnlineExperiences() {
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
              src="https://ext.same-assets.com/3140348022/808373612.jpeg"
              alt="Online Experiences"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-16 w-full md:w-1/2">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-medium mb-4">Online Experiences</h1>
                <p className="text-lg md:text-xl mb-6">
                  Interactive activities led by expert hosts, all without leaving home
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

        {/* Top-rated Online Experiences */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Top-rated online experiences</h2>
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
            {onlineExperiences.slice(0, 5).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* All Online Experiences */}
        <section id="all-experiences">
          <div className="mb-6">
            <h2 className="text-2xl font-medium">All online experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {onlineExperiences.map((experience) => (
              <ExperienceCard key={`all-${experience.id}`} experience={experience} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Load more
            </button>
          </div>
        </section>

        {/* Host an Online Experience Section */}
        <section className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src="https://ext.same-assets.com/3140348022/2975331289.jpeg"
              alt="Host an Online Experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-16 w-full md:w-1/2">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Host an Online Experience</h2>
                <p className="text-lg mb-6">
                  Share your expertise with a global audience and earn income on your own schedule.
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
