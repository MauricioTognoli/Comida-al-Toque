"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import { ChefHat } from "lucide-react";
import { Poetsen_One } from "next/font/google";

const poetsenOne = Poetsen_One({
  weight: '400',
  variable: '--font-poetsen-one',
  subsets: ['latin'],
})

export default function HeroSection() {
  return (
    <section className="text-amber-50 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-food-yellow/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex justify-center lg:justify-end">
            <Image
              src="/image-herosection.svg"
              width={700}
              height={500}
              alt="Plato de Ensalada con vegetales frescos al rededor"
              className=""
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className={`${poetsenOne.variable} text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none`}>
                Recetas personalizadas al instante
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Convierte los ingredientes que tienes en casa en deliciosas
                recetas con la ayuda de nuestra inteligencia artificial.
              </p>
            </div>
            <div className="m-5 flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="md:mr-4 bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                <ChefHat className="mr-2 h-5 w-5" />
                Generar receta
              </Button>
              <Button color="dark" outline>
                <Link href="/about">Conocer más</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
