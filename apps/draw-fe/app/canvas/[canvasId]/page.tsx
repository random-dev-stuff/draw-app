"use client";
import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    initDraw(canvasRef.current);
  }, [canvasRef]);

  return <canvas width={2000} height={1080} ref={canvasRef}></canvas>;
}
