import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ name, description, techStack }) {
  return (
    // <Card className="w-full max-w-md mb-4">
    <Card className="w-80 h-60 mb-4 md:mx-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2">
          <pre className="text-sm font-semibold text-foreground">Tech Stack:</pre>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {/* <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">PostgreSQL</Badge> */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}