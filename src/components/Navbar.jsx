import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar({ mode, setMode }) {
  return (
    <header className="w-full bg-main-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-gray">
          SoftSell
        </div>

        {/* Toggle Button with Animation */}
        <button
          onClick={() => setMode(!mode)}
          className="text-deep-gray transition hover:opacity-90"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <SunIcon className="h-8 w-8 sm:h-10 sm:w-10" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <MoonIcon className="h-8 w-8 sm:h-10 sm:w-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  )
}
