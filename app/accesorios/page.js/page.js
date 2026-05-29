"use client";

import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Cog,
  Factory,
  Boxes,
} from "lucide-react";

export default function Home() {
  const productos = [
    {
      titulo: "Rodillos para Rack Dinámico",
      descripcion:
        "Rodillos industriales galvanizados para sistemas FIFO y movimiento gravitacional de pallets y cajas.",
      imagen: "/imagenes/racks/galeria-rodillos.jpg",
    },
    {
      titulo: "Carton Flow",
      descripcion:
        "Sistemas dinámicos para picking manual y preparación eficiente de pedidos.",
      imagen: "/imagenes/racks/galeria-carton-flow.jpg",
    },
    {
      titulo: "Soportes para Bobinas",
      descripcion:
        "Fabricación industrial de estructuras y soportes metálicos para bobinas y materiales pesados.",
      imagen: "/imagenes/racks/galeria-bobinas.jpg",
    },
    {
      titulo: "Accesorios para Picking",
      descripcion:
        "Separadores, bandejas, guías y accesorios metálicos para depósitos industriales.",
      imagen: "/imagenes/racks/galeria-picking.jpg",
    },
    {
      titulo: "Flow Rack",
      descripcion:
        "Estructuras dinámicas diseñadas para mejorar circulación y optimizar espacios.",
      imagen: "/imagenes/racks/galeria-flow-rack.jpg",
    },
    {
      titulo: "Protectores y Seguridad",
      descripcion:
        "Protectores metálicos y accesorios de seguridad para racks industriales.",
      imagen: "/imagenes/racks/galeria-protecciones.jpg",
    },
  ];

  return (
    <main className="bg-[#070b14] text-white min-h-screen">
      {/* HEADER */}

      <header className="border-b border-white/10 backdrop-blur sticky top-0 z-50 bg-[#070b14]/90">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/imagenes/logo-kraken-group.png"
              alt="Kraken Group"
              width={55}
              height={55}
            />

            <div>
              <h1 className="font-black text-xl tracking-wide">
                KRAKEN GROUP
              </h1>

              <p className="text-xs text-zinc-400 tracking-[0.25em] uppercase">
                Accesorios Industriales
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#productos" className="hover:text-red-400 transition">
              Productos
            </a>

            <a href="#fabricacion" className="hover:text-red-400 transition">
              Fabricación
            </a>

            <a href="#soluciones" className="hover:text-red-400 transition">
              Soluciones
            </a>

            <a href="#contacto" className="hover:text-red-400 transition">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/5490000000000"
            className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-semibold text-sm"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-300 text-sm mb-8">
              <ShieldCheck className="h-4 w-4" />
              Soluciones industriales para logística
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
              Accesorios y sistemas dinámicos para racks industriales.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              Fabricamos rodillos, carton flow, soportes de bobinas y
              accesorios metálicos para optimizar depósitos, logística y
              operaciones industriales.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#productos"
                className="bg-red-500 hover:bg-red-600 transition px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >
                Ver productos
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#contacto"
                className="border border-white/10 hover:border-red-500 transition px-7 py-4 rounded-2xl font-semibold"
              >
                Solicitar cotización
              </a>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-black text-2xl text-red-400">FIFO</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Sistemas dinámicos industriales
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-black text-2xl text-red-400">B2B</h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Soluciones para depósitos
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-black text-2xl text-red-400">
                  Industrial
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Fabricación metálica técnica
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-red-500/20 blur-3xl rounded-full" />

            <div className="relative bg-black/40 border border-white/10 rounded-[2rem] overflow-hidden">
              <Image
                src="/imagenes/racks/rack-hero-principal.jpg"
                alt="Kraken Group"
                width={1200}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}

      <section id="productos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-red-400 font-semibold uppercase tracking-[0.25em] mb-4">
              Productos
            </p>

            <h2 className="text-5xl font-black mb-6">
              Accesorios industriales para racks y logística.
            </h2>

            <p className="text-zinc-400 text-lg max-w-3xl">
              Soluciones diseñadas para depósitos, centros logísticos,
              fábricas e industrias con operaciones reales de almacenamiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {productos.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-500/40 transition"
              >
                <div className="relative h-72">
                  <Image
                    src={item.imagen}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4">{item.titulo}</h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}

      <section
        id="soluciones"
        className="py-24 bg-gradient-to-b from-black to-[#0c111d]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <Boxes className="h-12 w-12 text-red-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                Optimización de depósitos
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Sistemas dinámicos pensados para mejorar circulación, picking y
                aprovechamiento del espacio industrial.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <Cog className="h-12 w-12 text-red-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                Fabricación técnica
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Producción de accesorios metálicos industriales con enfoque en
                resistencia, durabilidad y uso intensivo.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <Factory className="h-12 w-12 text-red-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                Soluciones industriales
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Diseños adaptados a depósitos, fábricas y centros logísticos con
                necesidades reales de operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FABRICACION */}

      <section id="fabricacion" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-red-400 font-semibold uppercase tracking-[0.25em] mb-4">
              Fabricación
            </p>

            <h2 className="text-5xl font-black mb-6">
              Producción industrial y desarrollo metálico.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="/imagenes/racks/galeria-bastidor-galvanizado.jpg"
              alt="Fabricación"
              width={1200}
              height={900}
              className="rounded-[2rem] border border-white/10"
            />

            <Image
              src="/imagenes/racks/galeria-largueros-naranjas.jpg"
              alt="Producción"
              width={1200}
              height={900}
              className="rounded-[2rem] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className="py-24 border-t border-white/10 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-red-400 font-semibold uppercase tracking-[0.25em] mb-4">
                Contacto
              </p>

              <h2 className="text-5xl font-black leading-tight mb-6">
                Hablemos de tu proyecto industrial.
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Desarrollamos soluciones metálicas y accesorios para depósitos,
                logística y almacenamiento industrial.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
              <div className="space-y-8">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>krakenargentina1@gmail.com</span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span>+54 9 11 0000 0000</span>
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>Buenos Aires, Argentina</span>
                </p>
              </div>

              <a
                href="https://wa.me/5490000000000"
                className="mt-10 inline-flex bg-red-500 hover:bg-red-600 transition px-7 py-4 rounded-2xl font-semibold items-center gap-2"
              >
                Solicitar cotización
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}