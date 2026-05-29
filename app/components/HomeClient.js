"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  ClipboardList,
  Factory,
  Forklift,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";
import { company, galleryImages, productos, whatsappNumber } from "../data/productos";

function Button({ children, variant = "primary", className = "", ...props }) {
  const styles =
    variant === "outline"
      ? "border border-white/15 bg-white/[0.04] text-white hover:border-red-400/50 hover:bg-white/[0.08]"
      : "bg-red-700 text-white shadow-lg shadow-red-950/40 hover:bg-red-600";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-red-500/70 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function IndustrialImage({ src, alt, className = "", priority = false }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-950 ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.74))]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}


const applications = [
  { icon: Warehouse, title: "Depositos y centros logisticos", text: "Frentes de picking mas ordenados, menor recorrido y reposicion por referencia." },
  { icon: Factory, title: "Lineas de produccion", text: "Flow rack, guias y soportes para abastecer insumos al borde de linea." },
  { icon: Forklift, title: "Almacenamiento industrial", text: "Adaptacion de racks existentes a nuevas cargas, productos o procesos." },
  { icon: Boxes, title: "E-commerce y distribucion", text: "Soluciones para cajas de alta rotacion y preparacion de pedidos con control visual." },
];

const quoteData = [
  { icon: Ruler, text: "Medidas del rack o sector" },
  { icon: Boxes, text: "Tipo de caja, bobina o producto" },
  { icon: Gauge, text: "Peso aproximado por unidad" },
  { icon: ClipboardList, text: "Cantidad de posiciones o carriles" },
  { icon: Forklift, text: "Operacion manual o con equipo" },
  { icon: Truck, text: "Ubicacion de entrega" },
];

export default function HomeClient() {
  const mainWhatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero cotizar accesorios para racks industriales.")}`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(185,28,28,.2),transparent_28%),linear-gradient(135deg,#050607,#111315_48%,#050607)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:46px_46px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Kraken Group inicio">
            <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg shadow-red-950/35">
              <Image src="/imagenes/logo-kraken-group.png" alt="Kraken Group" fill sizes="48px" className="object-contain p-1.5" />
            </span>
            <span>
              <span className="block text-base font-black tracking-wide">{company.name}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-red-300">Industrial rack systems</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-neutral-300 lg:flex">
            <a href="#productos" className="hover:text-white">Productos</a>
            <a href="#aplicaciones" className="hover:text-white">Aplicaciones</a>
            <a href="#galeria" className="hover:text-white">Galeria</a>
            <a href="#contacto" className="hover:text-white">Cotizacion</a>
          </nav>

          <Button href={mainWhatsapp} target="_blank" rel="noreferrer" className="hidden lg:inline-flex">
            Cotizar <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image src="/imagenes/racks/rack-hero-principal.jpg" alt="Rack industrial Kraken Group" fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,.92)_38%,rgba(5,6,7,.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.08),#050607_98%)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-950/25 px-4 py-2 text-sm font-bold text-red-100 shadow-lg shadow-red-950/25">
              <Sparkles className="h-4 w-4 text-red-300" />
              Catalogo premium de accesorios logisticos
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] md:text-6xl lg:text-7xl">
              Accesorios industriales para racks de alta exigencia.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Rodillos para racks dinamicos, Carton Flow, Flow Rack, soportes de bobinas, guias metalicas y componentes galvanizados para logistica industrial en Argentina.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#productos">Ver catalogo <ArrowRight className="h-5 w-5" /></Button>
              <Button href={mainWhatsapp} target="_blank" rel="noreferrer" variant="outline">Cotizar por WhatsApp</Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["B2B industrial", "A medida", "Galvanizados"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/48 p-4 shadow-xl shadow-black/30 backdrop-blur">
                  <p className="text-xl font-black">{item}</p>
                  <p className="mt-2 text-sm leading-5 text-neutral-400">Soluciones para deposito, picking, produccion y distribucion.</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative hidden lg:block">
            <div className="absolute -inset-5 rounded-[2rem] bg-red-700/12 blur-3xl" />
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl shadow-black/50">
              <IndustrialImage src="/imagenes/racks/galeria-detalle-union.jpg" alt="Detalle metalico de rack industrial" className="h-[520px]" priority />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3 p-6">
                {["Rodillos", "Guias", "Soportes", "Picking"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/68 px-4 py-3 text-sm font-black backdrop-blur">{item}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/45">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Catalogo industrial</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">Componentes para convertir racks en sistemas logisticos.</h2>
          </div>
          <p className="max-w-xl leading-7 text-neutral-400">
            Productos para mejorar flujo, seguridad, ergonomia y disponibilidad de mercaderia en operaciones de picking, almacenamiento y produccion.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] shadow-2xl shadow-black/30"
            >
              <Link href={`/productos/${product.slug}`} className="block">
                <IndustrialImage src={product.imagen} alt={product.nombre} className="h-56" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{product.nombre}</h3>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-red-400 transition group-hover:translate-x-1" />
                  </div>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-400">{product.resumen}</p>
                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-2xl font-black text-white">{product.precio}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">{product.volumen}</p>
                    </div>
                    <span className="rounded-full border border-red-400/30 bg-red-950/35 px-3 py-1 text-xs font-black text-red-100">Ver ficha</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="aplicaciones" className="border-y border-white/10 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Aplicaciones</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Soluciones para depositos que necesitan velocidad, orden y control.</h2>
            </div>
            <p className="leading-8 text-neutral-400">
              Cada accesorio se define por producto, carga, rotacion, tipo de rack y modo de reposicion. El resultado es una operacion mas clara y medible.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-700/20 text-red-300"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Galeria profesional</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Detalles, terminaciones y sistemas aplicados.</h2>
          </div>
          <Button href="#contacto" variant="outline">Consultar componente</Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/25">
              <IndustrialImage src={image} alt={`Galeria industrial Kraken Group ${index + 1}`} className="h-72" />
              <div className="flex items-center justify-between gap-4 p-5">
                <p className="font-black">{["Componentes galvanizados", "Uniones metalicas", "Picking industrial", "Estructuras a medida", "Depositos industriales", "Racks aplicados"][index]}</p>
                <ArrowRight className="h-4 w-4 text-red-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-y border-white/10 bg-[#0b0c0d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Cotizacion</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Cotiza accesorios para racks industriales.</h2>
            <p className="mt-5 leading-8 text-neutral-400">
              Envia fotos del rack, medidas, peso por unidad, tipo de carga y cantidad de posiciones. Respondemos con una propuesta tecnica para tu operacion.
            </p>
            <div className="mt-8 space-y-4 text-neutral-300">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-red-400" /><a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a></p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-red-400" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-red-400" />{company.location}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] p-6 shadow-2xl shadow-black/40 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {quoteData.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-4">
                    <div className="rounded-xl bg-red-700/20 p-2 text-red-300"><Icon className="h-5 w-5" /></div>
                    <p className="font-semibold">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={mainWhatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
              <Button href={`mailto:${company.email}`} variant="outline">Enviar email</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-white">{company.name}</p>
            <p className="mt-1">Accesorios, componentes y soluciones logisticas para racks industriales.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {productos.slice(0, 4).map((product) => (
              <Link key={product.slug} href={`/productos/${product.slug}`} className="hover:text-white">{product.nombreCorto}</Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
