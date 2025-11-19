import { useEffect, useRef, useState } from 'react';

interface AnimatedProgressBarProps {
  progress: number;
  label?: string;
}

export default function AnimatedProgressBar({ progress, label }: AnimatedProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Animate from 0 to target progress
            const duration = 1500; // 1.5 seconds
            const startTime = Date.now();
            const startProgress = 0;
            const targetProgress = progress;

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progressRatio = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);
              const currentProgress = startProgress + (targetProgress - startProgress) * easeOutCubic;
              
              setAnimatedProgress(currentProgress);

              if (progressRatio < 1) {
                requestAnimationFrame(animate);
              } else {
                setAnimatedProgress(targetProgress);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [progress, isVisible]);

  return (
    <div className="space-y-2" ref={barRef}>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label || 'Progress'}</span>
        <span className="text-green-400 font-semibold">{Math.round(animatedProgress)}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300"
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
    </div>
  );
}

