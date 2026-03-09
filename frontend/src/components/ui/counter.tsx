import { useEffect, useState } from "react";

interface CounterProps {
  number: number;
  suffix?: string;
  label: string;
}

const Counter = ({ number, suffix = "", label }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>

      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default Counter;
