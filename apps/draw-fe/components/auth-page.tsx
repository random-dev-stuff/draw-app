"use client";

import { Button } from "./button";
import { Input } from "./input";

export const AuthPage = ({ isSignIn }: { isSignIn: boolean }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="p-6 m-2 bg-red-400 rounded">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <div className="flex justify-center py-2">
          <Button variant="primary">{isSignIn ? "Sign In" : "Sign Up"}</Button>
        </div>
      </div>
    </div>
  );
};
