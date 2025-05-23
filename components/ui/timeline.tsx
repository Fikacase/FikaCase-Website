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
    <div className="w-full font-sans bg-white" ref={containerRef}>
      <div
        ref={ref}
        className="relative w-full mx-auto pb-10 sm:pb-16 md:pb-20"
      >
        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute ${
            isMobile ? "left-6 sm:left-8" : "left-1/2"
          } top-0 ${
            isMobile ? "" : "-translate-x-1/2"
          } overflow-hidden w-[4px] sm:w-[5px] md:w-[6px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#FF9900] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={`absolute inset-x-0 top-0 w-[4px] sm:w-[5px] md:w-[6px] bg-gradient-to-t from-[#FF9900] via-[#FFB84D] to-transparent from-[0%] via-[10%] rounded-full`}
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "flex flex-col pl-16 sm:pl-20" : "flex justify-center"
            } pt-12 sm:pt-16 md:pt-20 lg:pt-30 relative`}
          >
            {/* Mobile Layout */}
            {isMobile ? (
              <>
                {/* Center Timeline with Step (Mobile) */}
                <div className="absolute left-6 sm:left-8 top-12 sm:top-16 flex flex-col items-center z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.21, 0.45, 0.32, 0.9],
                      opacity: { duration: 0.4 },
                    }}
                    className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#FF9900] flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 mb-4"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Content (Mobile) */}
                <motion.div
                  initial={{ x: 20, opacity: 0, scale: 0.95 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.45, 0.32, 0.9],
                    opacity: { duration: 0.6 },
                  }}
                  className="space-y-4 mb-6"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Image (Mobile) */}
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.45, 0.32, 0.9],
                    opacity: { duration: 0.6 },
                  }}
                  className="relative h-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02] mb-8"
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
              // Desktop Layout
              <>
                {/* Left Side - Image or Text */}
                <div className="w-1/2 pr-12 md:pr-16 lg:pr-24">
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
                      className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
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
                      className="space-y-4 md:space-y-6"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                        {item.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Center Timeline with Step */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.21, 0.45, 0.32, 0.9],
                      opacity: { duration: 0.4 },
                    }}
                    className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-[#FF9900] flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 mb-6"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Right Side - Text or Image */}
                <div className="w-1/2 pl-12 md:pl-16 lg:pl-24">
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
                      className="space-y-4 md:space-y-6"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                        {item.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
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
                      className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
