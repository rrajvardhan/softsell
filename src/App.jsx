import { useEffect, useState } from "react"
import HeroSection from "./components/Hero"
import Navbar from "./components/Navbar"
import WhyChooseUs from "./components/WhyUs"
import TestimonialCard from "./components/Testimonials"
import HowItWorks from "./components/Guide"
import ContactForm from "./components/Contact"
import ChatWidget from "./components/Chat"

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === "light")

  useEffect(() => {
    const root = document.documentElement

    if (darkMode) {
      root.classList.add("light")
      localStorage.theme = "light"
    } else {
      root.classList.remove("light")
      localStorage.theme = "dark"
    }
  }, [darkMode])

  return (
    <>
      <Navbar mode={darkMode} setMode={setDarkMode} />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialCard />
      <ContactForm />
      <ChatWidget />
    </>
  )
}

export default App
