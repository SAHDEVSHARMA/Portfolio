"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.png",
      text: "Sahdev is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. We'll definitely work with him again.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      image: "/placeholder.png",
      text: "Working with Sahdev was a pleasure. He understood our vision perfectly and created a website that exceeded our expectations. His communication throughout the project was excellent.",
    },
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
        <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        <p className="text-muted-foreground max-w-[700px]">What people say about my work</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card className="border border-border/50 shadow-lg bg-card/50 backdrop-blur-sm hover-lift transition-all duration-500 hover:border-primary/50">
          <CardContent className="p-8 md:p-12">
            <div className="absolute -top-6 left-8 text-primary">
              <Quote className="h-12 w-12 opacity-30" />
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <p className="text-lg italic relative z-10">"{testimonials[currentIndex].text}"</p>

              <div className="pt-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto mb-3">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.png"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/30">
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 hover:scale-150 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/30">
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
