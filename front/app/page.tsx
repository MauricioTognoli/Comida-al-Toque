import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChefHat, Utensils, Clock, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/data"

export default function Home() {
  const category = categories
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden food-image-overlay">
        <Image
          src="/fondo-especias.jpg"
          alt="Fondo de comida"
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold tracking-tight">
                  Recetas <span className="text-food-gold">personalizadas</span> al instante 
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Convierte los ingredientes que tienes en casa en deliciosas recetas con la ayuda de nuestra
                  inteligencia artificial.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-food-gold text-food-dark hover:bg-food-gold-light">
                  <Link href="/generar">
                    <ChefHat className="mr-2 h-5 w-5" />
                    Generar Receta
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-food-gold text-food-gold hover:bg-food-dark-light"
                >
                  <Link href="/about">Conocer más</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative  content-center">
                <Image
                  src="/image-herosection.svg"
                  width={900}
                  height={600}
                  alt="Comida deliciosa"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16 bg-food-dark-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-[var(--font-playfair)] font-bold tracking-tight text-food-gold">
              Categorías populares
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Explora nuestras categorías más populares y encuentra inspiración para tu próxima comida.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
            {category.map(
              ({id, name, img}) => (
                <Card key={id} className="bg-food-dark border-food-gray overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative h-40 w-full food-image-overlay content-center">
                      <Image
                        src={img}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center content-center">
                        <h3 className="text-2xl text-shadow font-medium text-white">{name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-[var(--font-playfair)] font-bold tracking-tight text-food-gold">
              ¿Cómo funciona?
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Comida al Toque te ayuda a crear recetas deliciosas con los ingredientes que ya tienes en casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 p-6 border border-food-gray rounded-lg bg-food-dark-light">
              <div className="rounded-full bg-food-gold/20 p-3">
                <Utensils className="h-6 w-6 text-food-gold" />
              </div>
              <h3 className="text-xl font-bold">Ingresa tus ingredientes</h3>
              <p className="text-center text-muted-foreground">
                Selecciona los ingredientes que tienes disponibles en tu cocina.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border border-food-gray rounded-lg bg-food-dark-light">
              <div className="rounded-full bg-food-gold/20 p-3">
                <Sparkles className="h-6 w-6 text-food-gold" />
              </div>
              <h3 className="text-xl font-bold">La IA trabaja</h3>
              <p className="text-center text-muted-foreground">
                Nuestra inteligencia artificial crea recetas personalizadas con tus ingredientes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border border-food-gray rounded-lg bg-food-dark-light">
              <div className="rounded-full bg-food-gold/20 p-3">
                <Clock className="h-6 w-6 text-food-gold" />
              </div>
              <h3 className="text-xl font-bold">¡Cocina al toque!</h3>
              <p className="text-center text-muted-foreground">
                Recibe instrucciones detalladas y comienza a cocinar de inmediato.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative w-full py-16 overflow-hidden food-image-overlay">
        <Image
          src="/logo-llamas.jpg"
          alt="Fondo de comida"
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-[var(--font-playfair)] font-bold tracking-tight text-food-gold">
              ¿Listo para cocinar?
            </h2>
            <p className="max-w-[600px] text-white md:text-xl/relaxed">
              Convierte los ingredientes que tienes en deliciosas recetas en segundos.
            </p>
            <Button asChild size="lg" className="bg-food-gold text-food-dark hover:bg-food-gold-light mt-4">
              <Link href="/generar">
                <ChefHat className="mr-2 h-5 w-5" />
                Generar Receta Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
