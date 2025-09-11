import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

function Stars() {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground">La confianza de nuestros clientes es nuestro mayor logro</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            name: "María González", role: "Presidenta de Comunidad",
            text: "Excelente servicio y atención personalizada. Han resuelto todos nuestros problemas de manera eficiente."
          },{
            name: "Carlos Martín", role: "Propietario",
            text: "El respaldo legal que ofrecen es fundamental. Nos sentimos seguros con su gestión."
          },{
            name: "Ana Ruiz", role: "Secretaria de Comunidad",
            text: "Transparencia total en la gestión. Informes claros y comunicación constante."
          }].map((t, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6">
                <Stars />
                <p className="text-muted-foreground mb-4 italic">“{t.text}”</p>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
