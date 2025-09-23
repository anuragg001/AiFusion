'use client'
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {setTheme} = useTheme();
  return (
   <div>
    <Button onClick={()=>setTheme('dark')} >DarkMode</Button>
    <Button onClick={()=>setTheme('light')} >LightMode</Button>
    <h1>Hello World</h1>
   </div>
  );
}
