import React, { use, useEffect } from 'react'
import { Button } from './ui/Button'
import { ArrowRight , Linkedin} from 'lucide-react'

export default function Hero() {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const myName = process.env.REACT_APP_MY_NAME;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in ">
          <div className="space-y-4">
            <p className="text-primary text-sm font-mono uppercase tracking-wider">welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">
                {myName}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I craft beautiful, functional web experiences with a passion for clean code and elegant design.
            Specialized in React, TypeScript, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-x-6 justify-center items-center pt-8">
              <a className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2 rounded-full" href={linkedinUrl}>
                <Linkedin size={24}/>
              </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
