"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group"
    >
      <div className="relative">
        <Sun className="h-[1.5rem] w-[1.3rem] group-hover:text-sky-500 dark:hidden" />
        <Moon className="hidden h-5 w-5 group-hover:text-yellow-400 dark:block" />
        <div className="absolute inset-0 blur transition-colors group-hover:bg-sky-500/50 dark:group-hover:bg-yellow-400/50"></div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
