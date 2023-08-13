"use client"

import { ReactNode } from "react"
import { NavigationProvider } from "@/contexts/navigationContext"
import { ThemeProvider } from "@/providers/theme-provider"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NavigationProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NavigationProvider>
  )
}
