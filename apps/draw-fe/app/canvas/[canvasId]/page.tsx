"use client";

import { ECDH } from "crypto";
import { Flashlight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let startX: number;
    let startY: number;

    let clicked: boolean;
    canvas.addEventListener("mousedown", (e) => {
      clicked = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    canvas.addEventListener("mouseup", (e) => {
      clicked = false;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (clicked) {
        const width = e.clientX - startX;
        const height = e.clientY - startY;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(startX, startY, width, height);
      }
    });
  }, [canvasRef]);

  return (
    <canvas
      width={500}
      height={500}
      ref={canvasRef}
      className="bg-red-300"
    ></canvas>
  );
}
