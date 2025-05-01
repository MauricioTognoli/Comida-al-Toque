import { Clock, Sparkles, Utensils } from "lucide-react";

export default function FeatureSection() {
    return (
        <section className="text-white w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Cómo funciona?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comida al Toque te ayuda a crear recetas deliciosas con los ingredientes que ya tienes en casa.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-food-yellow/20 p-3">
                <Utensils className="h-6 w-6 text-food-orange" />
              </div>
              <h3 className="text-xl font-bold">Ingresa tus ingredientes</h3>
              <p className="text-center text-muted-foreground">
                Selecciona los ingredientes que tienes disponibles en tu cocina.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-food-green/20 p-3">
                <Sparkles className="h-6 w-6 text-food-green" />
              </div>
              <h3 className="text-xl font-bold">La IA trabaja</h3>
              <p className="text-center text-muted-foreground">
                Nuestra inteligencia artificial crea recetas personalizadas con tus ingredientes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-food-red/20 p-3">
                <Clock className="h-6 w-6 text-food-red" />
              </div>
              <h3 className="text-xl font-bold">¡Cocina al toque!</h3>
              <p className="text-center text-muted-foreground">
                Recibe instrucciones detalladas y comienza a cocinar de inmediato.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}