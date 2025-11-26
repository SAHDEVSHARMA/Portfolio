import { Progress } from "@/components/ui/progress"

type Skill = {
  name: string
  percentage: number
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "HTML5", percentage: 70 },
    { name: "CSS3", percentage: 50 },
    { name: "JavaScript", percentage: 60 },
    { name: "TypeScript", percentage: 50 },
    { name: "React", percentage: 50 },
    { name: "Next.js", percentage: 40 },
    { name: "Tailwind CSS", percentage: 55 },
    { name: "Node.js", percentage: 55 },
    { name: "MongoDB", percentage: 50 },
    { name: "Firebase", percentage: 35 },
    { name: "Git", percentage: 80 },
    { name: "Java", percentage: 60 },
    { name: "Python", percentage: 80 },
    { name: "C++", percentage: 60 },
  ]

  // Function to chunk the skills array into 3 columns
  const chunkArray = (array: Skill[], columns: number) => {
    const size = Math.ceil(array.length / columns)
    return Array.from({ length: columns }, (_, i) => array.slice(i * size, i * size + size))
  }

  const skillColumns = chunkArray(skills, 3)

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
        <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        <p className="text-muted-foreground max-w-[700px]">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillColumns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((skill, index) => (
              <div key={index} className="space-y-2 group">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium transition-colors duration-300 group-hover:text-primary">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2 transition-all duration-300 group-hover:h-3" indicatorClassName="bg-primary transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
