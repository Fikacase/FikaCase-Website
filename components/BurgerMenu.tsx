import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import BurgerIcon from "./icons/BurgerIcon";

interface BurgerMenuProps {
  className?: string;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`transition-transform duration-300 cursor-pointer ${className}`}
        aria-label="Open menu"
      >
        <BurgerIcon />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 menu-overlay transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-md max-w-xs bg-white sliding-menu shadow-2xl transform transition-all duration-500 ease-in-out rounded-[20px] m-4 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{
          height: "calc(100vh - 2rem)",
          maxHeight: "calc(100vh - 2rem)",
        }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full p-4 sm:p-8 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-start mb-8 sm:mb-16 ">
            <button
              onClick={() => setIsOpen(false)}
              className="close-button flex items-center space-x-2 text-gray-800 cursor-pointer"
              aria-label="Close menu"
            >
              <span className="uppercase text-sm tracking-widest">Close</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Brand Name */}
          <div className="mb-12 sm:mb-20">
            <a href="/">
              <img src="logoblack.png" alt="Logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Two Column Layout for Menu Links */}
          <div className="flex flex-row">
            {/* Left Column */}
            <div className="flex-1 pr-4">
              {/* Menu Links */}
              <div className="space-y-4 sm:space-y-6">
                <a
                  href="/about-us"
                  className="menu-link block text-base sm:text-lg uppercase tracking-widest text-gray-800 hover:text-[#FF9900]  transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/how-it-works"
                  className="menu-link block text-base sm:text-lg uppercase tracking-widest text-gray-800 hover:text-[#FF9900]  transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="/why-it-matters"
                  className="menu-link block text-base sm:text-lg uppercase tracking-widest text-gray-800 hover:text-[#FF9900]  transition-colors"
                >
                  Why It Matters
                </a>
                <a
                  href="/faq"
                  className="menu-link block text-base sm:text-lg uppercase tracking-widest text-gray-800 hover:text-[#FF9900]  transition-colors"
                >
                  Frequently Asked Questions
                </a>
                <a
                  href="/contact-us"
                  className="menu-link block text-base sm:text-lg uppercase tracking-widest text-gray-800 hover:text-[#FF9900]  transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Column - Aligned with left column */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
