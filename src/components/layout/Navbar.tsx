"use client"

import Link from "next/link"
import { Home, BarChart3, BookOpen, Github } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Predictor", href: "/predict", icon: BarChart3 },
    { name: "Documentation", href: "/documentation", icon: BookOpen },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              PropertyScope <span className="text-accent">AI</span>
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href ? "text-accent" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  )
}