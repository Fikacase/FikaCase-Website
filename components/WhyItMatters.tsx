// why-it-matters.tsx
'use client'
import React from "react";
import Link from "next/link";
import { cn, commonClasses } from "@/lib/styles/utils";

interface ResearchItem {
  title: string;
  source: string;
  link: string;
}

const WhyItMattersComponent: React.FC = () => {
  const researchArticles: ResearchItem[] = [
    {
      title: "Mobiles: Are phones 'hell' in schools?",
      source: "Eenadu Telangana",
      link: "https://www.eenadu.net/telugu-news/telangana/studies-concluded-that-mobiles-are-a-hindrance-to-students-learning/1802/125030089",
    },
    {
      title:
        "72% of U.S. high school teachers say cell phone distraction is a major problem in the classroom",
      source: "Pew Research Center",
      link: "https://www.pewresearch.org/short-reads/2024/06/12/72-percent-of-us-high-school-teachers-say-cellphone-distraction-is-a-major-problem-in-the-classroom/",
    },
    {
      title: "Schools around the world taking action on mobile phones",
      source:
        "Connecting Board of Education, Department of Education - South Australia, Department of Education - UK",
      link: "https://yaledailynews.com/blog/2024/09/23/connecticut-board-of-education-recommends-cell-phone-restrictions-in-public-schools/",
    },
    {
      title:
        "Global Education Monitoring Report argues for technology to be used in class only when it supports learning outcomes",
      source: "UNESCO",
      link: "https://unesdoc.unesco.org/ark:/48223/pf0000385723/PDF/385723eng.pdf.multi",
    },
    {
      title:
        "About half of kids ages 11 to 17 get at least 237 notifications on their phones in a typical day, and of those notifications, 25% arrive during the school day",
      source: "Common Sense Media",
      link: "https://www.nbcnews.com/health/health-news/teens-inundated-phone-prompts-day-night-research-finds-rcna108044",
    },
    {
      title:
        "Nearly 95% of young people aged 13-17 report near-constant social media use. Research shows that excessive use—over three hours a day—can elevate risks of depression, anxiety, body dissatisfaction, and exposure to harmful content",
      source: "Yale Research",
      link: "https://www.yalemedicine.org/news/social-media-teen-mental-health-a-parents-guide",
    },
  ];

  return (
    <div className="relative">
      {/* Add a style block for vector positioning */}
      <style jsx global>{`
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
          bottom: 0px;
          height: 80vh;
          z-index: 0;
        }
      `}</style>

      {/* Background vectors in a separate container */}
      <div className="vector-container">
        {/* Left vector */}
        <img
          src="/VectorC.svg"
          alt="Left background vector"
          className="left-vector"
        />

        {/* Right vector */}
        <img
          src="/VectorA.svg"
          alt="Right background vector"
          className="right-vector"
        />
      </div>

      {/* Content section with relative positioning to stay above vectors */}
      <section
        className={cn(
          commonClasses.section,
          "bg-transparent text-gray-900 py-16 relative z-10"
        )}
      >
        <div className={cn(commonClasses.container, "max-w-4xl")}>
          <div className="mb-16 mt-10">
            <h1
              className={cn(
                commonClasses.h1,
                "mb-6 text-center tracking-tight"
              )}
            >
              Why It Matters
            </h1>
            <div className="h-1 w-32 mx-auto mb-10 rounded-full bg-primary"></div>
            <p
              className={cn(
                commonClasses.body,
                "text-gray-600 text-center max-w-3xl mx-auto"
              )}
            >
              Research findings highlighting the impact of mobile phones and
              social media on education and student wellbeing.
            </p>
          </div>

          <div className="space-y-10">
            {researchArticles.map((article, index) => (
              <div
                key={index}
                className={cn(
                  commonClasses.card.base,
                  "border-l-4 border-primary px-8 py-7 transition-transform duration-200 hover:scale-[1.02]"
                )}
              >
                <Link
                  href={article.link}
                  className="block group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className={cn(
                      commonClasses.h3,
                      "font-medium mb-2 text-gray-700 orange-gradient-hover transition-colors"
                    )}
                  >
                    {article.title}
                  </h2>
                  <p
                    className={cn(
                      commonClasses.body,
                      "text-gray-500 font-medium"
                    )}
                  >
                    {article.source}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyItMattersComponent;
