'use client';

import { cn } from "@/lib/utils";

export default function ForestScene() {
  return (
    <div className={cn("w-full h-96 bg-gradient-to-b from-black to-green-900 rounded-xl shadow-lg flex items-center justify-center")}>
      <p className="text-white text-xl font-semibold">Forest scene placeholder</p>
    </div>
  );
}
