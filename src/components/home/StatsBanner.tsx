"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function Counter({ target, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const duration = 1500;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}{suffix}
      </span>
      <span className="text-lg text-blue-100">{label}</span>
    </div>
  );
}

const stats = [
  { target: 50, suffix: "+", label: "Projects" },
  { target: 100, suffix: "%", label: "Responsive Design" },
  { target: 98, suffix: "%", label: "Satisfaction" },
];

export default function StatsBanner() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
