import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally disconnect after first trigger for performance
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getInitialStyle = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return { opacity: 0 };
        case 'slideUp':
          return { opacity: 0, transform: 'translateY(2rem)' };
        case 'slideLeft':
          return { opacity: 0, transform: 'translateX(2rem)' };
        case 'slideRight':
          return { opacity: 0, transform: 'translateX(-2rem)' };
        case 'scale':
          return { opacity: 0, transform: 'scale(0.95)' };
        default:
          return { opacity: 0 };
      }
    }
    return { opacity: 1, transform: 'translateX(0) translateY(0) scale(1)' };
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        ...getInitialStyle(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

