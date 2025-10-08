import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/Button';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contactInfo = [
        {
        icon: <Mail className="h-5 w-5" />,
        label: "Email",
        value: "thayyab1130@gmail.com",
        href: "mailto:thayyab1130@gmail.com",
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: "Location",
            value: "chennai, Tamil Nadu, India",
            href: "#",
        },
        // {
        //   icon: <Phone className="h-5 w-5" />,
        //   label: "Phone",
        //   value: "+1 (555) 123-4567",
        //   href: "tel:+15551234567",
        // },
    ];

    

    const handelSubmit = async (e) => {
        e.preventDefault();
        const serviceId="service_asgf98q";
        const templateId="template_5ltiieq";
        const publicKey="Rd0ThW3oRfq6F11_d";


        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully:', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            toast.success('Email sent successfully');
        })
        .catch((error) => {
            toast.error('Error sending email');
            console.error('Error sending email:', error);
        });

    }

return (
    <section id='contact' className='py-24 relative'>  
        <div className='mx-auto px-6  container'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16 animate-fade-in'>
                    <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
                        Get In{" "}
                        <span className='text-gradient'> 
                            Touch
                        </span>
                    </h1>
                    <p className='text-muted-foreground'>
                        Have a project in mind? Let's work together to bring your ideas to life.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                        <Card
                            key={index}
                            className="glass-card border-border/50 hover-glow transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="p-6">
                            <a
                                href={info.href}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {info.icon}
                                </div>
                                <div>
                                <p className="text-sm text-muted-foreground">{info.label}</p>
                                <p className="font-medium">{info.value}</p>
                                </div>
                            </a>
                            </CardContent>
                        </Card>
                        ))}
                    </div>

                    <div className="glass-card p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                        <p className="text-muted-foreground leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities
                        to be part of your vision. Feel free to reach out through any of the channels
                        above or use the contact form.
                        </p>
                    </div>
                    </div>

                    <Card className="glass-card border-border/50">
                    <CardContent className="p-8">
                        <form className="space-y-6" onSubmit={(e)=>handelSubmit(e)}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                            Name
                            </label>
                            <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-background/50 border-border"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                            Email
                            </label>
                            <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="bg-background/50 border-border"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                            </label>
                            <Input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="What's this about?"
                            className="bg-background/50 border-border"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                            Message
                            </label>
                            <Textarea
                            id="message"
                            placeholder="Your message..."
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-background/50 border-border resize-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                            size="lg"
                        >
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        </form>
                    </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}
