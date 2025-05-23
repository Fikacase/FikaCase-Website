"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn, commonClasses } from "@/lib/styles/utils";

const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
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
    <section
      ref={sectionRef}
      className={cn(commonClasses.section, "bg-white py-20 flex flex-col items-center justify-center text-center")}
    >
      <div className={cn(commonClasses.container, "max-w-7xl")}>
        <h1
          className={cn(
            commonClasses.h1,
            "mb-4 text-black transition-all duration-1000 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          We can help you transform your school into a distraction-free learning
          zone.
        </h1>

        <p
          className={cn(
            commonClasses.h3,
            "text-gray-700 mb-8 transition-all duration-1000 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Have questions? Want to share your thoughts? Talk to us */}
        </p>

        <div
          className={cn(
            "flex flex-col items-center sm:flex-row gap-4 justify-center transition-all duration-1000 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="/faq"
            title=""
            className={cn(
              commonClasses.button.base,
              commonClasses.button.primary,
              commonClasses.button.sizes.lg,
              "w-full sm:w-auto"
            )}
            role="button"
          >
            Read The FAQ's
          </a>
          <a
            href="/contact-us"
            title=""
            className={cn(
              commonClasses.button.base,
              commonClasses.button.primary,
              commonClasses.button.sizes.lg,
              "w-full sm:w-auto"
            )}
            role="button"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
