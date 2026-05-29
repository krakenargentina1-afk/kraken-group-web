import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, MessageCircle, Ruler, ShieldCheck, Wrench } from "lucide-react";
import { company, productWhatsappUrl, products } from "./data";

function SectionList({ title, items }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/25">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-red-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProductDetail({ product }) {
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(185,28,28,.18),transparent_26%),linear-gradient(135deg,#050607,#111315_48%,#050607)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.055] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:46px_46px]" />

      <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg shadow-red-950/35">
              <Image src="/imagenes/logo-kraken-group.png" alt="Kraken Group" fill sizes="48px" className="object-contain p-1.5" />
            </span>
            <span>
              <span className="block text-base font-black tracking-wide">{company.name}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-red-300">Catalogo industrial</span>
            </span>
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-black text-white transition hover:border-red-400/50 hover:bg-white/[0.08]">
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>
      </header>

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image src={product.image} alt={product.name} fill priority sizes="100vw" className="object-cover opacity-28" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,.92)_42%,rgba(5,6,7,.56)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.06),#050607_98%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.94fr_1.06fr] lg:px-8 lg:py-20">
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Ficha tecnica</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{product.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={productWhatsappUrl(product)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-black text-white shadow-lg shadow-red-950/40 transition hover:bg-red-600">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a href={`mailto:${company.email}?subject=Cotizacion ${encodeURIComponent(product.name)}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-black text-white transition hover:border-red-400/50 hover:bg-white/[0.08]">
                Cotizar
              </a>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl shadow-black/50">
            <div className="relative h-[340px] sm:h-[470px]">
              <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.65))]" />
            </div>
            <div className="flex flex-col gap-4 border-t border-white/10 p-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Precio desde</p>
                <p className="mt-1 text-4xl font-black">{product.price}</p>
              </div>
              <p className="rounded-full border border-red-400/30 bg-red-950/35 px-4 py-2 text-sm font-black text-red-100">{product.volume}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <Ruler className="h-8 w-8 text-red-400" />
            <h2 className="mt-5 text-xl font-black">Desarrollo tecnico</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">Configuracion segun medidas del rack, peso, rotacion, tipo de producto y forma de reposicion.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <ShieldCheck className="h-8 w-8 text-red-400" />
            <h2 className="mt-5 text-xl font-black">Uso industrial</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">Componentes pensados para deposito, planta, picking, mantenimiento y logistica de alta exigencia.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <Wrench className="h-8 w-8 text-red-400" />
            <h2 className="mt-5 text-xl font-black">Integracion</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">Instalacion sobre estructuras nuevas o existentes, con adaptaciones por sector y volumen.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-16 lg:grid-cols-2 lg:px-8">
        <SectionList title="Especificaciones tecnicas" items={product.specs} />
        <SectionList title="Capacidades operativas" items={product.capacities} />
        <SectionList title="Materiales" items={product.materials} />
        <SectionList title="Aplicaciones" items={product.applications} />
      </section>

      <section className="border-y border-white/10 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Galeria</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Terminacion y aplicacion industrial.</h2>
            </div>
            <a href={productWhatsappUrl(product)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-black text-white shadow-lg shadow-red-950/40 transition hover:bg-red-600">
              Pedir cotizacion <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {product.gallery.map((image, index) => (
              <div key={image} className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl shadow-black/30">
                <Image src={image} alt={`${product.name} galeria ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Mas productos</p>
            <h2 className="mt-3 text-3xl font-black">Catalogo relacionado</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/productos/${item.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/25">
              <div className="relative h-52">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.72))]" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black">{item.name}</h3>
                <p className="mt-2 text-sm text-neutral-400">{item.price} - {item.volume}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
