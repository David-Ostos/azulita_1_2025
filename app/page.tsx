import Image from "next/image";
import type {Metadata} from "next";
import {PricingCard} from "./components";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "REVerdeSER - Voluntariado en las Montañas Azules | La Azulita, Mérida",
  description:
    "Participa en nuestro voluntariado de 6 noches y 7 días en Mérida, Venezuela. Aprende de huertos, abejas, cultura local y reconecta con la naturaleza.",
  keywords:
    "voluntariado, Mérida, Venezuela, La Azulita, REVerdeSER, agroecología, abejas, huerto, naturaleza, retiro, Montañas Azules, prácticas ancestrales",
  openGraph: {
    title: "REVerdeSER - Voluntariado en las Montañas Azules",
    description: "Experimenta para reconectar con la naturaleza de tu ser.",
    images: [
      {
        url: "/img/hero.jpg",
        width: 1200,
        height: 630,
        alt: "REVerdeSER - Voluntariado en las Montañas Azules",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Botón Flotante de WhatsApp */}
      <Link
        href="https://wa.me/584245181651?text=Hola,%20quisiera%20más%20información%20sobre%20el%20voluntariado%20REVerdeSER."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </Link>

      <main className="min-h-screen">
        {/* Sección Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="z-50 absolute top-4 left-4 sm:top-16 sm:left-16 flex items-center gap-4">
            <Image
              className="bg-gray-200/50 backdrop-blur-xs rounded-full py-8"
              src="/logos/raices.png"
              alt="Raíces Agroecológicas"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/hero.jpg"
              alt="Montañas Azules de Mérida, Venezuela"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              REVerdeSER
            </h1>
            <p className="mb-4 text-xl font-medium sm:text-2xl md:text-3xl">
              Voluntariado en las Montañas Azules
            </p>
            <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl">
              Experimenta para reconectar con la naturaleza de tu ser.
            </p>
            <p className="mb-10 text-base text-white/80 sm:text-lg md:text-xl">
              Arte • Cultura • Naturaleza
            </p>
            <Link
              href="https://wa.me/584245181651?text=Hola,%20quisiera%20más%20información%20sobre%20el%20voluntariado%20REVerdeSER."
              target="_blank"
              className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Reserva tu lugar
            </Link>
          </div>
        </section>

        {/* Sección La Experiencia */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              La Experiencia
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
              <p>
                Un voluntariado de 6 noches y 7 días en las majestuosas Montañas
                Azules de Mérida, Venezuela. Una experiencia única donde podrás
                sumergirte en la naturaleza, aprender prácticas ancestrales y
                reconectar con tu ser esencial.
              </p>
              <p>
                En la aldea de San Luis, La Azulita, encontrarás un espacio de
                transformación personal a través del contacto directo con la
                tierra, el aprendizaje de técnicas agroecológicas y la conexión
                con la cultura local de estas montañas.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Actividades y Aprendizaje */}
        <section className="bg-linear-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Actividades y Aprendizaje
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Actividad 1: Huertos */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/huerto.jpg"
                    alt="Huerto agroecológico en las Montañas Azules"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Huertos
                </h3>
                <p className="text-gray-700">
                  Aprenderás diferentes técnicas para crear y cuidar un huerto
                  productivo.
                </p>
              </div>

              {/* Actividad 2: Bosque Nativo */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/bosque.jpg"
                    alt="Bosque nativo de las Montañas Azules"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Bosque Nativo
                </h3>
                <p className="text-gray-700">
                  Disfrutarás de paseos y caminatas descubriendo y conectando
                  con su exuberante biodiversidad y clima de montaña.
                </p>
              </div>

              {/* Actividad 3: Abejas */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/abejas.jpg"
                    alt="Abejas en su hábitat natural"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Abejas
                </h3>
                <p className="text-gray-700">
                  Aprenderás sobre el maravilloso mundo de las abejas y su
                  importancia. Conocerás sobre APICULTURA y MELIPONICULTURA.
                </p>
              </div>

              {/* Actividad 4: Alimentación */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/alimentacion.jpg"
                    alt="Alimentos frescos y de producción local"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Alimentación
                </h3>
                <p className="text-gray-700">
                  Te nutrirás con alimentos frescos y de producción local,
                  descubriendo nuevas recetas saludables y prácticas.
                </p>
              </div>

              {/* Actividad 5: Cultura Local */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/local.jpg"
                    alt="Cultura local de las Montañas Azules"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Cultura Local
                </h3>
                <p className="text-gray-700">
                  Conocerás de la cultura local de estás montañas, lugares,
                  personas e historia.
                </p>
              </div>

              {/* Actividad 6: Terapias Holísticas */}
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/img/temazcal.jpg"
                    alt="Terapias holísticas en conexión con los elementos"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Terapias Holísticas
                </h3>
                <p className="text-gray-700">
                  Recibirás de los beneficios de prácticas de bienestar en
                  conexión con los elementos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Qué Incluye */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Qué Incluye
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-8 text-center">
                <div className="mb-4 text-5xl">🍽️</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Todas las comidas
                </h3>
                <p className="text-gray-700">
                  Alimentación completa durante toda la experiencia con
                  productos locales y frescos.
                </p>
              </div>
              <div className="rounded-xl bg-green-50 p-8 text-center">
                <div className="mb-4 text-5xl">🏠</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Hospedaje
                </h3>
                <p className="text-gray-700">
                  Hospedaje en cabaña compartida en un entorno natural y
                  acogedor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Detalles Logísticos */}
        <section className="bg-linear-to-b from-white to-green-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Detalles Logísticos
            </h2>
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  📅 Fecha
                </h3>
                <p className="text-lg text-gray-700">
                  Del 12 al 18 de diciembre 2025
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  📍 Lugar
                </h3>
                <p className="text-lg text-gray-700">
                  La Azulita, Mérida, Venezuela
                </p>
                <p className="mt-2 text-base text-gray-600">
                  En la aldea de San Luis
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  👥 Cupos
                </h3>
                <p className="text-lg text-gray-700">
                  Experiencia solo para 6 personas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Inversión / Aporte */}
        <section className="my-12">
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Aporte e Inversión
            </h3>
            <div className="flex justify-center items-center max-w-4xl">
              <PricingCard />
            </div>
          </div>
        </section>

        {/* Sección Inscripción */}
        {/*         <section
          id="inscripcion"
          className="bg-linear-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Reserva tu Lugar
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-12"> */}
        {/* --- INICIO: PEGAR CÓDIGO DE FORMULARIO EMBEBIDO DE BREVO AQUÍ --- */}
        {/* El formulario de Brevo pedirá 'Nombre' y 'Correo'. */}
        {/* 
                NOTA: Para estilizar el iframe de Brevo, será necesario agregar estilos 
                personalizados en globals.css o usar configuración especial de Tailwind, 
                ya que las clases de Tailwind aplicadas localmente no afectarán el contenido 
                dentro del iframe embebido de Brevo.
              */}
        {/* --- FIN: PEGAR CÓDIGO DE FORMULARIO EMBEBIDO DE BREVO --- */}
        {/* <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-600">
                  Aquí se insertará el formulario de Brevo
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="bg-gray-900 py-12 px-4 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <h3 className="mb-2 text-xl font-bold">REVerdeSER</h3>
                <p className="text-gray-400">
                  Voluntariado en las Montañas Azules
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
                <a
                  href="tel:+584245181651"
                  className="flex items-center gap-2 text-white transition-colors hover:text-green-400"
                  aria-label="Llamar por teléfono"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+58 424 518 1651</span>
                </a>
                <a
                  href="https://www.instagram.com/raicesagroecologica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white transition-colors hover:text-green-400"
                  aria-label="Seguir en Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@raicesagroecologica</span>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 REVerdeSER. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
