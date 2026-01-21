import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experiencia y Confianza en Azuqueca de Henares
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Más de 15 años de experiencia en administración de fincas en Azuqueca y Guadalajara.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Comunidades Gestionadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {/* <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle className="text-lg">Equipo Profesional</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Administradores colegiados y equipo legal a su servicio.</p>
              </CardContent>
            </Card> */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-lg">Respaldo Legal</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Especialistas en propiedad horizontal y derecho inmobiliario.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
