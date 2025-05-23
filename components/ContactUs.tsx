"use client";

import { useState } from "react";
import Head from "next/head";
import { cn, commonClasses } from "@/lib/styles/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  message: string;
}

const inputClasses = cn(
  "w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400",
  commonClasses.body,
  "leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary py-2 px-4 mb-8"
);

export default function ContactUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mzzekrjz", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        message: "",
      });
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch</title>
        <meta
          name="description"
          content="Have questions or suggestions? Reach out to us through our contact form."
        />
        <meta
          name="keywords"
          content="Contact, Support, Inquiry, Get in Touch"
        />
        <meta name="author" content="Your Company Name" />
      </Head>

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
          .bottom-right-vector {
            position: absolute;
            bottom: 0;
            right: 20px;
            height: 200px;
            z-index: 0;
          }
        `}</style>

        {/* Background vector in a separate container */}
        <div className="vector-container">
          {/* Bottom right vector */}
          <img
            src="/VectorFika.svg"
            alt="Bottom right background vector"
            className="bottom-right-vector"
          />
        </div>

        {/* Content section with relative positioning to stay above vector */}
        <section
          className={cn(
            commonClasses.section,
            "bg-transparent text-gray-900 py-24 mt-20 relative z-10"
          )}
        >
          <div className={cn(commonClasses.container)}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
              <div className="flex items-center lg:mb-0 mb-10">
                <div className="w-full">
                  <h2
                    className={cn(
                      commonClasses.h2,
                      "font-semibold leading-10 mb-9 lg:text-left text-center"
                    )}
                  >
                    Have questions? Want to share your thoughts? Talk to us
                  </h2>

                  {submitted ? (
                    <div
                      className={cn(
                        commonClasses.body,
                        "text-green-600 font-semibold"
                      )}
                    >
                      Thank you for reaching out! We'll get back to you soon.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name (First and Last)"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address (Required)"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number (Required)"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />

                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="School/Organization Name (Optional)"
                        value={formData.organization}
                        onChange={handleChange}
                        className={inputClasses}
                      />

                      <input
                        id="role"
                        name="role"
                        type="text"
                        placeholder="Your Role (Required)"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className={inputClasses}
                      />

                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message/Questions"
                        value={formData.message}
                        onChange={handleChange}
                        className={cn(
                          inputClasses,
                          "h-48 resize-none rounded-2xl"
                        )}
                      />

                      <button
                        type="submit"
                        className={cn(
                          commonClasses.button.base,
                          commonClasses.button.primary,
                          commonClasses.button.sizes.lg,
                          "w-4/5"
                        )}
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Section */}
              <div
                className={cn(
                  commonClasses.card.base,
                  "lg:max-w-xl w-full h-[600px] flex items-center justify-center p-8"
                )}
              >
                <div
                  className={cn(commonClasses.card.base, "w-full max-w-md p-8")}
                >
                  <div className="flex items-center justify-center mb-6">
                    <a href="/">
                      <img
                        src="logoblack.png"
                        alt="Logo"
                        className="h-20 w-auto"
                      />
                    </a>
                  </div>
                  <h3
                    className={cn(
                      commonClasses.h3,
                      "font-semibold text-center mb-6"
                    )}
                  >
                    Join Our Community
                  </h3>
                  <p
                    className={cn(
                      commonClasses.body,
                      "text-gray-600 text-center mb-8"
                    )}
                  >
                    Join a community of educators dedicated to focused learning.
                    Share your information, and let's explore Fika together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
