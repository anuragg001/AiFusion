import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'

function Provider({
    children,
    ...props
}) {
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