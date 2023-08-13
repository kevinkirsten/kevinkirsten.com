import { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export type NavigationItem = {
  title: string
  href: string
  current: boolean
}

interface NavigationContextProps {
  navigation: NavigationItem[]
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
)

export const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}

interface NavigationProviderProps {
  children: React.ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const pathname = usePathname()

  const [navigation, setNavigation] = useState<NavigationItem[]>([
    { title: "Home", href: "/", current: pathname === "/" },
    { title: "Projects", href: "/projects", current: pathname === "/projects" },
    { title: "Blog", href: "/blog", current: pathname === "/blog" },
  ])

  useEffect(() => {
    setNavigation((prevNav) =>
      prevNav.map((item) => ({
        ...item,
        current: item.href === pathname,
      }))
    )
  }, [pathname])

  return (
    <NavigationContext.Provider value={{ navigation }}>
      {children}
    </NavigationContext.Provider>
  )
}
