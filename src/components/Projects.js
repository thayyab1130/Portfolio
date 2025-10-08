import React from 'react'
import { Button } from './ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge';

export default function Projects() {
    const projects = [
    {
      title: "Genimagin",
      description: "AI-powered image generator with advanced filters and customization options.",
      image: "/images/Genimagin.jpg",
      tech: ["React", "Node.js","Express.js", "MySQL"],
      imageClassName:"px-5 bg-white",
      github: null,
      live: null,
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization and productivity insights using machine learning.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tech: ["TypeScript", "Python", "PostgreSQL", "OpenAI"],
      github: null,
      live: null,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with real-time metrics and scheduling features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tech: ["Vue.js", "Firebase", "Chart.js", "Tailwind"],
      github: null,
      live: null,
    }
  ];
  return (
    <section id='projects' className='py-24 relative'>
        <div className='mx-auto px-6 container'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16 animate-fade-in'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Featured
                        <span className='text-gradient'> Projects</span>
                    </h1>
                    <p className='text-xl  text-muted-foreground max-w-2xl mx-auto'>
                        Take a look at some of my featured projects below.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in'>
                    {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="glass-card border-border/50 overflow-hidden group hover-glow transition-all duration-500 hover:-translate-y-1"
                    >
                        <CardHeader className="p-0">
                        <div className="relative overflow-hidden aspect-video">
                            <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project?.imageClassName}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                            <Badge
                                key={i}
                                variant="secondary"
                                className="bg-secondary/50 hover:bg-secondary"
                            >
                                {tech}
                            </Badge>
                            ))}
                        </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 gap-2">
                        {project.github && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 border-border hover:bg-secondary"
                                asChild
                            >
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                                </a>
                            </Button>
                        )}
                        {project.live && (
                            <Button
                                size="sm"
                                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                                asChild
                            >
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live
                                </a>
                            </Button>
                        )}
                        
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
