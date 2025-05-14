import express from "express";
import jwt from "jsonwebtoken";
import {
  SignUpSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { JWT_SECRET } from "@repo/backend-common/config";
import { authMiddleware } from "./middleware/auth";
import bcrypt from "bcrypt";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  try {
    const data = req.body;
    const { success } = SignUpSchema.safeParse(data);

    if (!success) {
      res.status(403).json({
        message: "Invalid data, Try again!",
      });
      return;
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    const user = await prismaClient.user.create({
      data: {
        username: data.username,
        password: hashedPass,
        name: data.name,
      },
    });

    res.json({
      userId: user.id,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "Signup failed",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  try {
    const data = req.body;
    const { success } = SignInSchema.safeParse(data);

    if (!success) {
      res.status(403).json({
        message: "invalid input",
      });
      return;
    }

    const userFound = await prismaClient.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (!userFound) {
      res.status(403).json({ message: "User Not found" });
      return;
    }

    const passwordMatch = bcrypt.compare(data.password, userFound.password);

    if (!passwordMatch) {
      res.status(403).json({
        message: "invalid password",
      });
      return;
    }

    const token = await jwt.sign(
      {
        id: userFound.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } catch (err) {
    console.log(err);

    res.status(403).json({
      message: "Sign In failed",
    });
  }
});

app.post("/api/v1/create-room", authMiddleware, async (req, res) => {
  try {
    const data = req.body;

    const { success } = CreateRoomSchema.safeParse(data);
    if (!success) {
      res.status(403).json({
        message: "invalid input",
      });
      return;
    }

    const userId = req.userId as string;

    const room = await prismaClient.room.create({
      data: {
        slug: data.name,
        adminId: userId,
      },
    });

    res.json({
      roomId: room.id,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "failed to create room",
    });
  }
});

app.get("/api/v1/chats/:roomId", async (req, res) => {
  const roomId = Number(req.params.roomId);

  try {
    const messages = await prismaClient.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });

    res.json({
      messages,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      message: "Failed to load messages",
    });
  }
});

app.listen(3001);
