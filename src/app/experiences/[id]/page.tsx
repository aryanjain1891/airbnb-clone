import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for experiences
const experiencesData = [
  {
    id: "109978",
    title: "Learn to Fly an airplane Above LA",
    rating: 4.96,
    reviews: 1364,
    location: "Los Angeles, California",
    price: 130,
    hours: 1,
    hostName: "Mohamad Hani",
    hostImage: "https://ext.same-assets.com/3140348022/4069169859.jpeg",
    hostSince: "2018",
    images: [
      "https://ext.same-assets.com/3140348022/3231360687.jpeg",
      "https://ext.same-assets.com/3140348022/1578630544.jpeg",
    ],
    description: "Prior to boarding, pose like a seasoned pro for a photo shoot with the airplane. Once you're on board, the pilot will give you an overview of the instruments and controls. After getting clearance from the tower, you'll taxi to the runway for takeoff. Once at cruising altitude, you'll learn basic flying skills in the training area over the Simi Valley. Then, grab hold of the controls and feel free to move about the skies, exploring LA by air. Finally, in preparation for landing, you'll come back down to earth at Van Nuys Airport.",
    whatToBring: [
      "Sunglasses",
      "Camera",
      "Comfortable clothes",
    ],
    includedItems: [
      "Pilot instruction",
      "Flight time",
      "Photos",
    ],
    meetingLocation: "Van Nuys Airport, Los Angeles, CA",
    groupSize: 2,
    languages: ["English"],
    cancellationPolicy: "Free cancellation up to 24 hours before the experience start time for a full refund, or within 24 hours of booking as long as the booking is made more than 48 hours before the start time.",
  },
  {
    id: "400520",
    title: "Lets Goat Hike",
    rating: 4.99,
    reviews: 1403,
    location: "Los Angeles, California",
    price: 95,
    hours: 2.5,
    hostName: "Yogigoats",
    hostImage: "https://ext.same-assets.com/3140348022/2179105106.jpeg",
    hostSince: "2019",
    images: [
      "https://ext.same-assets.com/3140348022/709076381.jpeg",
      "https://ext.same-assets.com/3140348022/106735890.jpeg",
    ],
    description: "Experience the ultimate animal therapy! Join us for a memorable hike with our friendly goats in the beautiful hills of Los Angeles. Our goats are friendly, socialized, and love human interaction. We'll guide you through a moderate hike while our goats accompany us, sometimes leading the way and sometimes stopping to munch on vegetation. Throughout the hike, you'll learn about goat behavior, their role in environmental sustainability, and have plenty of opportunities for photos and goat cuddles.",
    whatToBring: [
      "Hiking shoes or boots",
      "Water bottle",
      "Sun protection (hat, sunscreen)",
      "Camera",
    ],
    includedItems: [
      "Guided hike",
      "Goat interaction",
      "Snacks and water",
      "Photos with goats",
    ],
    meetingLocation: "Griffith Park, Los Angeles, CA",
    groupSize: 8,
    languages: ["English", "Spanish"],
    cancellationPolicy: "Free cancellation up to 48 hours before the experience start time for a full refund, or within 24 hours of booking as long as the booking is made more than 72 hours before the start time.",
  },
]

export default function ExperienceDetail({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const experience = experiencesData.find(exp => exp.id === id)

  if (!experience) {
    return (
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium mb-4">Experience not found</h1>
          <p className="text-gray-500 mb-6">The experience you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="text-airbnb-red font-medium hover:underline">
            Go back to experiences
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Experience Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-3">{experience.title}</h1>
        <div className="flex items-center flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-current text-black" />
            <span className="font-medium">{experience.rating}</span>
            <span className="text-gray-500">({experience.reviews} reviews)</span>
          </div>
          <span className="text-gray-500 mx-1">·</span>
          <div className="text-gray-500">{experience.location}</div>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden">
        {experience.images.map((image, index) => (
          <div key={index} className={`relative ${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
            <Image
              src={image}
              alt={`${experience.title} - image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Experience Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Host Info */}
          <div className="flex items-start justify-between border-b pb-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">Experience hosted by {experience.hostName}</h2>
              <div className="flex items-center gap-2 text-gray-500">
                <span>{experience.hours} {experience.hours === 1 ? 'hour' : 'hours'}</span>
                <span>·</span>
                <span>Hosted in {experience.languages.join(', ')}</span>
              </div>
            </div>
            <Image
              src={experience.hostImage}
              alt={experience.hostName}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
          </div>

          {/* What You'll Do */}
          <div className="border-b pb-8">
            <h2 className="text-xl font-medium mb-4">What you'll do</h2>
            <p className="text-gray-600 whitespace-pre-line">{experience.description}</p>
          </div>

          {/* What's Included */}
          <div className="border-b pb-8">
            <h2 className="text-xl font-medium mb-4">What's included</h2>
            <ul className="space-y-3">
              {experience.includedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current">
                      <path d="m16 31c-8.28 0-15-6.72-15-15 0-8.28 6.72-15 15-15 8.28 0 15 6.72 15 15 0 8.28-6.72 15-15 15m0-2c7.176 0 13-5.824 13-13 0-7.176-5.824-13-13-13-7.176 0-13 5.824-13 13 0 7.176 5.824 13 13 13m-1-13.438-2.438-2.438-1.562 1.562 4 4 8-8-1.562-1.562z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Bring */}
          <div>
            <h2 className="text-xl font-medium mb-4">What to bring</h2>
            <ul className="space-y-3">
              {experience.whatToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gray-700"></div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 border rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-semibold">${experience.price}</div>
              <div className="text-sm text-gray-500">/ person</div>
            </div>

            <div className="border rounded-lg mb-4">
              <div className="p-4 border-b">
                <h3 className="text-sm font-medium mb-1">Date</h3>
                <div className="text-gray-600">Add your date</div>
              </div>
              <div className="p-4 border-b">
                <h3 className="text-sm font-medium mb-1">Guests</h3>
                <div className="text-gray-600">1 guest</div>
              </div>
            </div>

            <Button className="w-full bg-airbnb-red hover:bg-[#e31c5f] text-white font-medium py-3 rounded-lg mb-4">
              Check availability
            </Button>

            <div className="text-center text-sm text-gray-500 mb-4">
              You won't be charged yet
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-700">${experience.price} × 1 person</div>
              <div className="text-gray-700">${experience.price}</div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-700">Service fee</div>
              <div className="text-gray-700">${Math.round(experience.price * 0.12)}</div>
            </div>

            <div className="border-t mt-4 pt-4">
              <div className="flex items-center justify-between font-semibold">
                <div>Total</div>
                <div>${experience.price + Math.round(experience.price * 0.12)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="border-t mt-12 pt-8">
        <h2 className="text-xl font-medium mb-4">Cancellation policy</h2>
        <p className="text-gray-600">{experience.cancellationPolicy}</p>
      </div>

      {/* Meeting Location */}
      <div className="border-t mt-12 pt-8">
        <h2 className="text-xl font-medium mb-4">Meeting location</h2>
        <p className="text-gray-600 mb-4">{experience.meetingLocation}</p>
        <div className="aspect-[5/2] bg-gray-200 rounded-xl relative overflow-hidden">
          <Image
            src="https://maps.googleapis.com/maps/api/staticmap?center=Los+Angeles,CA&zoom=11&size=800x400&markers=color:red%7CLos+Angeles,CA"
            alt="Meeting location map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
