import type { Config } from "tailwindcss"
// @ts-ignore
import animatePlugin from "tailwindcss-animate"

import shadcnPlugin from "./src/lib/shadcn-plugin"

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [shadcnPlugin, animatePlugin],
} satisfies Config

export default config
