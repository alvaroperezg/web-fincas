import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Shield, Users, FileText, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <Button>Consulta Gratuita</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Con Respaldo Legal Especializado
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Administración de Fincas
            <span className="block text-primary">Profesional y Confiable</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Gestión integral de comunidades de propietarios en Azuqueca de Henares y Guadalajara. Más de 15 años de
            experiencia respaldados por un equipo legal especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                <CardDescription>
                  Gestión completa de comunidades de propietarios, desde contabilidad hasta mantenimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Contabilidad y presupuestos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestión de proveedores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Mantenimiento preventivo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Asesoría Legal</CardTitle>
                <CardDescription>
                  Respaldo jurídico especializado en derecho inmobiliario y propiedad horizontal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Resolución de conflictos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Asesoramiento jurídico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestión de morosos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Gestión Documental</CardTitle>
                <CardDescription>
                  Organización y digitalización de toda la documentación de la comunidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Archivo digital seguro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Certificados y actas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestión de seguros
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experiencia y Confianza en Azuqueca de Henares
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Con más de 15 años de experiencia en el sector, somos la empresa de referencia en administración de
                fincas en Azuqueca de Henares y toda la provincia de Guadalajara.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nuestro equipo multidisciplinar, respaldado por abogados especializados en derecho inmobiliario,
                garantiza una gestión profesional y transparente de su comunidad.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Comunidades Gestionadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <CardTitle className="text-lg">Equipo Profesional</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Administradores colegiados y equipo legal especializado a su servicio
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-lg">Respaldo Legal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Abogados especializados en propiedad horizontal y derecho inmobiliario
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-muted-foreground">La confianza de nuestros clientes es nuestro mayor logro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Excelente servicio y atención personalizada. Han resuelto todos nuestros problemas de manera
                  eficiente."
                </p>
                <div className="font-semibold text-foreground">María González</div>
                <div className="text-sm text-muted-foreground">Presidenta de Comunidad</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "El respaldo legal que ofrecen es fundamental. Nos sentimos seguros con su gestión."
                </p>
                <div className="font-semibold text-foreground">Carlos Martín</div>
                <div className="text-sm text-muted-foreground">Propietario</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Transparencia total en la gestión. Informes claros y comunicación constante."
                </p>
                <div className="font-semibold text-foreground">Ana Ruiz</div>
                <div className="text-sm text-muted-foreground">Secretaria de Comunidad</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Contacta Con Nosotros</h2>
            <p className="text-lg text-muted-foreground">
              Estamos aquí para ayudarte. Consulta gratuita sin compromiso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Azuqueca de Henares, Guadalajara
                    <br />
                    Castilla-La Mancha, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">
                    +34 949 XX XX XX
                    <br />
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@administracionfincasazuqueca.com
                    <br />
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Solicita tu Consulta Gratuita</CardTitle>
                <CardDescription>Te contactaremos en menos de 24 horas para evaluar tus necesidades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Nombre</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Cuéntanos sobre tu comunidad y qué necesitas..."
                  />
                </div>
                <Button className="w-full">Enviar Consulta</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="font-serif font-bold text-lg">Administración de Fincas</span>
              </div>
              <p className="text-background/80 mb-4">
                Gestión profesional de comunidades con respaldo legal en Azuqueca de Henares.
              </p>
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
                <p>Azuqueca de Henares, Guadalajara</p>
                <p>+34 949 XX XX XX</p>
                <p>info@administracionfincasazuqueca.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Administración de Fincas Azuqueca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
