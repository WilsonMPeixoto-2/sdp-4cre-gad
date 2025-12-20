import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fallbackTimeout?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = "0px 0px -50px 0px", 
    triggerOnce = true,
    fallbackTimeout = 2000 
  } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: ensure visibility after timeout even if IntersectionObserver fails
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, fallbackTimeout);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, triggerOnce, fallbackTimeout]);

  return { ref, isVisible };
};
