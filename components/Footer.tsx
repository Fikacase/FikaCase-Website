"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { cn, commonClasses } from "@/lib/styles/utils";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/mzzekrjz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className={cn(commonClasses.container, "py-16")}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <p className={cn(commonClasses.body, "text-gray-300 max-w-xs")}>
              Transforming classrooms into focused learning environments with innovative phone management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={cn(commonClasses.h3, "mb-6 text-white")}>Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/why-it-matters" className="text-gray-300 hover:text-white transition-colors">
                  Why It Matters
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={cn(commonClasses.h3, "mb-6 text-white")}>Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Education St, School District, 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@fikacase.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={cn(commonClasses.h3, "mb-6 text-white")}>Newsletter</h3>
            <p className={cn(commonClasses.body, "text-gray-300 mb-4")}>
              Stay updated with our latest news and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={cn(
                    commonClasses.body,
                    "w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg",
                    "text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent",
                    "outline-none transition-all"
                  )}
                  required
                />
              </div>
              <button
                type="submit"
                className={cn(
                  commonClasses.button.base,
                  commonClasses.button.primary,
                  commonClasses.button.sizes.md,
                  "w-full"
                )}
              >
                Subscribe
              </button>
              {submitted && (
                <p className="text-green-400 mt-2">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className={cn(commonClasses.container, "py-6")}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fika Case. Patent Pending. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
