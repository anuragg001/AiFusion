'use client'
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import ChatInputBox from "./_components/ChatInputBox";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div>
      <ChatInputBox />
    </div>
  );
}
