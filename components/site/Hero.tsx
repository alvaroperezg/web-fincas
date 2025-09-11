import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
          <Shield className="w-4 h-4 mr-2" /> Con Respaldo Legal Especializado
        </Badge>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
          Administración de Fincas
          <span className="block text-primary">Profesional y Confiable</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Gestión integral de comunidades de propietarios en Azuqueca de Henares y Guadalajara.
          Más de 15 años de experiencia respaldados por un equipo legal especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Phone className="w-5 h-5 mr-2" /> Llamar Ahora
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            <Mail className="w-5 h-5 mr-2" /> Solicitar Presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
}