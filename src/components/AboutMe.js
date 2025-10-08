import { Code2, Palette, Rocket } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from './ui/card';

export default function AboutMe () {

    const glassCardItems = [
        {
            title: "Experience",
            content: "9 Months",
        },
        {
            title: "Projects",
            content: "6+",
        },
        // {
        //     title: "Main Stack",
        //     content: "Spring Boot, React, MySQL",
        // },
    ];

    const features = [
        {
        icon: <Code2 className="h-8 w-8 text-primary" />,
        title: "Clean Code",
        description: "Writing maintainable, scalable code with best practices and modern standards.",
        },
        {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: "Design Focus",
        description: "Creating beautiful, intuitive interfaces that users love to interact with.",
        },
        {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Performance",
        description: "Optimizing for speed and efficiency to deliver exceptional user experiences.",
        },
    ];
  return (
    <section id='about' className='py-24 relative'>
        <div className='container mx-auto px-6 mb-20'>
            <div className='text-center mb-16 animate-fade-in'>
                <h1 className='text-4xl md:text-6xl font-bold leading-tight text-center'>
                    About{" "}
                    <span className='text-gradient'>Me</span>
                </h1>
                <p className='text-xl  text-muted-foreground max-w-2xl mx-auto'>I am a full stack developer with a passion for creating beautiful and functional web experiences.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
                <div className='space-y-4 animate-fade-in'>
                    <p className='text-xl text-muted-foreground leading-relaxed'>
                        With over 5 years of experience in web development, I specialize in building modern,
                        responsive applications that solve real-world problems. My journey in tech started with
                        a curiosity for how things work, which evolved into a deep passion for creating digital experiences.
                    </p>
                    <p className='text-xl text-muted-foreground leading-relaxed'>
                        I believe in continuous learning and staying updated with the latest technologies. When I'm not coding, you'll find me exploring new design trends, contributing to open-source, or sharing knowledge with the developer community
                    </p>
                </div>
                <div className='relative'>
                    <div className='glass-card p-8 rounded-2xl hover-glow'>
                        <div className='space-y-4 text-lg'>
                            {
                                glassCardItems.map((item,index)=>(
                                    <div className='flex justify-between' key={index}>
                                        <p className='text-muted-foreground'>{item.title}</p>
                                        <p className='font-bold text-primary'>{item.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {features.map((feature, index) => (
                <Card
                    key={index}
                    className="glass-card border-border/50 hover-glow transition-all duration-300"
                >
                    <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
    </section>
  )
}
 