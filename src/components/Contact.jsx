import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = "Name is required"
    if (!formData.email.trim()) errs.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email"
    if (!formData.company.trim()) errs.company = "Company is required"
    if (!formData.license) errs.license = "Select a license type"
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      })
      setErrors({})
      setTimeout(() => setSubmitted(false), 2000)
    } else {
      setErrors(errs)
    }
  }

  return (
    <div className="bg-main-bg text-main-bg flex flex-col items-center min-h-screen">
      <div className="bg-main-bg p-8 rounded-xl shadow-xl w-full max-w-xl">
        <h2 className="text-4xl text-deep-gray font-semibold mb-6 text-center">
          Let’s Work Together
        </h2>

        {submitted && (
          <div className="mb-6 text-green-600 bg-green-100 p-4 rounded-lg text-center font-medium transition duration-300">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-deep-gray font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="text-deep-gray w-full p-4 rounded-lg border-2 border-deep-gray focus:ring-2 focus:ring-btn-bg focus:outline-none transition duration-300"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-btn-bg text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-deep-gray font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="text-deep-gray w-full p-4 rounded-lg border-2 border-deep-gray focus:ring-2 focus:ring-btn-bg focus:outline-none transition duration-300"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-btn-bg text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-deep-gray font-semibold mb-2">
              Company
            </label>
            <input
              type="text"
              className="text-deep-gray w-full p-4 rounded-lg border-2 border-deep-gray focus:ring-2 focus:ring-btn-bg focus:outline-none transition duration-300"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            {errors.company && (
              <p className="text-btn-bg text-sm mt-1">{errors.company}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-deep-gray font-semibold mb-2">
              License Type
            </label>
            <select
              className="text-deep-gray w-full p-4 rounded-lg border-2 border-deep-gray focus:ring-2 focus:ring-btn-bg focus:outline-none transition duration-300"
              value={formData.license}
              onChange={(e) =>
                setFormData({ ...formData, license: e.target.value })
              }
            >
              <option value="">Select license</option>
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
            {errors.license && (
              <p className="text-btn-bg text-sm mt-1">{errors.license}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-deep-gray font-semibold mb-2">
              Message (optional)
            </label>
            <textarea
              className="text-deep-gray w-full p-4 rounded-lg border-2 border-deep-gray focus:ring-2 focus:ring-btn-bg focus:outline-none transition duration-300"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <p className="text-btn-bg text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-btn-bg text-white py-3 rounded-full font-semibold hover:bg-btn-bg focus:outline-none transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
