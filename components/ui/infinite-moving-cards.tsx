"use client";

import { cn } from "@/lib/utils";
import { commonClasses } from "@/lib/styles/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-[60px] z-30 pointer-events-none bg-gradient-to-r "></div>

      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-full p-2 sm:p-4 rounded-lg",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-2 sm:gap-4 py-2 sm:py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className={cn(
                "relative shrink-0 rounded-2xl border border-blue-100 bg-white flex items-start hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden",
                // Responsive sizing
                "w-[280px] h-[300px] px-4 py-4",
                "sm:w-[320px] sm:h-[320px] sm:px-6 sm:py-6",
                "md:w-[350px] md:h-[340px] md:px-8 md:py-8",
                "lg:w-[400px] lg:h-[360px] lg:px-10 lg:py-10",
                "xl:w-[450px] xl:h-[360px]"
              )}
              key={item.name}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #eef5ff 100%)",
              }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-200 to-blue-400"></div>
              <blockquote className="h-full flex flex-col justify-start pl-3 pt-4 md:pt-6 w-full">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50 blur-xl"
                ></div>
                <span
                  className={cn(
                    commonClasses.h2,
                    "relative z-20 orange-gradient-text",
                    // Responsive text sizing
                    "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  )}
                >
                  {item.name}
                </span>
                <div className="relative z-20 mt-4 sm:mt-6 md:mt-8 flex flex-row items-start flex-1">
                  <span className="flex flex-col gap-1 h-full justify-between">
                    <span
                      className={cn(
                        commonClasses.h3,
                        "font-normal text-gray-800",
                        // Responsive text sizing for quote
                        "text-sm sm:text-base md:text-2xl leading-relaxed"
                      )}
                    >
                      {item.quote}
                    </span>
                    {item.title && (
                      <span
                        className={cn(
                          commonClasses.body,
                          "text-blue-500 mt-2 md:mt-4 italic",
                          "text-xs sm:text-sm md:text-base"
                        )}
                      >
                        {item.title}
                      </span>
                    )}
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      {/* Right fade effect */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-[60px] z-30 pointer-events-none "></div>
    </div>
  );
};
