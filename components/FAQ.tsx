"use client";
import { useState } from "react";
import { cn, commonClasses } from "@/lib/styles/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Is the Fika Case safe?",
      answer:
        "The Fika Case is constructed from high-impact resistant materials and has undergone rigorous testing to ensure phone protection.",
    },
    {
      question: "What if there's an emergency?",
      answer:
        "Teachers retain full control in emergency situations. They should have access to a designated emergency phone and can unlock the Fika case using the unlocking base nearby",
    },
    {
      question: "Why can't we just ban phones in schools?",
      answer:
        "Banning phones doesn't teach students how to manage distractions in a world where technology is prevalent. The Fika Case is a tool to teach responsible phone use, fostering self-regulation and focus skills that students can apply beyond the classroom.",
    },
    {
      question: "What is a phone-free school?",
      answer:
        "A phone-free school is a distraction-free learning environment where students keep their smartphones and other personal technology (airpods/apple watches) in Fika cases from arrival to dismissal",
    },
    {
      question:
        "Do you offer training or support for schools using the Fika Case?",
      answer:
        "We offer schools comprehensive training, ongoing support, and resources for communicating with parents and students during successful Fika Case implementation and phone-free zone creation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(commonClasses.section, "bg-white py-30 overflow-hidden")}
    >
      <div className={cn(commonClasses.container)}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 mt-20">
            <h1 className={cn(commonClasses.h1, "text-black")}>
              <span className="font-serif italic">Frequently Asked Questions</span>
            </h1>
          </div>
          <div className="pt-18 sm:pt-10 px-8 sm:px-20 pb-18 rounded-4xl">
            {faqItems.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className={cn(
                  "flex cursor-pointer w-full items-start justify-between border-b border-primary text-left",
                  index !== faqItems.length - 1 ? "mb-8 pb-8" : "pb-8"
                )}
              >
                <div className="max-w-xl pr-5">
                  <h3
                    className={cn(
                      commonClasses.h3,
                      "font-semibold",
                      openIndex === index ? "text-orange-600" : "text-black"
                    )}
                  >
                    {item.question}
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden duration-500",
                      openIndex === index ? "h-auto mt-3" : "h-0"
                    )}
                  >
                    <p className={cn(commonClasses.body, "text-gray-700")}>
                      {item.answer}
                    </p>
                  </div>
                </div>
                <div className="pt-1">
                  {openIndex === index ? (
                    <span className="relative top-3">
                      <svg
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                          fill="#FF460C"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="relative top-1">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
