import { Metadata } from "next"

import "@/app/globals.css"

import Providers from "@/providers"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/font"
import { cn } from "@/lib/utils"
import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "flex min-h-screen w-full justify-center bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen w-full max-w-6xl flex-col">
              <div className="absolute inset-0 bg-sky-400/30 px-4 blur-xl sm:mx-8 sm:px-8 md:mx-12 md:px-12"></div>
              <div className="relative flex-1 border-l border-r bg-white px-4 dark:bg-zinc-900 sm:mx-8 sm:px-8 md:mx-12 md:px-12">
                <Header />
                {children}
              </div>
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  )
}
