import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/CustomerCursor"


export const metadata: Metadata = {
  title: "Muhammad Haris — Frontend Engineer",
  description: "Frontend engineer crafting immersive digital experiences with Next.js, React, TypeScript and Three.js.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Three.js", "Portfolio"],
  authors: [{ name: "Muhammad Haris" }],
  openGraph: {
    title: "Muhammad Haris — Frontend Engineer",
    description: "Crafting immersive digital experiences",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}