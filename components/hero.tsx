"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-5"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary via-red-50 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Sahdev Sharma</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Mern Stack Developer</p>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
          I'm obsessed with Coding with a passion for building beautiful and functional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Button onClick={scrollToAbout} className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              onClick={() => window.open('/ss_resume.pdf', '_blank')}
            >
              Download CV 
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="rounded-full h-10 w-10">
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </div>
  )
}
