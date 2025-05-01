"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChefHat, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-food-gray bg-food-dark/95 backdrop-blur supports-[backdrop-filter]:bg-food-dark/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Comida al Toque" width={40} height={40} />
          <span className="hidden font-bold text-food-gold sm:inline-block">Comida al Toque</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-food-gold">
            Inicio
          </Link>
          <Link href="/generar" className="text-sm font-medium transition-colors hover:text-food-gold">
            Generar Receta
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-food-gold">
            Acerca de
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-food-dark-light border-food-gray">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-food-gold">
                    Inicio
                  </Link>
                  <Link href="/generar" className="flex items-center gap-2 text-sm font-medium hover:text-food-gold">
                    <ChefHat className="h-4 w-4" />
                    Generar Receta
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 text-sm font-medium hover:text-food-gold">
                    Acerca de
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </Button>
          <Button asChild className="hidden md:flex bg-food-gold text-food-dark hover:bg-food-gold-light">
            <Link href="/generar">
              <ChefHat className="mr-2 h-4 w-4" />
              Generar Receta
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
