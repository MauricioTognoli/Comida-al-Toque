"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Loader2, Plus, Trash2, ChefHat } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GenerarReceta() {
  const [ingredientes, setIngredientes] = useState<string[]>([])
  const [nuevoIngrediente, setNuevoIngrediente] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [receta, setReceta] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const agregarIngrediente = () => {
    if (nuevoIngrediente.trim() && !ingredientes.includes(nuevoIngrediente.trim())) {
      setIngredientes([...ingredientes, nuevoIngrediente.trim()])
      setNuevoIngrediente("")
    }
  }

  const eliminarIngrediente = (index: number) => {
    setIngredientes(ingredientes.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      agregarIngrediente()
    }
  }

  const generarReceta = async () => {
    if (ingredientes.length === 0) {
      setError("Por favor, agrega al menos un ingrediente")
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      const prompt = `Genera una receta detallada utilizando ÚNICAMENTE los siguientes ingredientes: ${ingredientes.join(", ")}. 
      La receta debe incluir: 
      - Un título creativo
      - Tiempo de preparación
      - Tiempo de cocción
      - Porciones
      - Lista de ingredientes con cantidades
      - Instrucciones paso a paso
      - Consejos de presentación
      
      Formatea la respuesta de manera clara y atractiva. Si no es posible crear una receta completa con estos ingredientes, sugiere qué ingredientes adicionales básicos podrían necesitarse.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
        maxTokens: 1000,
      })

      setReceta(text)
    } catch (err) {
      console.error(err)
      setError("Ocurrió un error al generar la receta. Por favor, intenta de nuevo.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container py-16">
      <div className="relative mb-12 food-image-overlay rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Ingredientes"
          width={1200}
          height={300}
          className="w-full h-[200px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white mb-2">
            Genera tu receta personalizada
          </h1>
          <p className="text-white/80 max-w-2xl">
            Ingresa los ingredientes que tienes disponibles y nuestra IA creará una receta deliciosa para ti
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-food-dark-light border-food-gray">
          <CardHeader>
            <CardTitle className="text-food-gold font-[var(--font-playfair)]">Ingredientes disponibles</CardTitle>
            <CardDescription>Agrega los ingredientes que tienes en tu cocina</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Ej: tomate, cebolla, arroz..."
                value={nuevoIngrediente}
                onChange={(e) => setNuevoIngrediente(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-food-dark border-food-gray text-white"
              />
              <Button
                onClick={agregarIngrediente}
                variant="outline"
                size="icon"
                disabled={!nuevoIngrediente.trim()}
                className="border-food-gold text-food-gold hover:bg-food-dark"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 min-h-[100px]">
              {ingredientes.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  Aún no has agregado ingredientes. Agrega al menos uno para generar una receta.
                </p>
              ) : (
                ingredientes.map((ingrediente, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1.5 bg-food-dark border-food-gray"
                  >
                    {ingrediente}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-1 p-0 hover:text-food-gold"
                      onClick={() => eliminarIngrediente(index)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={generarReceta}
              className="w-full bg-food-gold text-food-dark hover:bg-food-gold-light"
              disabled={isGenerating || ingredientes.length === 0}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando...
                </>
              ) : (
                <>
                  <ChefHat className="mr-2 h-4 w-4" />
                  Generar Receta
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full bg-food-dark-light border-food-gray">
          <CardHeader>
            <CardTitle className="text-food-gold font-[var(--font-playfair)]">Tu receta personalizada</CardTitle>
            <CardDescription>Creada con inteligencia artificial</CardDescription>
          </CardHeader>
          <CardContent className="min-h-[300px]">
            {error && <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">{error}</div>}

            {isGenerating ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-food-gold" />
                <p className="text-muted-foreground">Creando tu receta personalizada...</p>
              </div>
            ) : receta ? (
              <div className="prose prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: receta.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center gap-2">
                <ChefHat className="h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">Agrega tus ingredientes y genera una receta personalizada</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {receta && (
        <div className="mt-8">
          <Tabs defaultValue="receta" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-food-dark border-food-gray">
              <TabsTrigger
                value="receta"
                className="data-[state=active]:bg-food-gold data-[state=active]:text-food-dark"
              >
                Receta
              </TabsTrigger>
              <TabsTrigger
                value="consejos"
                className="data-[state=active]:bg-food-gold data-[state=active]:text-food-dark"
              >
                Consejos de cocina
              </TabsTrigger>
            </TabsList>
            <TabsContent value="receta" className="p-4 border border-food-gray rounded-lg mt-2">
              <div className="prose prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: receta.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            </TabsContent>
            <TabsContent value="consejos" className="p-4 border border-food-gray rounded-lg mt-2">
              <Card className="bg-food-dark border-food-gray">
                <CardHeader>
                  <CardTitle className="text-food-gold font-[var(--font-playfair)]">
                    Consejos para mejorar tus habilidades culinarias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Prepara todos tus ingredientes antes de comenzar a cocinar (mise en place).</li>
                    <li>Mantén afilados tus cuchillos para un corte más preciso y seguro.</li>
                    <li>Prueba la comida mientras cocinas y ajusta los condimentos según sea necesario.</li>
                    <li>No abras constantemente el horno mientras cocinas, ya que se escapa el calor.</li>
                    <li>Deja reposar las carnes después de cocinarlas para que los jugos se redistribuyan.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
