import React, { useEffect } from "react"
import {
  DocumentArrowUpIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid"
import AOS from "aos"
import "aos/dist/aos.css"

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const steps = [
    {
      title: "Upload Your License",
      description:
        "Easily and securely upload your unused software license for review.",
      icon: DocumentArrowUpIcon,
      delay: 100,
    },
    {
      title: "Get a Valuation",
      description:
        "Our system provides a fast, fair valuation based on current market data.",
      icon: MagnifyingGlassIcon,
      delay: 200,
    },
    {
      title: "Receive Payment",
      description:
        "Once you accept the offer, receive secure payment directly to your account.",
      icon: BanknotesIcon,
      delay: 300,
    },
  ]

  return (
    <section
      className="bg-gradient-to-b from-main-bg to-main-bg/95 py-20 px-4 sm:px-6 lg:px-8 "
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with accent line */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block">
            <span className="inline-block h-1 w-12 bg-deep-gray/20 rounded mb-3"></span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-gray relative">
              How It Works
              <span className="absolute -bottom-2 left-0 right-0 h-1 w-full bg-gradient-to-r from-transparent via-deep-gray/30 to-transparent transform scale-x-50"></span>
            </h2>
          </div>
          <p className="text-deep-gray/80 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            Just three simple steps to turn unused software into profit.
          </p>
        </div>

        {/* Steps with connecting line for desktop */}
        <div className="relative">
          {/* Connecting line (visible on lg screens and up) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-deep-gray/10 via-deep-gray/30 to-deep-gray/10 transform -translate-y-1/2 z-0"></div>

          {/* Steps */}
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-3 relative z-10">
            {steps.map(({ title, description, icon: Icon, delay }, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={delay}
                className="group relative"
              >
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-main-bg bg-deep-gray/90 w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="bg-main-bg border border-deep-gray/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Icon header */}
                  <div className="bg-gradient-to-r from-deep-gray/5 to-deep-gray/10 p-6 flex justify-center">
                    <div className="bg-main-bg p-4 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-deep-gray/90" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-deep-gray mb-3">
                      {title}
                    </h3>
                    <p className="text-sm text-deep-gray/80">{description}</p>

                    {/* Decorative element at bottom */}
                    <div className="mt-auto pt-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-deep-gray/20 to-deep-gray/40 rounded-full mx-auto transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="mt-4 text-sm text-deep-gray/70">
            No commitment required. Start turning your unused licenses into
            cash.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
