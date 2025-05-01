import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-food-gray bg-food-dark-light py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <Image src="/logo.svg" alt="Comida al Toque" width={200} height={200} />
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Convierte los ingredientes que tienes en deliciosas recetas con la ayuda de nuestra inteligencia artificial.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4 text-food-gold">Enlaces</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm transition-colors hover:text-food-gold">
              Inicio
            </Link>
            <Link href="/generar" className="text-sm transition-colors hover:text-food-gold">
              Generar Receta
            </Link>
            <Link href="/about" className="text-sm transition-colors hover:text-food-gold">
              Acerca de
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4 text-food-gold">Horario</h3>
          <p className="text-sm mb-2">Disponible 24/7</p>
          <p className="text-sm text-muted-foreground">
            Nuestra IA está siempre lista para ayudarte a crear deliciosas recetas.
          </p>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-food-gray">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Comida al Toque. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-food-gold">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-food-gold">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
