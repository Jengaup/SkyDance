"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const defaultColors = colors ?? [
    "#f59e0b",
    "#06b6d4",
    "#8b5cf6",
    "#f97316",
    "#10b981",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const nt = { value: 0 };
    const speedVal = speed === "fast" ? 0.002 : 0.001;

    function drawWave(n: number) {
      nt.value += speedVal;
      for (let i = 0; i < n; i++) {
        ctx!.beginPath();
        ctx!.lineWidth = waveWidth ?? 50;
        ctx!.strokeStyle = defaultColors[i % defaultColors.length];
        for (let x = 0; x < w; x += 5) {
          const y =
            Math.sin(x / 200 + nt.value * (i + 1) * 0.5) * 100 +
            Math.sin(x / 100 + nt.value * (i + 1)) * 50;
          x === 0 ? ctx!.moveTo(x, y + h * 0.5) : ctx!.lineTo(x, y + h * 0.5);
        }
        ctx!.stroke();
        ctx!.closePath();
      }
    }

    function render() {
      ctx!.fillStyle = backgroundFill ?? "transparent";
      ctx!.globalAlpha = 1;
      ctx!.fillRect(0, 0, w, h);
      ctx!.globalAlpha = waveOpacity;
      drawWave(5);
      animationRef.current = requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [speed, waveWidth, backgroundFill, waveOpacity]);

  return (
    <div className={cn("relative flex flex-col items-center justify-center overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
