import { Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Experience() {
  const workExperience = [
    {
      title: "Frontend Developer",
      company: "Artistry – AI-Powered Interior Design Platform",
      // period: "2021 - Present",
      description:
        "Developing a full-stack AI interior design platform that transforms real room photos into professional-ready visualizations, reducing manual design effort."    },
    // {
    //   title: "UI/UX Designer & Developer",
    //   company: "Creative Solutions",
    //   period: "2019 - 2021",
    //   description:
    //     "Designed and developed user interfaces for various clients. Created wireframes, prototypes, and implemented them using modern frontend technologies.",
    // },
    {
      title: "Web Developer",
      company: "Startup Genie",
      // period: "2017 - 2019",
      description:
        "Startup Genie is an AI-powered platform that helps entrepreneurs transform raw ideas into structured, investor-ready startup plans.",
    },
  ]

  const education = [
   
    {
      degree: "Bachelor's in Software Engineering",
      institution: "K.R Mangalam University",
      period: "2024 - 2028",
      description:
        "Focused on software development methodologies and web development. Participated in multiple hackathons.",
    },
    {
      degree: "Intermediate Education",
      institution: "R.S Memorial Public School",
      period: "2022-2023",
      
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
        <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        <p className="text-muted-foreground max-w-[700px]">My professional journey</p>
      </div>

      <Tabs defaultValue="work" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="work" className="space-y-6">
          <div className="relative border-l-2 border-primary/30 pl-6 ml-6 space-y-10">
            {workExperience.map((job, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[30px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                  <div className="h-3 w-3 rounded-full bg-background"></div>
                </div>
                <Card className="hover-lift transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        
                      </span>
                    </div>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="relative border-l-2 border-primary/30 pl-6 ml-6 space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[30px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                  <div className="h-3 w-3 rounded-full bg-background"></div>
                </div>
                <Card className="hover-lift transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
