"use client";
import React, { useEffect, useRef, useState } from "react";
import Mountain from "@/components/Mountain";
import { motion } from "framer-motion";
import { cn, commonClasses } from "@/lib/styles/utils";

const Vision: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      if (containerRef.current && !isMobile) {
        setScrollY(window.scrollY - (containerRef.current.offsetTop || 0));
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize();

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (textContentRef.current) {
      observer.observe(textContentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (textContentRef.current) {
        observer.unobserve(textContentRef.current);
      }
    };
  }, [isMobile]);

  const calculateLeftTransform = () => {
    if (isMobile) return {}; 

    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = -30 * scrollProgress;
    const rotateY = 15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  const calculateRightTransform = () => {
    if (isMobile) return {}; 

    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    const translateX = 30 * scrollProgress;
    const rotateY = -15 * scrollProgress;
    return { transform: `translateX(${translateX}%) rotateY(${rotateY}deg)` };
  };

  const calculateCardTransforms = () => {
    if (isMobile) return [{}, {}, {}];

    const mountainScrollProgress = Math.min(scrollY / windowHeight, 1);
    const cardOpeningProgress = Math.min(mountainScrollProgress * 4, 1);

    const initialStackTranslateX = 0;
    const finalIcebergTranslateX = 30; 
    const finalIcebergRotateY = 15;   

    const card1InitialX = -initialStackTranslateX;
    const card1FinalX = -finalIcebergTranslateX;
    const card1FinalRotateY = finalIcebergRotateY;
    const card1TranslateX = card1InitialX * (1 - cardOpeningProgress) + card1FinalX * cardOpeningProgress;
    const card1RotateY = card1FinalRotateY * cardOpeningProgress;

    const card2TranslateX = 0;
    const card2RotateY = 0;

    const card3InitialX = initialStackTranslateX;
    const card3FinalX = finalIcebergTranslateX;
    const card3FinalRotateY = -finalIcebergRotateY;
    const card3TranslateX = card3InitialX * (1 - cardOpeningProgress) + card3FinalX * cardOpeningProgress;
    const card3RotateY = card3FinalRotateY * cardOpeningProgress;

    return [
      { transform: `translateX(${card1TranslateX}%) rotateY(${card1RotateY}deg)` },
      { transform: `translateX(${card2TranslateX}%) rotateY(${card2RotateY}deg)` },
      { transform: `translateX(${card3TranslateX}%) rotateY(${card3RotateY}deg)` }
    ];
  };

  const cardTransforms = calculateCardTransforms();

  return (
    <div
      ref={containerRef}
      className="parallax-content relative h-full mt-12 mb-12"
    >
      <div className="sticky top-0 h-screen w-full perspective overflow-hidden">
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 overflow-y-auto">
          <div
            ref={textContentRef}
            className={cn(
              commonClasses.container,
              "relative text-center py-8 sm:py-0 transition-opacity duration-1000 ease-in-out",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Header and Subheader */}
            <div className="mb-12 text-center">
              <h1 className={cn(commonClasses.h1, "text-black mb-4")}>
                Phones do not belong in the classrooms.
                <span
                  className={cn(
                    commonClasses.h3,
                    "block italic font-medium text-black mt-2"
                  )}
                >
                  But banning them is not the solution.
                </span>
              </h1>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {[
                {
                  title: "Phones do not belong in the classrooms",
                  description:
                    "72% of all school teachers say cell phone distraction is a major issue in the classroom",
                  image: "/Rectangle5.svg",
                  alt: "Classroom",
                },
                {
                  title: "But, banning them is not enough",
                  description:
                    "Phones not only act as critical communication devices to parent for student safety but also aid in accelerated learning",
                  image: "/Rectangle6.svg",
                  alt: "Teacher",
                },
                {
                  title: "Schools around the world are taking action",
                  description:
                    "Responsible phone usage policies can enable growth in increasingly digital environments while ensuring distraction-free learning",
                  image: "/Rectangle7.svg",
                  alt: "Student",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700"
                  style={cardTransforms[index]}
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3
                        className={cn(
                          commonClasses.h3,
                          "text-white mb-2 text-left"
                        )}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="p-6">
                    <p
                      className={cn(
                        commonClasses.body,
                        "text-gray-700 text-left"
                      )}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mountains container with 3D perspective */}
        <div
          className={cn(
            "mountain-container",
            !isMobile && "perspective preserve-3d"
          )}
        >
          {/* Left mountain */}
          <Mountain
            side="left"
            imgSrc="/left.svg"
            style={calculateLeftTransform()}
          />

          {/* Right mountain */}
          <Mountain
            side="right"
            imgSrc="/right.svg"
            style={calculateRightTransform()}
          />
        </div>

        {/* Background */}
        <div className="absolute inset-0 bg-navy-dark z-[-1]"></div>
      </div>
    </div>
  );
};

export default Vision;
