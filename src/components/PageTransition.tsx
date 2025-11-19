import { useEffect, useState, ReactNode, useRef } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  currentPage: string;
  previousPage: string | null;
}

export default function PageTransition({ children, currentPage, previousPage }: PageTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'fade' | 'slide-left' | 'slide-right'>('fade');
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setDisplayChildren(children);
      return;
    }

    // Determine transition direction based on page order
    const pageOrder = ['home', 'about', 'projects', 'team', 'sponsors', 'join', 'contact', 'gallery', 'blog'];
    const currentIndex = pageOrder.indexOf(currentPage);
    const previousIndex = previousPage ? pageOrder.indexOf(previousPage) : -1;

    if (previousIndex !== -1 && currentIndex !== -1) {
      if (currentIndex > previousIndex) {
        setTransitionDirection('slide-left');
      } else if (currentIndex < previousIndex) {
        setTransitionDirection('slide-right');
      } else {
        setTransitionDirection('fade');
      }
    } else {
      setTransitionDirection('fade');
    }

    // Start transition out
    setIsTransitioning(true);

    // After fade out, update content and fade in
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      // Small delay before fade in
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 300); // Half of transition duration

    return () => clearTimeout(timer);
  }, [currentPage, children, previousPage]);

  const getTransitionClasses = () => {
    if (isTransitioning) {
      switch (transitionDirection) {
        case 'slide-left':
          return 'opacity-0 translate-x-8';
        case 'slide-right':
          return 'opacity-0 -translate-x-8';
        case 'fade':
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-x-0';
  };

  return (
    <div
      className={`transition-all ease-in-out ${getTransitionClasses()}`}
      style={{ transitionDuration: '600ms' }}
    >
      {displayChildren}
    </div>
  );
}

