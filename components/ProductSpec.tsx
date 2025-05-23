"use client";
import React, { useEffect, useRef, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ColourfulText from "./ui/colourful-text";
import { cn, commonClasses } from "@/lib/styles/utils";

const ProductSpec: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonials = [
    {
      quote:
        "Peace of mind knowing phones are safely stored, yet easily accessible when needed",
      name: "Secure & Accessible",
      title: "",
    },
    {
      quote:
        "Durable, water-resistant neoprene construction — lightweight and comfortable",
      name: "Lightweight & Durable",
      title: "",
    },
    {
      quote:
        "Retractable pin for added security, preventing injuries while operating the case",
      name: "Safety First",
      title: "",
    },
    {
      quote: "Blocks distracting signals for truly focused learning",
      name: "Signal Blocking",
      title: "",
    },
    {
      quote: "Convenient name tag slot for easy identification",
      name: "Easy Identification",
      title: "",
    },
    {
      quote: "Fits most smartphones, including larger models up to 6.1 inches",
      name: "Widely Compatible",
      title: "",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(commonClasses.section, "relative min-h-screen")}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="ProdSpecImage.jpg"
          alt="Product"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full">
        <div className="grid grid-cols-1 md:grid-cols-20 min-h-screen">
          {/* Left side - Takes up 35% */}
          <div className="hidden md:block md:col-span-7 w-full h-full"></div>

          {/* Right side - Content takes up 65% */}
          <div className="md:col-span-13 flex flex-col justify-center min-h-screen py-8 md:py-16">
            {/* Content wrapper with proper spacing */}
            <div className="flex flex-col h-full justify-center gap-8 md:gap-12 px-4 md:px-8 lg:px-12">
              {/* Header Section */}
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    "transition-all duration-1000 ease-in-out",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h1
                    className={cn(
                      commonClasses.h1,
                      "text-white mb-0 leading-tight",
                      // Responsive text sizing
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                    )}
                  >
                    {/* Desktop layout - inline */}
                    <div>
                      <span>An Educator's ally, the </span>
                      <img
                        src="logoOrange.png"
                        alt="FikaCASE Logo"
                        className="inline h-[0.8em] sm:h-[1em] md:h-[1.2em] mx-1 sm:mx-2 md:mx-3 align-middle translate-y-[-2px] sm:translate-y-[-4px] md:translate-y-[-8px]"
                      />
                      <span>provides a simple, yet powerful solution</span>
                    </div>
                  </h1>
                </div>
              </div>

              {/* Cards Section */}
              <div className="flex-1 min-h-0">
                <div
                  className={cn(
                    "transition-all duration-1000 ease-in-out w-full h-full",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div
                    ref={containerRef}
                    className="h-full flex flex-col justify-center"
                  >
                    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                      <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
