"use client";
import { useThemeContext } from "@/app/context/themeContext";
import { useMobile } from "@/hooks/useMobile";
import React, { useRef, useEffect } from "react";

class Particle {
  radius: number; // radius dasar (random di constructor)
  dynamicRadius: number; // radius yang dipakai untuk gambar (radius + offset dinamis)
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  width: number;
  height: number;

  // Untuk animasi radius dinamis:
  radiusPhase: number;
  radiusSpeed: number;
  radiusAmplitude: number;

  constructor(width: number, height: number, size: number, velocity: number) {
    this.radius = Math.random() * 3 + size;
    this.dynamicRadius = this.radius;

    this.radiusPhase = Math.random() * Math.PI * 2; // fase acak
    this.radiusSpeed = 0.001 + Math.random() * 0.001; // kecepatan perubahan radius
    this.radiusAmplitude = this.radius * 0.4; // seberapa besar radius berubah (40% dari radius dasar)

    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * velocity;
    this.vy = (Math.random() - 0.5) * velocity;

    this.color =
      Math.random() < 0.4
        ? "#ffffff" // 30% kemungkinan putih
        : `hsl(${Math.random() * 360}, 70%, 70%)`;

    this.width = width;
    this.height = height;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Pantulan di batas viewport, tetap pakai radius dasar untuk hitbox
    if (this.x + this.radius > this.width) {
      this.x = this.width - this.radius;
      this.vx *= -1;
    }
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.vx *= -1;
    }
    if (this.y + this.radius > this.height) {
      this.y = this.height - this.radius;
      this.vy *= -1;
    }
    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.vy *= -1;
    }

    // Update dynamicRadius secara sinusoidal
    this.radiusPhase += this.radiusSpeed;
    this.dynamicRadius = this.radius + Math.sin(this.radiusPhase) * this.radiusAmplitude;
    if (this.dynamicRadius < 0.1) this.dynamicRadius = 0.1; // pastikan tidak negatif
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.dynamicRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const WavyParticles: React.FC<{
  count?: number;
  size?: number;
  velocity?: number;
}> = ({ count = 10, size = 100, velocity = 5 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const isMobile = useMobile();
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current.forEach((p) => {
        p.width = canvas.width;
        p.height = canvas.height;
      });
    };

    window.addEventListener("resize", resize);
    resize();

    particlesRef.current = [];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(new Particle(canvas.width, canvas.height, size, velocity));
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <svg style={{ display: "none" }}>
          <filter id="turbulence">
            <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="2" result="turbulence" />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="300" xChannelSelector="G" />
          </filter>
        </svg>
      )}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -2,
          width: "120%",
          height: "120%",
          filter: isMobile ? "url(#turbulence)" : "blur(120px)",
          opacity: isMobile ? 0.3 : isDark ? 0.2 : 0.5,
        }}
      />
    </>
  );
};

export default WavyParticles;
