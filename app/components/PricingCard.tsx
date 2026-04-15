import {Check, MessageCircle} from "lucide-react";
import Link from "next/link";

export default function PricingCard() {
  return (
    /* CONTENEDOR PRINCIPAL DE LA TARJETA */
    <div className="relative w-full max-w-sm overflow-hidden rounded-(--radius) bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-2xl p-8 md:p-10 flex flex-col h-full">
      {/* SECCIÓN SUPERIOR: TÍTULO Y PRECIO */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight mb-2">
          Experiencia Montaña
        </h3>
        <div className="flex items-baseline gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-white/60 line-through">
              $222
            </span>
            <span className="text-5xl font-extrabold tracking-tight">
              $199.80
            </span>
          </div>
          <span className="text-lg text-green-100/80 font-medium">
            / Aporte e Inversión
          </span>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-green-500/20 text-green-100 px-3 py-1 rounded-full text-sm font-semibold">
            🔥 10% de descuento
          </span>
        </div>
      </div>

      {/* SEPARADOR VISUAL (Sutil) */}
      <div className="w-full h-px bg-white/20 mb-8" />

      {/* LISTA DE BENEFICIOS */}
      <div className="grow space-y-5">
        <p className="font-semibold text-lg text-white/90">
          Tu aporte incluye:
        </p>

        <ul className="space-y-4">
          <FeatureItem text="Hospedaje completo en refugio" />
          <FeatureItem text="Todas las comidas (Desayuno, Almuerzo, Cena)" />
          <FeatureItem text="Experiencias formativas y guiatura" />
        </ul>
      </div>

      {/* FOOTER: NOTA DE PAGO (Destacada sutilmente al fondo) */}
      <Link
        href="https://wa.me/584245181651?text=Hola,%20quisiera%20más%20información%20sobre%20el%20voluntariado%20REVerdeSER."
        target="_blank"
      >
        <div className="mt-10 bg-white/10 rounded-xl p-4 flex gap-3 items-start backdrop-blur-sm border border-white/10">
          <MessageCircle className="w-5 h-5 mt-0.5 text-green-100 shrink-0" />
          <p className="text-xs text-green-50 leading-relaxed font-medium">
            El pago se coordina directamente por <strong>WhatsApp</strong> una
            vez completes tu inscripción.
          </p>
        </div>
      </Link>
    </div>
  );
}

// Sub-componente para los items de la lista
function FeatureItem({text}: {text: string}) {
  return (
    <li className="flex items-start gap-3">
      <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
      <span className="text-sm font-medium text-green-50 leading-snug">
        {text}
      </span>
    </li>
  );
}
