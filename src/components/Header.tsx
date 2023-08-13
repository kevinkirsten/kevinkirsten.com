"use client"

import Link from "next/link"
import { useNavigationContext } from "@/contexts/navigationContext"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

import { buttonVariants } from "./ui/button"

export function Header() {
  const { navigation } = useNavigationContext()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white transition-none duration-1000 animate-in fade-in dark:bg-zinc-900">
      <div className="flex h-16 items-center justify-between">
        <nav className="flex gap-2 sm:gap-6">
          {navigation.map(({ title, href, current }) => (
            <Link
              key={title}
              href={href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "group relative flex items-center p-2 text-sm font-medium text-muted-foreground sm:text-base",
                { "text-sky-500 dark:text-sky-400": current }
              )}
            >
              {title}
              <div className="absolute inset-2 blur group-hover:bg-sky-500/30 dark:group-hover:bg-sky-400/30"></div>
              {current && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-x-1 -bottom-0 h-px bg-gradient-to-r from-sky-500/20 via-sky-500 to-sky-500/20"
                ></motion.div>
              )}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
