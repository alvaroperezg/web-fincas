import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-serif font-bold text-xl text-foreground">Administración de Fincas</h1>
              <p className="text-sm text-muted-foreground">Azuqueca de Henares</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</a>
            <Button asChild>
              <a href="#contacto">Contacta con nosotros</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}