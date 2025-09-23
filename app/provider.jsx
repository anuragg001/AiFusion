import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

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
        <div>{children}</div>
    </NextThemeProvider>
  )
}
 
export default Provider