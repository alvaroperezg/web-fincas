import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-[#cfe4d6]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contacta Con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para ayudarte. Consulta gratuita sin compromiso.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Solicita tu Consulta Gratuita</CardTitle>
              <CardDescription>
                Te contactaremos en menos de 24 horas para evaluar tus necesidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                <p>Avenida Meco 1</p>
                <p className="text-muted-foreground">
                  Azuqueca de Henares, Guadalajara<br />
                  Castilla-La Mancha, España
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                <p className="text-muted-foreground">
                  +34 949 26 24 95<br />
                  Lunes a Viernes: 9:00 - 18:00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">
                  fincasdobleg@gmail.com<br />
                  Respuesta &lt; 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}