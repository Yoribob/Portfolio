import { useEffect, useRef, useState } from "react";

export function NotationViewRender<T extends Element>() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<T>(null);
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return [targetRef, isVisible] as const;
}
