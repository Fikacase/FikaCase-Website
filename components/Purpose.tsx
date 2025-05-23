"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn, commonClasses } from "@/lib/styles/utils";

const Purpose = () => {
  const sectionRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with the fade-in class
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    // Observe the button specifically
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Add a style block for animations and positioning */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .button-animation.fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vector-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .left-vector {
          position: absolute;
          left: 0;
          top: 200px;
          height: 80vh;
          z-index: 0;
        }
        .right-vector {
          position: absolute;
          right: 0;
          top: 200px;
          height: 80vh;
          z-index: 0;
        }
      `}</style>

      {/* Background vectors in a separate container */}
      <div className="vector-container">
        {/* Left vector */}
        <img
          src="/VectorS.svg"
          alt="Left background vector"
          className="left-vector"
        />

        {/* Right vector */}
        <img
          src="/VectorE.svg"
          alt="Right background vector"
          className="right-vector"
        />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <section
          className={cn(
            commonClasses.section,
            "bg-transparent text-black pt-24 px-6 md:px-12"
          )}
        >
          <div
            className={cn(
              commonClasses.container,
              "flex flex-col lg:flex-row items-center gap-12"
            )}
          >
            {/* First row - keeping original positioning */}
            <div className="lg:w-1/2 space-y-8 fade-in">
              <div className="space-y-3">
                <h2
                  className={cn(
                    commonClasses.h1,
                    "flex items-baseline mb-10 font-semibold"
                  )}
                >
                  Bringing Fika values to the classroom
                </h2>

                <p className={cn(commonClasses.body, "text-gray-700 max-w-lg")}>
                  Classrooms, at their heart, are vibrant social spaces where
                  learning thrives on interaction and collaboration. We
                  recognized that the core principles of Fika – focus,
                  connection, and mindful presence – are precisely what's often
                  missing in today's classrooms.
                </p>
              </div>
            </div>

            <div className="lg:w-5/12 relative fade-in">
              <div
                className={cn(
                  commonClasses.card.base,
                  "overflow-hidden rounded-3xl"
                )}
              >
                <img
                  src="/Container.svg"
                  alt="Team members working on a project"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className={cn(
            commonClasses.section,
            "bg-transparent text-black px-6 md:px-12"
          )}
        >
          <div className={cn(commonClasses.container)}>
            {/* Second row - container without flex to allow custom positioning */}
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              {/* Image column - same width as first row image */}
              <div className="lg:w-5/12 relative fade-in">
                <div
                  className={cn(
                    commonClasses.card.base,
                    "overflow-hidden rounded-3xl"
                  )}
                >
                  <img
                    src="/Container1.svg"
                    alt="Creative collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text column - aligned with image in first row */}
              <div className="lg:w-1/2 space-y-8 lg:ml-auto pl-10">
                <div className="space-y-3 fade-in">
                  <h2
                    className={cn(
                      commonClasses.h1,
                      "flex items-baseline mb-10 font-semibold"
                    )}
                  >
                    The FIKA difference
                  </h2>

                  <p
                    className={cn(commonClasses.body, "text-gray-700 max-w-lg")}
                  >
                    The Fika Case was born from a simple, yet powerful idea:
                    what if we could bring the spirit of Fika into the
                    classroom? What if we could create a space where students
                    and teachers could focus, connect, and engage in meaningful
                    learning?
                  </p>
                </div>

                <div className="space-y-3 fade-in">
                  <p
                    className={cn(commonClasses.body, "text-gray-700 max-w-lg")}
                  >
                    Join us in creating classrooms where learning thrives and
                    students reach their full potential.
                  </p>
                </div>

                <div className="fade-in mt-6">
                  <a href="/contact-us">
                    <button
                      ref={buttonRef}
                      className={cn(
                        commonClasses.button.base,
                        commonClasses.button.primary,
                        commonClasses.button.sizes.lg,
                        "rounded-full button-animation"
                      )}
                    >
                      Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purpose;
