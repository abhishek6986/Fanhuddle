"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SportyBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

function SportyWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const animateCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += 0.008;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Sporty flowing lines with purple/pink gradients
    const numLines = 25;

    for (let i = 0; i < numLines; i++) {
      const yPos = (i / numLines) * height;
      const amplitude = 60 + 30 * Math.sin(timeRef.current * 0.3 + i * 0.2);
      const frequency = 0.008 + 0.003 * Math.sin(timeRef.current * 0.15 + i * 0.1);
      const speed = timeRef.current * (0.8 + 0.4 * Math.sin(i * 0.15));
      const thickness = 1.2 + 0.8 * Math.sin(timeRef.current + i * 0.3);
      const opacity = 0.25 + 0.15 * Math.abs(Math.sin(timeRef.current * 0.4 + i * 0.2));

      // Create gradient for sporty effect
      const gradient = ctx.createLinearGradient(0, yPos, width, yPos);
      gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity * 0.5})`); // purple
      gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity})`); // pink
      gradient.addColorStop(1, `rgba(251, 146, 60, ${opacity * 0.3})`); // orange

      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = gradient;

      for (let x = 0; x < width; x += 3) {
        const y = yPos + amplitude * Math.sin(x * frequency + speed) + 
                  20 * Math.sin(timeRef.current * 1.5 + x * 0.01);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    // Diagonal sporty streaks
    const numStreaks = 12;
    for (let i = 0; i < numStreaks; i++) {
      const offset = (i / numStreaks) * width * 1.8 - width * 0.4;
      const amplitude = 40 + 20 * Math.cos(timeRef.current * 0.25 + i * 0.15);
      const phase = timeRef.current * (0.6 + 0.3 * Math.sin(i * 0.12));
      const thickness = 0.8 + 0.5 * Math.sin(timeRef.current + i * 0.25);
      const opacity = 0.12 + 0.08 * Math.abs(Math.sin(timeRef.current * 0.3 + i * 0.18));

      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(192, 132, 252, ${opacity})`; // light purple

      const steps = 80;
      for (let j = 0; j <= steps; j++) {
        const progress = j / steps;
        const x = offset + progress * width + amplitude * Math.sin(progress * 4 + phase);
        const y = progress * height;

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    requestIdRef.current = requestAnimationFrame(animateCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    animateCanvas();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
        requestIdRef.current = null;
      }
      timeRef.current = 0;
    };
  }, [animateCanvas, resizeCanvas]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none" 
    />
  );
}

export function SportyBackground({ className, children }: SportyBackgroundProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-black", className)}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      
      {/* Animated wave canvas */}
      <SportyWaveCanvas />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function SportyBackgroundDemo() {
  return (
    <SportyBackground>
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">
              FAN
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              HUDDLE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200/80 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Experience the perfect blend of athletic energy and fan community in motion
          </p>
        </motion.div>
      </div>
    </SportyBackground>
  );
}