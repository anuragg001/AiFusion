'use client'
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { SignIn, SignInButton, useUser } from "@clerk/nextjs"
import { Bolt, Moon, Sun, User2, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import UsageCreditProgress from "./UsageCreditProgress"

export function AppSidebar() {
    const { theme, setTheme } = useTheme();
    const { user } = useUser();
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-3">
                    <div className=" flex justify-between items-center">
                        <div className="flex items-center gap-2 ">
                            <Image src="/logo.svg" alt="Logo" width={60} height={60}
                                className="w-[40px] h-[40px]" />
                            <h1 className="font-bold text-xl">AiFusion</h1>
                        </div>
                        <div>
                            {theme == 'light' ? <Button variant={'ghost'} onClick={() => setTheme('dark')}><Sun /></Button> :
                                <Button variant={'ghost'} onClick={() => setTheme('light')}><Moon /></Button>}
                        </div>
                    </div>
                    {user?
                    <Button className="mt-7 w-full " size="lg" >+ New chat</Button>:
                    <SignInButton mode="modal" className="mt-7 w-full ">
                        <Button className={'w-full'} size={'lg'} >Sign In/Sign Up</Button>
                    </SignInButton>}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <div className="p-3">
                        <h2 className="font-bold text-lg " > Chats</h2>
                       {!user&&<p className="text-sm text-gray-400">Sign in to chat with multiple ai models.</p>}
                    </div>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter>
                <div className="p-3 mb-10">
                    {!user ? <SignInButton mode="modal">
                        <Button className={'w-full'} size={'lg'} >Sign In/Sign Up</Button>
                    </SignInButton>
                        :
                        <div>
                            <UsageCreditProgress/>
                            <Button className={'mb-3 w-full '}><Zap /> Upgrade Plan </Button>
                            <Button className="flex " variant={'ghost'}>
                                <User2 /><h1>Settings</h1>
                            </Button>
                        </div>
                    }
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
