"use client";
import { useState, useEffect } from "react";
import RadialProgress from "@/components/RadialProgress";

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        return prev + 5; // velocidad de carga
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-200 z-50">
      <h1 className="text-3xl font-bold text-primary mb-6">Cargando InformaTech...</h1>
      <div className="scale-150">
        <RadialProgress value={progress} />
      </div>
    </div>
  );
}
