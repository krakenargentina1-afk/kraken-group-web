"use client";

import React, { cloneElement, isValidElement, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  Forklift,
  Gauge,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  Wrench,
  X,
} from "lucide-react";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={cn("border", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", size, variant, asChild = false, children, ...props }) {
  const sizeClass = size === "lg" ? "min-h-12" : "min-h-10";
  const variantClass = variant === "outline" ? "border" : "";
  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500/60 disabled:pointer-events-none disabled:opacity-50",
    sizeClass,
    variantClass,
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: cn(baseClass, children.props.className || ""),
    });
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}

const COMPANY_NAME = "KRAKEN GROUP";
const COMPANY_LEGAL_NAME = "Kraken Group";
const LOGO_SRC = "/imagenes/logo-kraken-group.png";
const WHATSAPP = "5491131250453"; // Cambiar por el WhatsApp comercial definitivo.
const EMAIL = "krakenargentina1@gmail.com"; // Cambiar por el mail comercial definitivo.
const UBICACION = "Buenos Aires · Argentina";

const navItems = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Industrias", href: "#industrias" },
  { label: "Trabajos", href: "#galeria" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const metricas = [
  { numero: "A medida", texto: "Diseño según espacio, carga y operación" },
  { numero: "B2B", texto: "Pensado para fábricas, depósitos e industrias" },
  { numero: "Robusto", texto: "Estructuras metálicas para trabajo exigente" },
];

const soluciones = [
  {
    titulo: "Racks selectivos para pallets",
    bajada:
      "La solución más versátil para depósitos industriales, logística y almacenamiento de mercadería palletizada.",
    imagen: "/imagenes/racks/rack-selectivo-pallets.jpg",
    puntos: [
      "Bastidores galvanizados",
      "Largueros rojos o naranjas reforzados",
      "Niveles regulables",
      "Diseño según peso por nivel",
    ],
  },
  {
    titulo: "Racks picking y carga manual",
    bajada:
      "Para organizar cajas, repuestos, insumos, autopartes, herramientas y mercadería de rotación diaria.",
    imagen: "/imagenes/racks/rack-picking-carga-manual.jpg",
    puntos: [
      "Estantes metálicos",
      "Módulos configurables",
      "Acceso rápido al producto",
      "Ideal para preparación de pedidos",
    ],
  },
  {
    titulo: "Estructuras industriales a medida",
    bajada: "Fabricación especial para necesidades que no se resuelven con un rack estándar.",
    imagen: "/imagenes/racks/estructura-industrial-medida.jpg",
    puntos: ["Corte láser", "Plegado CNC", "Soldadura", "Fabricación según plano o relevamiento"],
  },
];

const ventajas = [
  {
    icon: Ruler,
    titulo: "Diseño según tu operación",
    texto: "No partimos de un módulo genérico: calculamos medidas, niveles, pasillos, altura útil y tipo de carga.",
  },
  {
    icon: ShieldCheck,
    titulo: "Construcción industrial",
    texto: "Estructuras pensadas para uso real en fábrica, depósito, logística y almacenamiento pesado.",
  },
  {
    icon: Wrench,
    titulo: "Fabricación y respuesta",
    texto: "Capacidad de fabricar, adaptar y resolver piezas especiales para que el proyecto cierre técnica y económicamente.",
  },
  {
    icon: Gauge,
    titulo: "Cotización competitiva",
    texto: "Si ya tenés un presupuesto, podemos revisarlo y proponer una alternativa más conveniente.",
  },
];

const industrias = [
  "Fábricas y metalúrgicas",
  "Centros logísticos",
  "Depósitos industriales",
  "Autopartistas",
  "Distribuidoras mayoristas",
  "Talleres y mantenimiento",
  "Comercios con stock pesado",
  "Empresas de e-commerce",
];

const galeria = [
  { titulo: "Rack industrial instalado", imagen: "/imagenes/racks/galeria-rack-industrial-1.jpg" },
  { titulo: "Bastidor galvanizado", imagen: "/imagenes/racks/galeria-bastidor-galvanizado.jpg" },
  { titulo: "Largueros reforzados", imagen: "/imagenes/racks/galeria-largueros-naranjas.jpg" },
  { titulo: "Depósito con racks a medida", imagen: "/imagenes/racks/galeria-deposito-industrial.jpg" },
  { titulo: "Detalle de unión y seguridad", imagen: "/imagenes/racks/galeria-detalle-union.jpg" },
  { titulo: "Rack para carga manual", imagen: "/imagenes/racks/galeria-picking.jpg" },
];

const proceso = [
  {
    paso: "01",
    titulo: "Relevamos la necesidad",
    texto: "Medidas disponibles, tipo de mercadería, peso, operación diaria, altura útil y circulación de autoelevador o zorra.",
  },
  {
    paso: "02",
    titulo: "Definimos la solución",
    texto: "Proponemos tipo de rack, cantidad de niveles, profundidad, largo, terminación y configuración conveniente.",
  },
  {
    paso: "03",
    titulo: "Cotizamos claro",
    texto: "Armamos una propuesta entendible para compras, mantenimiento o gerencia, con foco técnico y comercial.",
  },
  {
    paso: "04",
    titulo: "Fabricamos y entregamos",
    texto: "Coordinamos fabricación, terminación, logística y entrega según el alcance del proyecto.",
  },
];

const faq = [
  {
    pregunta: "¿Fabrican racks a medida?",
    respuesta:
      "Sí. La idea principal es cotizar según el espacio disponible, el tipo de carga, la altura útil, la operación diaria y el peso requerido por nivel.",
  },
  {
    pregunta: "¿Puedo enviar una cotización que ya tengo?",
    respuesta:
      "Sí. Podemos revisar presupuestos existentes y proponer una alternativa más conveniente cuando sea posible, sin resignar robustez ni criterio técnico.",
  },
  {
    pregunta: "¿Qué datos necesitan para cotizar?",
    respuesta:
      "Medidas del espacio, peso aproximado por nivel, tipo de producto a almacenar, cantidad de niveles deseados, ubicación de entrega y si la carga será manual o con autoelevador.",
  },
  {
    pregunta: "¿La web sirve para vender a industrias y también a comercios?",
    respuesta:
      "Sí. Está pensada principalmente para industrias, fábricas, depósitos y logística, pero también puede captar consultas de talleres, comercios y distribuidores con stock pesado.",
  },
];

const catalogoRapido = [
  {
    titulo: "Tramos iniciales",
    texto: "Módulos completos para comenzar una línea de racks industriales.",
    detalle: "Ideal para depósitos que necesitan una solución rápida y ampliable.",
  },
  {
    titulo: "Tramos adicionales",
    texto: "Extensiones para ampliar una línea existente de racks.",
    detalle: "Permite crecer por etapas sin rehacer toda la estructura.",
  },
  {
    titulo: "Bastidores galvanizados",
    texto: "Laterales estructurales para racks selectivos, picking o carga pesada.",
    detalle: "Se definen por altura, profundidad y carga requerida.",
  },
  {
    titulo: "Largueros reforzados",
    texto: "Vigas frontales para sostener pallets, planos metálicos o cargas manuales.",
    detalle: "Se calculan por luz libre, peso y tipo de mercadería.",
  },
  {
    titulo: "Planos metálicos",
    texto: "Superficies de apoyo para cajas, repuestos, herramientas o productos sueltos.",
    detalle: "Pensados para racks picking y carga manual.",
  },
  {
    titulo: "Accesorios y seguridad",
    texto: "Protecciones, topes, vinculaciones, anclajes y piezas especiales.",
    detalle: "Complementos para mejorar seguridad y operación.",
  },
];

const casosUso = [
  {
    titulo: "Depósito de autopartes",
    texto: "Racks picking para repuestos, cajas y mercadería de rotación diaria.",
    resultado: "Más orden, acceso rápido y mejor control del stock.",
  },
  {
    titulo: "Fábrica con insumos pesados",
    texto: "Racks selectivos para pallets, materias primas y producto terminado.",
    resultado: "Mayor aprovechamiento de altura y circulación más clara.",
  },
  {
    titulo: "Centro logístico",
    texto: "Configuración por pasillos, niveles y zonas de preparación de pedidos.",
    resultado: "Operación más ágil y almacenamiento escalable.",
  },
];

const problemas = [
  ["Stock mal aprovechado", "La mercadería ocupa más metros de los necesarios y complica la circulación."],
  ["Riesgo operativo", "Racks débiles, mal dimensionados o improvisados pueden traer problemas de seguridad."],
  ["Pérdida de productividad", "Cuando encontrar, mover o preparar pedidos lleva más tiempo, toda la operación se vuelve más cara."],
  ["Compras sin criterio técnico", "Un rack barato pero mal elegido puede terminar saliendo más caro."],
];


const datosCotizacion = [
  { icon: Ruler, texto: "Medidas del espacio" },
  { icon: Boxes, texto: "Tipo de carga" },
  { icon: Forklift, texto: "Carga manual o autoelevador" },
  { icon: ClipboardList, texto: "Cantidad de niveles" },
  { icon: Truck, texto: "Ubicación de entrega" },
  { icon: Mail, texto: "Presupuesto previo si tiene" },
];

const diferenciales = [
  {
    icon: Building2,
    titulo: "Enfoque industrial",
    texto: "Propuestas claras para áreas de compras, depósitos, logística, producción y mantenimiento.",
  },
  {
    icon: Warehouse,
    titulo: "Valor técnico y comercial",
    texto: "Priorizamos orden, seguridad, capacidad de carga, aprovechamiento del espacio y asesoramiento técnico.",
  },
  {
    icon: MessageCircle,
    titulo: "Contacto directo",
    texto: "El contacto directo por WhatsApp permite avanzar más rápido con la cotización.",
  },
];

function buildWhatsappText({ nombre, empresa, telefono, mensaje }) {
  return encodeURIComponent(
    `Hola, quiero cotizar racks industriales.\n\nNombre: ${nombre}\nEmpresa: ${empresa}\nTeléfono: ${telefono}\nConsulta: ${mensaje}\n\nTambién puedo enviar fotos, medidas o una cotización previa.`
  );
}

function validatePageData() {
  const tests = [
    {
      name: "faq debe tener preguntas válidas",
      pass: Array.isArray(faq) && faq.length >= 4 && faq.every((item) => item.pregunta && item.respuesta),
    },
    {
      name: "catálogo debe tener llamadas a consulta",
      pass: Array.isArray(catalogoRapido) && catalogoRapido.length >= 6 && catalogoRapido.every((item) => item.titulo && item.texto),
    },
    {
      name: "mensaje de WhatsApp debe codificar saltos de línea",
      pass: buildWhatsappText({ nombre: "Test", empresa: "Empresa", telefono: "123", mensaje: "Consulta" }).includes("%0A"),
    },
  ];

  if (typeof console !== "undefined") {
    tests.forEach((test) => {
      if (!test.pass) console.warn(`Validación fallida: ${test.name}`);
    });
  }

  return tests;
}

function LogoMarca() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-red-400/40 bg-[linear-gradient(145deg,#2a2a2a,#0b0b0b_55%,#8b0f18)] shadow-lg shadow-red-950/40">
        <span className="text-xl font-black tracking-tight">K</span>
        <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg shadow-red-950/40">
      <img
        src={LOGO_SRC}
        alt={`${COMPANY_LEGAL_NAME} logo`}
        onError={() => setError(true)}
        className="h-full w-full object-contain p-1.5"
      />
    </div>
  );
}

function FotoReal({ src, alt, className = "" }) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[linear-gradient(135deg,#111,#242424_45%,#090909)] ${className}`}>
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="h-16 w-16 rounded-2xl border border-red-500/40 bg-red-600/10 p-4 text-red-400 shadow-lg shadow-red-950/40">
            <Warehouse className="h-full w-full" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Imagen no disponible</p>
            <p className="mt-1 text-xs text-neutral-400">No se encontró: {src}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
  );
}

export default function WebRacksIndustriales() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });

  useMemo(() => validatePageData(), []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${COMPANY_LEGAL_NAME} | Racks industriales a medida`;
      const description = "Fabricación de racks metálicos industriales a medida para depósitos, fábricas, logística y empresas. Cotización directa por WhatsApp.";
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }
  }, []);

  const whatsappText = buildWhatsappText(form);

  return (
    <main className="min-h-screen scroll-smooth bg-[#070707] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(193,18,31,.22),transparent_32%),radial-gradient(circle_at_90%_0%,rgba(120,120,120,.16),transparent_28%),linear-gradient(120deg,#050505,#111,#050505)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:38px_38px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <LogoMarca />
            <div>
              <p className="text-base font-black leading-none tracking-wide">{COMPANY_NAME}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-red-300">Racks metálicos</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" className="rounded-2xl border-white/15 bg-white/[0.03] text-white hover:bg-white/10" asChild>
              <a href={`mailto:${EMAIL}`}>Enviar plano</a>
            </Button>
            <Button className="rounded-2xl bg-red-700 text-white shadow-lg shadow-red-950/40 hover:bg-red-600" asChild>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                Cotizar ahora
              </a>
            </Button>
          </div>

          <button className="rounded-xl border border-white/10 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2 rounded-2xl bg-red-700 text-white hover:bg-red-600" asChild>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-950/25 px-4 py-2 text-sm font-semibold text-red-100 shadow-lg shadow-red-950/20">
              <Sparkles className="h-4 w-4 text-red-400" />
              Soluciones industriales de almacenamiento
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
              Racks metálicos a medida para depósitos, fábricas e industrias.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Diseñamos y fabricamos estructuras robustas para ordenar stock, aprovechar metros cuadrados y soportar cargas reales de trabajo industrial.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl bg-red-700 px-7 text-base font-bold text-white shadow-xl shadow-red-950/40 hover:bg-red-600" asChild>
                <a href="#contacto">
                  Pedir cotización <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/[0.04] px-7 text-base text-white hover:bg-white/10" asChild>
                <a href="#soluciones">Ver soluciones</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metricas.map((m) => (
                <div key={m.numero} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-black text-red-300">{m.numero}</p>
                  <p className="mt-1 text-sm leading-5 text-neutral-400">{m.texto}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[2.3rem] bg-red-800/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#191919,#050505)] p-3 shadow-2xl shadow-black/60">
              <FotoReal src="/imagenes/racks/rack-hero-principal.jpg" alt="Foto principal de rack industrial metálico" className="h-[430px] rounded-[1.5rem] lg:h-[520px]" />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-black/75 p-5 backdrop-blur">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Ideal para</p>
                    <p className="text-lg font-black">Pallets · Cajas · Repuestos · Insumos</p>
                  </div>
                  <div className="rounded-2xl bg-red-700 px-4 py-3 text-sm font-bold text-white">Uso industrial</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/45">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {ventajas.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.titulo} className="rounded-3xl border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] text-white shadow-xl shadow-black/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/35 text-red-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black">{v.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{v.texto}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>


      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Catálogo rápido</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Productos claros para cotizar más fácil</h2>
            </div>
            <p className="max-w-xl text-neutral-400">
              Componentes y soluciones disponibles para armar un sistema de almacenamiento según la necesidad de cada empresa.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {catalogoRapido.map((item) => (
              <div key={item.titulo} className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-xl shadow-black/25">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-900/30 text-red-300">
                  <Boxes className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{item.texto}</p>
                <p className="mt-3 text-xs leading-5 text-neutral-500">{item.detalle}</p>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-300 hover:text-red-200">
                  Consultar precio <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">El problema</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Un depósito desordenado cuesta tiempo, espacio y plata.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problemas.map(([titulo, texto]) => (
            <div key={titulo} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <CheckCircle2 className="mb-4 h-6 w-6 text-red-400" />
              <h3 className="font-black">{titulo}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="soluciones" className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Soluciones</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Racks para trabajo industrial real</h2>
            </div>
            <p className="max-w-xl text-neutral-400">
              Ofrecemos soluciones de almacenamiento adaptadas a cada operación, con configuraciones según medidas, cargas y forma de trabajo.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {soluciones.map((p) => (
              <Card key={p.titulo} className="group overflow-hidden rounded-[2rem] border-white/10 bg-black text-white shadow-2xl shadow-black/30">
                <FotoReal src={p.imagen} alt={p.titulo} className="h-56" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-black">{p.titulo}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-400">{p.bajada}</p>
                  <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                    {p.puntos.map((item) => (
                      <li key={item} className="flex gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="industrias" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Clientes objetivo</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Soluciones para empresas que necesitan ordenar stock y ganar espacio.</h2>
          <p className="mt-5 leading-8 text-neutral-400">
            Trabajamos con fábricas, depósitos, centros logísticos, talleres, distribuidores y empresas que necesitan estructuras robustas para almacenamiento.
          </p>
          <div className="mt-7 rounded-3xl border border-red-500/25 bg-red-950/20 p-6">
            <p className="text-lg font-black">Presupuesto previo</p>
            <p className="mt-2 text-neutral-300">
              Si ya contás con una cotización, podemos revisarla y evaluar una propuesta alternativa según medidas, carga y necesidad operativa.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {industrias.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/15">
              <Factory className="h-6 w-6 shrink-0 text-red-400" />
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(135deg,#121212,#050505)]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Qué pedir para cotizar</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Con pocos datos podemos orientar una propuesta.</h2>
            <p className="mt-5 text-neutral-400">
              Con estos datos podemos preparar una cotización más precisa y una propuesta acorde al uso real del rack.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {datosCotizacion.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.texto} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 p-4">
                  <div className="rounded-xl bg-red-700/20 p-2 text-red-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold">{item.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Casos de aplicación</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Soluciones aplicadas a distintos tipos de operación</h2>
          </div>
          <p className="max-w-xl text-neutral-400">
            Cada solución se adapta al tipo de mercadería, peso, espacio disponible y forma de operación de la empresa.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {casosUso.map((caso) => (
            <div key={caso.titulo} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-6 shadow-xl shadow-black/25">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700/20 text-red-300">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black">{caso.titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{caso.texto}</p>
              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-950/20 p-4">
                <p className="text-sm font-bold text-red-200">Resultado buscado</p>
                <p className="mt-1 text-sm leading-6 text-neutral-300">{caso.resultado}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Trabajos reales</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Galería de trabajos y detalles técnicos</h2>
          </div>
          <p className="max-w-xl text-neutral-400">
            Conocé detalles de fabricación, terminaciones y configuraciones de racks industriales para distintos tipos de almacenamiento.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((item) => (
            <div key={item.titulo} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25">
              <FotoReal src={item.imagen} alt={item.titulo} className="h-72" />
              <div className="p-5">
                <p className="font-black">{item.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Proceso comercial</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">De la consulta al rack fabricado</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {proceso.map((p) => (
              <div key={p.paso} className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-xl shadow-black/25">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-900/30 text-xl font-black text-red-200">
                  {p.paso}
                </div>
                <h3 className="text-lg font-black">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Diferencial</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Asesoramiento técnico y respuesta comercial.</h2>
          <p className="mt-5 leading-8 text-neutral-400">
            Analizamos la necesidad de almacenamiento y proponemos una solución clara, robusta y competitiva.
          </p>
        </div>
        <div className="grid gap-4">
          {diferenciales.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.titulo} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-700/20 text-red-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{item.texto}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(135deg,#050505,#151515,#050505)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Información útil antes de cotizar</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.pregunta} className="rounded-3xl border border-white/10 bg-black/55 p-6">
                <h3 className="font-black">{item.pregunta}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Cotización</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Contanos qué necesitás y armamos una propuesta.</h2>
          <p className="mt-5 leading-8 text-neutral-400">
            Podés mandar medidas, fotos del depósito, tipo de carga o una cotización previa para que la revisemos.
          </p>

          <div className="mt-8 space-y-4 text-neutral-300">
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-400" /> 1131250453
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-400" /> {krakenargentina1@gmail.com}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-400" /> {UBICACION}
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-red-500/25 bg-red-950/20 p-6">
            <p className="text-lg font-black">Revisión de cotizaciones</p>
            <p className="mt-2 text-neutral-300">
              Mandanos lo que necesitás almacenar y, si ya tenés una cotización, podemos revisarla para evaluar una alternativa conveniente.
            </p>
          </div>
        </div>

        <Card className="rounded-[2rem] border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025))] text-white shadow-2xl shadow-black/40">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500"
                placeholder="Empresa"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500 sm:col-span-2"
                placeholder="Teléfono / WhatsApp"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              />
              <textarea
                className="min-h-[150px] rounded-2xl border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500 sm:col-span-2"
                placeholder="Ej: necesito racks para pallets de 1000 kg, depósito de 12 m x 20 m, carga con autoelevador, 3 niveles..."
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-red-700 text-white shadow-lg shadow-red-950/40 hover:bg-red-600" asChild>
                <a href={`https://wa.me/${WHATSAPP}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Enviar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/[0.04] text-white hover:bg-white/10" asChild>
                <a href={`mailto:${EMAIL}`}>Enviar email</a>
              </Button>
            </div>

            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Para una cotización más precisa, podés enviar fotos del depósito, medidas aproximadas y peso estimado por nivel.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-white">{COMPANY_NAME}</p>
            <p className="mt-1">Racks metálicos, estructuras y soluciones industriales de almacenamiento para empresas.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
