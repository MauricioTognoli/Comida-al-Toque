import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat } from "lucide-react"

export default function About() {
  return (
    <div className="container py-16">
      <div className="relative mb-12 food-image-overlay rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Acerca de nosotros"
          width={1200}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white mb-2">
            Acerca de Comida al Toque
          </h1>
          <p className="text-white/80 max-w-2xl">
            Descubre cómo nuestra plataforma está transformando la forma de cocinar en casa
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card className="bg-food-dark-light border-food-gray">
          <CardHeader>
            <CardTitle className="text-food-gold font-[var(--font-playfair)]">Nuestra Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Reducir el desperdicio de alimentos y ayudar a las personas a aprovechar al máximo los ingredientes que ya
              tienen, fomentando la creatividad en la cocina.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-food-dark-light border-food-gray">
          <CardHeader>
            <CardTitle className="text-food-gold font-[var(--font-playfair)]">Cómo Funciona</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Utilizamos modelos avanzados de inteligencia artificial para analizar tus ingredientes disponibles y
              generar recetas personalizadas que sean deliciosas y factibles.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-food-dark-light border-food-gray">
          <CardHeader>
            <CardTitle className="text-food-gold font-[var(--font-playfair)]">Beneficios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ahorra dinero aprovechando lo que ya tienes</li>
              <li>Reduce el desperdicio de alimentos</li>
              <li>Descubre nuevas combinaciones de sabores</li>
              <li>Mejora tus habilidades culinarias</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-food-dark-light border border-food-gray rounded-lg p-8 mb-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-[var(--font-playfair)] font-bold text-food-gold mb-4">
              ¿Por qué usar Comida al Toque?
            </h2>
            <p className="mb-4">
              Cada año, millones de toneladas de alimentos se desperdician en todo el mundo. Comida al Toque te ayuda a
              ser parte de la solución, aprovechando al máximo los ingredientes que ya tienes en casa.
            </p>
            <p>
              Además, te ayudamos a descubrir nuevas recetas y a expandir tus horizontes culinarios, todo mientras
              ahorras tiempo y dinero.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Cocina sostenible"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="relative food-image-overlay rounded-lg overflow-hidden p-12">
        <Image src="/placeholder.svg?height=300&width=1200" alt="Contacto" fill className="object-cover" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-[var(--font-playfair)] font-bold text-food-gold mb-4">¿Listo para empezar?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-white">
            Comienza a generar recetas personalizadas con los ingredientes que ya tienes en casa.
          </p>
          <Button asChild size="lg" className="bg-food-gold text-food-dark hover:bg-food-gold-light">
            <Link href="/generar">
              <ChefHat className="mr-2 h-5 w-5" />
              Generar Receta
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
