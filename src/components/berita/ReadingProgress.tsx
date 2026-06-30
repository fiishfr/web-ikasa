"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="
      fixed
      left-0
      top-0
      z-999
      h-1
      w-full
      bg-transparent
    "
    >
      <div
        className="
        h-full
        rounded-r-full
        bg-linear-to-r
        from-red-700
        via-red-600
        to-red-500
        transition-all
        duration-150
      "
        style={{
          width: `${width}%`,
        }}
      />
    </div>
  );
}