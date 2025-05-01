import { Button } from "flowbite-react";
import { ChefHat } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-food-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para cocinar?</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Convierte los ingredientes que tienes en deliciosas recetas en segundos.
              </p>
            </div>
            <Button size="lg" className="bg-food-green hover:bg-food-yellow hover:text-food-dark">
              <Link href="/generar">
                <ChefHat className="mr-2 h-5 w-5" />
                Generar Receta Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
}