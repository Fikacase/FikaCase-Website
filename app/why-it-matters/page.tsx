import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhyItMattersComponent from '@/components/WhyItMatters';
import React from 'react'

const WhyItMatters = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <WhyItMattersComponent />
      <Footer />
    </div>
  );
}

export default WhyItMatters