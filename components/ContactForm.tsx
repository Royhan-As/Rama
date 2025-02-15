"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState)
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <Textarea
            id="message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}

