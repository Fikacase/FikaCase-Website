import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface MountainProps {
  side: "left" | "right";
  imgSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

const Mountain: React.FC<MountainProps> = ({
  side,
  imgSrc,
  className,
  style,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute bottom-0 transition-transform parallax-mountain",
        isMobile ? "h-[30%] duration-0" : "h-[80%] duration-700 ease-out",
        side === "left"
          ? "left-0 origin-bottom-right"
          : "right-0 origin-bottom-left",
        className
      )}
      style={isMobile ? {} : style}
    >
      <img
        src={imgSrc}
        alt={`Mountain ${side}`}
        className={cn(
          "h-full w-auto object-contain",
          isMobile ? "object-bottom scale-75" : "object-bottom"
        )}
      />
    </div>
  );
};

export default Mountain;
