import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-main-bg mt-6 px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto z-10">
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-deep-gray mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resell Software <br className="hidden sm:inline" />
          Regain Value <br className="hidden sm:inline" />
          <span className="text-btn-bg">Effortlessly</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-medium text-deep-gray mb-8 px-2 sm:px-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          With SoftSell, your dormant software licenses don’t have to sit idle.
          Turn them into revenue — fast and easy.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#how-it-works"
          className="inline-block bg-btn-bg text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.95, scale: 0.95 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  )
}
