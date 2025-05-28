"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  image: string;
  alt: string;
  description: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state based on window width
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans bg-white flex justify-center"
      ref={containerRef}
    >
      <div
        ref={ref}
        className="relative w-full max-w-6xl mx-auto pb-10 sm:pb-16 md:pb-20"
      >
        {/* Timeline Line - Only show on desktop */}
        {!isMobile && (
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden w-[4px] sm:w-[5px] md:w-[6px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#FF9900] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[4px] sm:w-[5px] md:w-[6px] bg-gradient-to-t from-[#FF9900] via-[#FFB84D] to-transparent from-[0%] via-[10%] rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        )}

        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              isMobile
                ? "flex flex-col items-center text-center px-4"
                : "flex justify-center items-center"
            } pt-12 sm:pt-16 md:pt-20 lg:pt-30 relative`}
          >
            {/* Mobile Layout */}
            {isMobile ? (
              <>
                {/* Content (Mobile) - Center aligned */}
                <motion.div
                  initial={{ y: 20, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.45, 0.32, 0.9],
                    opacity: { duration: 0.6 },
                  }}
                  className="space-y-4 mb-6 w-full max-w-md"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Image (Mobile) - Center aligned */}
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.45, 0.32, 0.9],
                    opacity: { duration: 0.6 },
                  }}
                  className="relative h-[350px] sm:h-[250px] w-full max-w-md rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02] mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </>
            ) : (
              // Desktop Layout - Centered Row
              <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
                {/* Left Side - Image or Text */}
                <div className="w-1/2 pr-6 md:pr-8 lg:pr-12 flex justify-end">
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ x: -100, opacity: 0, scale: 0.95 }}
                      whileInView={{ x: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.45, 0.32, 0.9],
                        opacity: { duration: 0.6 },
                      }}
                      className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-md rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ x: -100, opacity: 0, scale: 0.95 }}
                      whileInView={{ x: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.45, 0.32, 0.9],
                        opacity: { duration: 0.6 },
                      }}
                      className="space-y-4 md:space-y-6 max-w-md text-right"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-6">
                        {item.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Center Timeline with Step - Only on desktop */}
                <div className="flex flex-col items-center z-10 mx-4 md:mx-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.21, 0.45, 0.32, 0.9],
                      opacity: { duration: 0.4 },
                    }}
                    className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full bg-[#FF9900] flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
                  >
                    <span className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Right Side - Text or Image */}
                <div className="w-1/2 pl-6 md:pl-8 lg:pl-12 flex justify-start">
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ x: 100, opacity: 0, scale: 0.95 }}
                      whileInView={{ x: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.45, 0.32, 0.9],
                        opacity: { duration: 0.6 },
                      }}
                      className="space-y-4 md:space-y-6 max-w-md text-left"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-6">
                        {item.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ x: 100, opacity: 0, scale: 0.95 }}
                      whileInView={{ x: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.45, 0.32, 0.9],
                        opacity: { duration: 0.6 },
                      }}
                      className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-md rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
