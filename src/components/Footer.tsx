"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-airbnb-footer border-t border-gray-200 pt-8 pb-6">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm text-airbnb-dark hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/aircover" className="text-sm text-airbnb-dark hover:underline">
                  AirCover
                </Link>
              </li>
              <li>
                <Link href="/against-discrimination" className="text-sm text-airbnb-dark hover:underline">
                  Anti-discrimination
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-airbnb-dark hover:underline">
                  Disability support
                </Link>
              </li>
              <li>
                <Link href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19" className="text-sm text-airbnb-dark hover:underline">
                  Cancellation options
                </Link>
              </li>
              <li>
                <Link href="/neighbors" className="text-sm text-airbnb-dark hover:underline">
                  Report neighborhood concern
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/host/homes" className="text-sm text-airbnb-dark hover:underline">
                  Airbnb your home
                </Link>
              </li>
              <li>
                <Link href="/aircover-for-hosts" className="text-sm text-airbnb-dark hover:underline">
                  AirCover for Hosts
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-airbnb-dark hover:underline">
                  Hosting resources
                </Link>
              </li>
              <li>
                <Link href="/help/community" className="text-sm text-airbnb-dark hover:underline">
                  Community forum
                </Link>
              </li>
              <li>
                <Link href="/help/responsible-hosting" className="text-sm text-airbnb-dark hover:underline">
                  Hosting responsibly
                </Link>
              </li>
              <li>
                <Link href="/airbnb-friendly" className="text-sm text-airbnb-dark hover:underline">
                  Airbnb-friendly apartments
                </Link>
              </li>
              <li>
                <Link href="/ambassadors/joinaclass" className="text-sm text-airbnb-dark hover:underline">
                  Join a free Hosting class
                </Link>
              </li>
              <li>
                <Link href="/host/co-hosts" className="text-sm text-airbnb-dark hover:underline">
                  Find a cohost
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/press/news" className="text-sm text-airbnb-dark hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/release" className="text-sm text-airbnb-dark hover:underline">
                  New features
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-airbnb-dark hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="https://investors.airbnb.com" className="text-sm text-airbnb-dark hover:underline">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/giftcards" className="text-sm text-airbnb-dark hover:underline">
                  Gift cards
                </Link>
              </li>
              <li>
                <Link href="https://www.airbnb.org" className="text-sm text-airbnb-dark hover:underline">
                  Airbnb.org emergency stays
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-airbnb-dark">© 2025 Airbnb, Inc.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-sm text-airbnb-dark hover:underline">
                Terms
              </Link>
              <span className="text-airbnb-dark">·</span>
              <Link href="/sitemaps/v2" className="text-sm text-airbnb-dark hover:underline">
                Sitemap
              </Link>
              <span className="text-airbnb-dark">·</span>
              <Link href="/terms/privacy_policy" className="text-sm text-airbnb-dark hover:underline">
                Privacy
              </Link>
              <span className="text-airbnb-dark">·</span>
              <Link href="/help/sale-share-opt-out" className="text-sm text-airbnb-dark hover:underline flex items-center gap-1">
                Your Privacy Choices
                <svg width="26" height="12" fill="none" className="ml-1">
                  <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="white"></rect>
                  <path d="M14 1H12C11.4477 1 11 1.44772 11 2V10C11 10.5523 11.4477 11 12 11H14C14.5523 11 15 10.5523 15 10V2C15 1.44772 14.5523 1 14 1Z" fill="#007AFF"></path>
                  <path d="M20 1H18C17.4477 1 17 1.44772 17 2V10C17 10.5523 17.4477 11 18 11H20C20.5523 11 21 10.5523 21 10V2C21 1.44772 20.5523 1 20 1Z" fill="#007AFF"></path>
                  <path d="M8 1H6C5.44772 1 5 1.44772 5 2V10C5 10.5523 5.44772 11 6 11H8C8.55228 11 9 10.5523 9 10V2C9 1.44772 8.55228 1 8 1Z" fill="#007AFF"></path>
                  <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#737373"></rect>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/airbnb" className="text-airbnb-dark hover:text-airbnb-black">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com/airbnb" className="text-airbnb-dark hover:text-airbnb-black">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com/airbnb" className="text-airbnb-dark hover:text-airbnb-black">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
