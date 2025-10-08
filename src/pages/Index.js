import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}
