import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, FileText, Shield } from "lucide-react";

function ServiceItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-primary" /> {children}
    </li>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de administración de fincas con el respaldo legal que necesitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Administración Integral</CardTitle>
              <CardDescription>Gestión completa de comunidades: contabilidad, proveedores y mantenimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <ServiceItem>Contabilidad y presupuestos</ServiceItem>
                <ServiceItem>Gestión de proveedores</ServiceItem>
                <ServiceItem>Mantenimiento preventivo</ServiceItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Asesoría Legal</CardTitle>
              <CardDescription>Respaldo jurídico en derecho inmobiliario y propiedad horizontal</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <ServiceItem>Resolución de conflictos</ServiceItem>
                <ServiceItem>Asesoramiento jurídico</ServiceItem>
                <ServiceItem>Gestión de morosos</ServiceItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestión Documental</CardTitle>
              <CardDescription>Organización y digitalización de la documentación de la comunidad</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <ServiceItem>Archivo digital seguro</ServiceItem>
                <ServiceItem>Certificados y actas</ServiceItem>
                <ServiceItem>Gestión de seguros</ServiceItem>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}