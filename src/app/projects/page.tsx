import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Projects() {
  return (
    <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl">
          Projects
        </h1>
        <p className="max-w-[700px] text-base text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        <Button
          variant="secondary"
          className="duration-500 animate-in zoom-in-50"
        >
          Secondary
        </Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </section>
  )
}
