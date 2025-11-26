"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        alert(data.error || "Something went wrong. Please try again or contact me directly via email.")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("Something went wrong. Please try again or contact me directly via email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        <p className="text-muted-foreground max-w-[700px]">Have a project in mind? Let's talk about it.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50 group">
            <CardContent className="p-6 flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">sankusharma09@gmail.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50 group">
            <CardContent className="p-6 flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-muted-foreground">+91 8630025639</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50 group">
            <CardContent className="p-6 flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">Gurugram ,Haryana(INDIA)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
