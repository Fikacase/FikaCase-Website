"use client";

import { useEffect, useRef } from "react";
import ColourfulText from "./ui/colourful-text";
import { Timeline } from "./ui/timeline";
import { cn, commonClasses } from "@/lib/styles/utils";

const processSteps = [
  {
    number: "Step 1",
    title: "Phone Placement",
    description:
      "Upon entering the phone-free zone, your phone will be placed inside your Fika case",
    image: "/step1.svg",
    alt: "Phone placement in Fika case",
  },
  {
    number: "Step 2",
    title: "Secure Locking ",
    description:
      "Once inside the phone-free zone, the case is locked. You will always maintain possession of your phone. ",
    image: "/step2.svg",
    alt: "Secure case locking",
  },
  {
    number: "Step 3",
    title: "Unlocking & Returns",
    description:
      "To use your phone at any time, step outside the phone-free zone and tap your case on an Fika unlocking base",
    image: "/step3.svg",
    alt: "Unlocking the Fika case",
  },
];

// Transform processSteps into the format expected by the Timeline component
const timelineData = processSteps.map((step) => ({
  title: step.title,
  image: step.image,
  alt: step.alt,
  description: step.description,
}));

export function HowItWorksComponent() {
  return (
    <section
      className={cn(
        commonClasses.section,
        "mt-10 sm:mt-14 md:mt-20 pb-16 sm:pb-20 md:pb-24 pt-16 sm:pt-24 md:pt-32 border-b border-[rgb(51,51,51)] overflow-hidden"
      )}
    >
      <div className={cn(commonClasses.container, "px-4 md:px-8 lg:px-12")}>
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-32">
          <h1
            className={cn(
              commonClasses.h1,
              "text-black mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            )}
          >
            <span className="font-light">
              <img
                src="logoOrange.png"
                alt="Fika Orange Logo"
                className="inline h-[1em] sm:h-[1.1em] md:h-[1.2em] mx-2 sm:mx-3 align-middle translate-y-[-4px] sm:translate-y-[-6px] md:translate-y-[-8px]"
              />
              <span
                className={cn(
                  commonClasses.gradient.orange,
                  commonClasses.gradient.text
                )}
              >
                Case
              </span>
            </span>{" "}
            in Action
          </h1>
        </div>

        <div className="relative w-full">
          <Timeline data={timelineData} />
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </section>
  );
}
