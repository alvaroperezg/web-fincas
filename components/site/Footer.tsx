import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="font-serif font-bold text-lg">Administración de Fincas</span>
            </div>
            <p className="text-background/80 mb-4">Gestión profesional de comunidades con respaldo legal en Azuqueca de Henares.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>Administración Integral</li>
              <li>Asesoría Legal</li>
              <li>Gestión Documental</li>
              <li>Mantenimiento</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-background/80">
              <p>Avenida Meco 1</p>
              <p>Azuqueca de Henares, Guadalajara</p>
              <p>+34 949 26 24 95</p>
              <p>fincasdobleg@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Administración de Fincas Azuqueca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
