import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.jpg"
import P3 from "../assets/p3.jpg"

const testimonials = [
  {
    quote:
      "SoftSell helped us recover thousands in unused licenses. Their platform is a game-changer for IT budgeting.",
    name: "Mike Swift",
    role: "CIO @MLH Corp",
    avatar: P1,
  },
  {
    quote:
      "We offloaded our legacy software effortlessly and reinvested the savings into modern tools.",
    name: "Jane Doe",
    role: "Operations Lead @OpenSource Inc.",
    avatar: P2,
  },
  {
    quote:
      "SoftSell turned our shelfware into profit. Clean UI, fast onboarding, and solid support—highly recommended.",
    name: "Alex Kim",
    role: "VP Finance @TechHub",
    avatar: P3,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setAutoplay(false) // Pause autoplay when manually navigating
  }

  const handleSwipe = (direction) => {
    setAutoplay(false)
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
      )
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  return (
    <div className="bg-main-bg rounded-xl p-4 md:p-6 text-center w-full max-w-screen-2xl mx-auto my-4">
      <div className="px-2 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-deep-gray leading-relaxed mb-4">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="mt-2 md:mt-4 flex flex-col items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mb-1"
              />
              <span className="text-sm sm:text-base md:text-lg text-deep-gray">
                {testimonials[currentIndex].name}{" "}
                <span className="hidden sm:inline">
                  {testimonials[currentIndex].role}
                </span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={() => handleSwipe("left")}
          className="text-deep-gray opacity-70 hover:opacity-100 transition-opacity p-2"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                currentIndex === idx ? "bg-gray-300" : "bg-gray-700"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => handleSwipe("right")}
          className="text-deep-gray opacity-70 hover:opacity-100 transition-opacity p-2"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
