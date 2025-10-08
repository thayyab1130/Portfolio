import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { Star } from 'lucide-react';

export default function Skills() {
     const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", stared: true },
      { name: "JavaScript", stared: true },
      { name: "Tailwind CSS", stared: false },
      { name: "HTML5", stared: false },
      { name: "CSS3", stared: false },
      { name: "Redux", stared: false },
    //   { name: "Zustand", stared: false },
      //   { name: "TypeScript", stared: false },
      //   { name: "Next.js", stared: false },
      //   { name: "Vue.js", stared: false },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", stared: true},
      { name: "Spring Boot", stared: true },
      { name: "MySQL", stared: true },
      { name: "Node.js", stared: false },
      { name: "Express", stared: false },
      { name: "Prisma", stared: false },
      { name: "REST APIs", stared: false },
      
      //   { name: "Python", stared: false },
    //   { name: "Django", stared: false },
    //   { name: "PostgreSQL", stared: false },
    //   { name: "MongoDB", stared: false },
    //   { name: "GraphQL", stared: false },
    //   { name: "Supabase", stared: false },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", stared: true },
      { name: "Postman", stared: true },
      { name: "VS Code", stared: false },
      { name: "AWS", stared: false },
      { name: "Vercel", stared: false },
      { name: "Figma", stared: false },
      { name: "Agile", stared: false },
      //   { name: "Jest", stared: false },
      //   { name: "CI/CD", stared: false },
      //   { name: "Docker", stared: false },
    ],
  },
];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My technical toolkit for building modern, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover-glow transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="stared"
                        className={cn(
                            "cursor-default text-sm px-3 py-1 transition-colors hover:bg-primary hover:text-primary-foreground  bg-secondary font-bold",
                            skill.stared ?"border-2 border-orange-600 text-gradient text-orange-600":
                            "bg-secondary ",
                        )}
                        >
                        {
                            skill.stared && (
                                <>
                                <Star size={14} className=' fill-current '/>
                                &nbsp;
                                </>
                            )
                        }
                        {skill.name}
                        </Badge>

                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
