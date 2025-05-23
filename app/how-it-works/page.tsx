import Footer from '@/components/Footer'
import { HowItWorksComponent } from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <HowItWorksComponent/>
        <Footer/>
        </div>
  )
}

export default HowItWorks