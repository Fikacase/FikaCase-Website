"use client";
import Link from "next/link";
import { ArrowLeft, Home, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div
        className={`w-full max-w-xl relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="glass rounded-3xl overflow-hidden backdrop-blur-lg border border-amber-100/30 shadow-xl bg-white/30">
          <div className="px-10 py-16 sm:px-14 sm:py-20 flex flex-col items-center relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-amber-200/30 rounded-full blur-xl"></div>

            {/* 404 Text */}
            <div className="relative mb-6">
              <span className="text-[12rem] font-extrabold text-primary/5 leading-none bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-100">
                404
              </span>
              <h1 className="text-7xl sm:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle whitespace-nowrap">
                404
              </h1>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="text-orange-500" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
                Page Not Found
              </h2>
            </div>

            <p className="text-gray-600 text-center mb-10 max-w-md leading-relaxed">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:from-amber-400 hover:to-orange-400"
              >
                <Home
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">Return Home</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/10 blur-xl rounded-full z-[-1]"></div>
      </div>

      {/* Add custom styling for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.05);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.03);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
