import React from "react";
import Link from "next/link";
import { cn, commonClasses } from "@/lib/styles/utils";

interface GlowLinkProps {
  to: string;
  text: string;
  colorClass?: string;
}

const GlowLink: React.FC<GlowLinkProps> = ({ to, text, colorClass }) => {
  return (
    <Link 
      href={to} 
      title={`Go to ${text}`} 
      className={cn(
        commonClasses.h3,
        "relative text-white transition-all duration-300",
        "hover:text-orange-400 orange-gradient-hover orange-glow-hover"
      )}
    >
      {text}
    </Link>
  );
};

export default GlowLink;
