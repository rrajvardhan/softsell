import React, { useEffect } from "react"
import {
  LockClosedIcon,
  ChartBarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid"
import AOS from "aos"
import "aos/dist/aos.css"

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const reasons = [
    {
      title: "Secure and Easy Document Upload",
      description:
        "We prioritize your security with encrypted document uploads, ensuring your data is always protected.",
      icon: LockClosedIcon,
      delay: 100,
    },
    {
      title: "Quick and Accurate Valuation",
      description:
        "Our team of experts delivers fast and reliable valuations, ensuring you're always informed.",
      icon: ChartBarIcon,
      delay: 200,
    },
    {
      title: "Fast and Secure Payments",
      description:
        "Get paid quickly and securely once your valuation is confirmed, with no hassles or delays.",
      icon: CreditCardIcon,
      delay: 300,
    },
  ]

  return (
    <section className="bg-main-bg py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-gray mb-4">
        Why Choose Us?
      </h2>
      <p className="text-deep-gray text-base sm:text-lg mb-12 max-w-2xl mx-auto">
        Here are a few reasons why our service stands out.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {reasons.map(({ title, description, icon: Icon, delay }, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={delay}
            className="bg-main-bg p-6 rounded-3xl transition-all duration-300 hover:scale-105 flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <Icon className="h-8 w-8 text-deep-gray" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-deep-gray mb-2">{title}</h3>
              <p className="text-sm text-deep-gray">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
