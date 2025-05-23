import React from "react";
import PurposeSection from "@/components/Purpose";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutUs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/aboutUs-bg-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-center h-screen">
          <div className="max-w-3xl">
            <div className="mb-5 font-bold text-white tracking-wide">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-2" />
              <span className="text-2xl block">/ˈfēkə/</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-tight tracking-normal max-w-3xl text-left ">
              <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mr-2">
                A Swedish practice
              </span>
              that creates an environment of
              <span className="mx-2">mindful presence,</span>
              <span className="relative inline-block mx-2">
                <span className="relative z-10 after:absolute after:bottom-1 after:left-0 after:h-3 after:w-full  after:-z-10">
                  focused attention,
                </span>
              </span>
              and genuine connection in shared spaces
            </h2>
          </div>
        </div>
      </div>
      <PurposeSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
