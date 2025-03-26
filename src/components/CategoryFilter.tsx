"use client"

import { useState } from "react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Sliders } from "lucide-react"

interface Category {
  id: string
  name: string
  icon: string
}

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [price, setPrice] = useState([0, 500])
  const [timeOfDay, setTimeOfDay] = useState<string | null>(null)

  const handleCategoryClick = (id: string) => {
    if (activeCategory === id) {
      setActiveCategory(null)
    } else {
      setActiveCategory(id)
    }
  }

  return (
    <div className="py-4">
      <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center gap-1 pb-2 border-b-2 transition-colors ${
                activeCategory === category.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-800"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-xs whitespace-nowrap">{category.name}</span>
            </button>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-lg">
              <Sliders size={16} />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="py-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Price range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[0, 500]}
                    max={1000}
                    step={10}
                    value={price}
                    onValueChange={setPrice}
                  />
                  <div className="flex items-center justify-between">
                    <div className="border rounded-lg p-2 w-[45%]">
                      <label className="text-xs text-gray-500">Min price</label>
                      <p className="font-medium">${price[0]}</p>
                    </div>
                    <span className="border-t border-gray-300 w-[10%]"></span>
                    <div className="border rounded-lg p-2 w-[45%]">
                      <label className="text-xs text-gray-500">Max price</label>
                      <p className="font-medium">${price[1]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Time of day</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Morning", "Afternoon", "Evening", "Night"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeOfDay(timeOfDay === time ? null : time)}
                      className={`border rounded-lg py-3 px-4 ${
                        timeOfDay === time
                          ? "border-black bg-gray-50"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      <span className="text-sm">{time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="lg" className="w-[48%]" onClick={() => {
                    setPrice([0, 500])
                    setTimeOfDay(null)
                  }}>
                    Clear all
                  </Button>
                  <Button size="lg" className="w-[48%] bg-black text-white hover:bg-gray-800">
                    Show results
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
