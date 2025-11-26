import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        <p className="text-muted-foreground max-w-[700px]">Get to know me better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
            <Image src="/hero.png" alt="Profile" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a passionate MERN Stack Developer with expertise in building full-stack web applications. I
              specialize in MongoDB,React, Node.js, and Next.js, focusing on creating scalable, responsive, and user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-4xl text-primary transition-transform duration-300 hover:scale-110">1</h4>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-4xl text-primary transition-transform duration-300 hover:scale-110">4</h4>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-4xl text-primary transition-transform duration-300 hover:scale-110">3</h4>
                <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-4xl text-primary transition-transform duration-300 hover:scale-110">8+</h4>
                <p className="text-sm text-muted-foreground mt-2">Techonology</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
