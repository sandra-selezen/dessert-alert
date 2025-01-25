import { useState, useEffect } from "react";

const breakpoints = {
  small: 640, // <= 640px
  medium: 1024, // 641px - 1024px
  large: Infinity, // > 1024px
};

export const useViewport = () => {
  const [breakpoint, setBreakpoint] = useState<"small" | "medium" | "large">("large");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= breakpoints.small) {
        setBreakpoint("small");
      } else if (width <= breakpoints.medium) {
        setBreakpoint("medium");
      } else {
        setBreakpoint("large");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { breakpoint };
};
