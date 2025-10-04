'use client'
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useUser } from '@clerk/nextjs'
import { getDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '@/config/FirebaseConfig'

function Provider({
    children,
    ...props
}) {
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            CreateNewUser();
        }
    }, [user])


    const CreateNewUser = async () => {
        //if user is exist
        const userRef = doc(db, "users", user?.primaryEmailAddress?.emailAddress);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            console.log("User already exists");
            return;
        } else {
            const userData = {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                createdAt: new Date(),
                remainMsg: 5, //free tier
                plan: 'free',
                credits: 1000  //paid tier
            }
            await setDoc(userRef, userData);
            console.log("New user created");
        }


        //if not 

    }
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            {...props}>
            <SidebarProvider>
                <AppSidebar />
                <div className='w-full'>
                    <AppHeader />
                    {children}
                </div>
            </SidebarProvider>
        </NextThemeProvider>
    )
}

export default Provider