import { useState, useEffect } from "react";

export const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-secondary/30 no-print">
      <div 
        className="h-full bg-gradient-to-r from-primary via-primary to-success transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
