import { HTTP_BACKEND_URL } from "@/config";
import axios from "axios";
import { measureMemory } from "vm";

type Shapes =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };

export async function initDraw(
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
) {
  const ctx = canvas.getContext("2d");

  const existingShape: Shapes[] = await getExistingShapes(roomId);
  console.log(existingShape);

  if (!ctx) return;

  socket.onmessage = (event) => {
    console.log("received data", event.data);
    const message = JSON.parse(event.data);
    console.log(message);

    if (message.type === "chat") {
      const parsedShape = JSON.parse(message.message);
      existingShape.push(parsedShape);

      clearCanvas(existingShape, canvas, ctx);
    }
  };

  clearCanvas(existingShape, canvas, ctx);
  let clicked = false;
  let startX = 0;
  let startY = 0;
  let centerX = 0;
  let centerY = 0;
  let radius = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    const width = e.clientX - startX;
    const height = e.clientY - startY;
    const shape: Shapes = {
      // @ts-ignore
      type: window.selectedTool,
      x: startX,
      y: startY,
      width,
      height,
    };
    existingShape.push(shape);
    socket.send(
      JSON.stringify({
        type: "chat",
        message: JSON.stringify(shape),
        roomId,
      })
    );
  });

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const width = e.clientX - startX;
      const height = e.clientY - startY;
      clearCanvas(existingShape, canvas, ctx);
      // @ts-ignore
      const selectedTool = window.selectedTool;
      if (selectedTool === "rect") {
        ctx.strokeStyle = "rgba(255, 255, 255)";
        ctx.strokeRect(startX, startY, width, height);
      } else if (selectedTool === "circle") {
        centerX = startX + width / 2;
        centerY = startY + height / 2;
        radius = Math.max(width, height) / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
      }
    }
  });
}

function clearCanvas(
  existingShape: Shapes[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  existingShape.map((shape) => {
    if (shape.type === "rect") {
      ctx.strokeStyle = "rgba(255, 255, 255)";
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
  });
}

async function getExistingShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND_URL}/chats/${roomId}`);

  const messages = res.data.messages;
  const shapes = messages.map((x: { message: string }) => {
    const messageData = JSON.parse(x.message);
    return messageData;
  });

  return shapes;
}
