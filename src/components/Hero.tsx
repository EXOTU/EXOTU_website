import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const context = ctx as CanvasRenderingContext2D;

    let animationFrameId = 0;
    let winW = 0;
    let winH = 0;
    // animation state
    let Balls: Array<Ball> = [];
    const maxBalls = 10;

    type Point = { x: number; y: number };
    let mouse: Point & { dir?: string } = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    class Ball {
      r: number;
      pos: Point;
      direction: Point;
      activePos: Point;
      color: CanvasGradient | string = '#000';

      constructor() {
        this.r = 100 + Math.random() * 100;
        this.pos = { x: Math.random() * winW, y: Math.random() * winH };
        this.direction = { x: -1 + Math.random() * 2, y: -1 + Math.random() * 2 };
        this.activePos = { x: this.pos.x, y: this.pos.y };
      }

      draw() {
        this.color = gradientBg(this.activePos.x, this.activePos.y, this.r);
        context.fillStyle = this.color as string | CanvasGradient;
        context.beginPath();
        context.arc(this.activePos.x, this.activePos.y, this.r, 0, Math.PI * 2);
        context.fill();
      }

      update() {
        const dx = mouse.x - this.activePos.x;
        const dy = mouse.y - this.activePos.y;
        // simple drift
        this.activePos.x += this.direction.x + dx * 0.0005;
        this.activePos.y += this.direction.y + dy * 0.0005;

        if (this.activePos.x < 0 || this.activePos.x > winW) this.direction.x *= -1;
        if (this.activePos.y < 0 || this.activePos.y > winH) this.direction.y *= -1;
      }
    }

    const hsl = (h: number, s: number, l: number, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

    const gradientBg = (x: number, y: number, r: number) => {
      // Map horizontal position to hue from purple (260deg) to blue-purple (280deg)
      const t = Math.max(0, Math.min(1, x / Math.max(1, winW)));
      const hue = 260 + t * 20;
      const bg = context.createRadialGradient(x - r / 3, y - r / 7, 0, x, y, r);
      // Bright purple core fading to darker same hue, then to dark navy
      bg.addColorStop(0.0, hsl(hue, 100, 60, 1));
      bg.addColorStop(0.55, hsl(hue, 100, 45, 0.85));
      bg.addColorStop(0.95, 'rgba(0,0,0,0.95)');
      return bg;
    };

    const init = () => {
      winW = canvas.width = window.innerWidth;
      winH = canvas.height = window.innerHeight;
      context.globalCompositeOperation = 'lighten';
      Balls = [];
      for (let i = 0; i < maxBalls; i++) Balls.push(new Ball());
    };

    const animate = () => {
      context.clearRect(0, 0, winW, winH);
      Balls.forEach((ball) => {
        ball.update();
        ball.draw();
      });
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const getMouse = (e: MouseEvent | TouchEvent) => {
      const touch = (e as TouchEvent).touches && (e as TouchEvent).touches[0];
      const x = (e as MouseEvent).clientX ?? (touch ? touch.pageX : 0);
      const y = (e as MouseEvent).clientY ?? (touch ? touch.pageY : 0);
      mouse = { x: x || 0, y: y || 0 };
    };

    const handleResize = () => init();

    const events: Array<keyof WindowEventMap> = ['mousemove', 'touchstart', 'touchmove'];
    events.forEach((name) => {
      window.addEventListener(name, getMouse as EventListener, { passive: true });
    });
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      events.forEach((name) => {
        window.removeEventListener(name, getMouse as EventListener);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="relative h-[100svh] min-h-screen overflow-hidden bg-black">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} id="mitosys" className="absolute inset-0 w-full h-full" />
      {/* Overlay gradient to boost contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* Top label */}
      <div className="absolute top-10 left-6 sm:left-10 z-10">
        <p className="text-sm sm:text-base tracking-wide text-gray-200/90">
          Queen's Biomechatronics Team
        </p>
      </div>

      {/* Big centerpiece wordmark */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 sm:px-10">
          <h1 className="font-extrabold tracking-tight leading-none text-[16vw] sm:text-[12vw] md:text-[10vw] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
            EX<span className="text-primary-vibrant">OTU</span>
          </h1>
        </div>
      </div>

      {/* Sub tagline */}
      <div className="absolute bottom-20 left-6 sm:left-10 z-10">
        <p className="text-xl sm:text-2xl md:text-3xl italic text-gray-300/80">
          Ontario Tech University Exoskeleton Design Team.
        </p>
      </div>
    </section>
  );
}
