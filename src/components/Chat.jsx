import React, { useState, useEffect } from "react"
import {
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const mockResponses = {
  "How do I sell my license?":
    "To sell your license, you need to contact our support team directly via email or phone. We can guide you through the process.",
  "What is your return policy?":
    "We offer a 30-day return policy for most items. Please refer to our Terms and Conditions for detailed guidelines.",
  "How can I upgrade my account?":
    "To upgrade your account, please visit the Account Settings page and choose the 'Upgrade' option. You can select from several plans.",
  "What are your business hours?":
    "Our business hours are from 9 AM to 6 PM, Monday to Friday.",
}

const validQuestions = Object.keys(mockResponses)

const ChatWidget = () => {
  const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMessages([
      { sender: "ai", text: "Hi! How can I assist you today?", id: 0 },
      { sender: "ai", text: "Feel free to ask me anything.", id: 1 },
    ])
  }, [])

  const appendMessage = (sender, text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender, text, id: prevMessages.length },
    ])
  }

  const handleSendMessage = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const message = userInput.trim()
      if (message) {
        appendMessage("user", message)
        setUserInput("")

        setTimeout(() => {
          const response =
            mockResponses[message] ||
            `I'm sorry, I didn't understand that. Please ask a valid question. Here are some examples of valid questions: \n\n- ${validQuestions.join(
              "\n- ",
            )}`
          appendMessage("ai", response)
        }, 500)
      }
    }
  }

  const handleToggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.button
        className="btn fixed bottom-4 right-4 z-50 p-3 bg-btn-bg text-white rounded-full"
        onClick={handleToggleChat}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </motion.button>

      {isOpen && (
        <motion.div
          className="chat-widget fixed bottom-20 right-4 w-80 h-96 bg-main-bg shadow-lg z-10 rounded-xl p-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="chat-header flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Customer Support</h3>
          </div>

          <div className="chat-box overflow-y-auto h-60 mb-4 border border-gray-200 p-2 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === "user" ? "text-right" : "text-left"
                }
              >
                <p
                  className={
                    message.sender === "user"
                      ? "bg-btn-bg text-white p-2 rounded-lg"
                      : "bg-main-bg p-2 rounded-lg"
                  }
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="chat-input flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleSendMessage}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Ask a question..."
            />
            <motion.button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-btn-bg text-white rounded-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default ChatWidget
