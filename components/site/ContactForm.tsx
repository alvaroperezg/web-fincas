"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form) as Record<string, string>;
    try {
      setLoading(true);
      setOk(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setOk(res.ok);
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
       <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground">Nombre</label>
          <Input name="name" placeholder="Tu nombre" required className="mt-1" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Teléfono</label>
          <Input name="phone" type="tel" placeholder="Tu teléfono" className="mt-1" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Email</label>
        <Input name="email" type="email" placeholder="tu@email.com" required className="mt-1" />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground">Mensaje</label>
        <Textarea name="message" rows={4} placeholder="Cuéntanos sobre tu comunidad y qué necesitas..." required className="mt-1" />
      </div>
      <Button className="w-full" disabled={loading} type="submit">
        {loading ? "Enviando…" : "Enviar Consulta"}
      </Button>
      {ok === true && <p className="text-sm text-green-600">¡Gracias! Te contactaremos en menos de 24h.</p>}
      {ok === false && <p className="text-sm text-destructive">No se pudo enviar. Inténtalo de nuevo.</p>}
    </form>
  );
}