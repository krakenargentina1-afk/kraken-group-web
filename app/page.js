"use client";

import React, { cloneElement, isValidElement, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Factory,
  Forklift,
  Gauge,
  Layers3,
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

function Button({ className = "", size, variant, asChild = false, children, ...props }) {
  const sizeClass = size === "lg" ? "min-h-12 px-6" : "min-h-10 px-4";
  const variantClass =
    variant === "outline"
      ? "border border-white/15 bg-white/[0.04] text-white hover:border-red-400/45 hover:bg-white/[0.08]"
      : "bg-red-700 text-white shadow-lg shadow-red-950/35 hover:bg-red-600";
  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-red-500/60",
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

function Card({ className = "", children }) {
  return <div className={cn("border border-white/10 bg-white/[0.035]", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

const COMPANY_NAME = "KRAKEN GROUP";
const LOGO_SRC = "/imagenes/logo-kraken-group.png";
const WHATSAPP = "5491131250453";
const EMAIL = "krakenargentina1@gmail.com";
const PHONE = "1131250453";
const LOCATION = "Buenos Aires, Argentina";

const navItems = [
  { label: "Accesorios", href: "#accesorios" },
  { label: "Aplicaciones", href: "#aplicaciones" },
  { label: "Galería", href: "#galeria" },
  { label: "Proceso", href: "#proceso" },
  { label: "Cotización", href: "#contacto" },
];

const heroStats = [
  { value: "B2B", label: "Componentes para depósitos, fábricas y logística" },
  { value: "A medida", label: "Desarrollos según operación, carga y rotación" },
  { value: "Industrial", label: "Piezas metálicas para uso intensivo" },
];

const accesorios = [
  {
    title: "Rodillos para racks dinámicos",
    text: "Componentes para líneas de gravedad, avance controlado de cajas y reposición eficiente en operaciones FIFO.",
    image: "/imagenes/racks/galeria-detalle-union.jpg",
    points: ["Ejes y rodillos para carga continua", "Configuración según ancho de caja", "Integración en racks existentes"],
  },
  {
    title: "Carton Flow",
    text: "Soluciones para picking de alta rotación con carriles inclinados, separadores y componentes de guiado.",
    image: "/imagenes/racks/galeria-picking.jpg",
    points: ["Preparación de pedidos más rápida", "Frentes de picking ordenados", "Reposición desde la cara posterior"],
  },
  {
    title: "Flow Rack",
    text: "Módulos y accesorios para sistemas dinámicos de cajas, bins y productos de rotación constante.",
    image: "/imagenes/racks/rack-picking-carga-manual.jpg",
    points: ["Carriles por referencia", "Mayor densidad por metro", "Compatible con operación manual"],
  },
  {
    title: "Soportes de bobinas",
    text: "Piezas metálicas para alojar bobinas, rollos y materiales cilíndricos con acceso seguro y ordenado.",
    image: "/imagenes/racks/estructura-industrial-medida.jpg",
    points: ["Diseño según diámetro y peso", "Apoyos reforzados", "Fabricación especial"],
  },
  {
    title: "Guías metálicas",
    text: "Guías, topes y perfiles para direccionar cajas, bandejas, contenedores y cargas manuales dentro del rack.",
    image: "/imagenes/racks/galeria-bastidor-galvanizado.jpg",
    points: ["Terminación galvanizada", "Montaje simple", "Orden y seguridad operativa"],
  },
  {
    title: "Accesorios para picking",
    text: "Separadores, bandejas, niveles, protectores y componentes logísticos para acelerar la preparación de pedidos.",
    image: "/imagenes/racks/galeria-largueros-naranjas.jpg",
    points: ["Menos tiempo de búsqueda", "Mejor lectura del stock", "Soluciones por tipo de producto"],
  },
];

const productGallery = [
  { title: "Componentes galvanizados", image: "/imagenes/racks/galeria-bastidor-galvanizado.jpg" },
  { title: "Guías y uniones metálicas", image: "/imagenes/racks/galeria-detalle-union.jpg" },
  { title: "Líneas para picking", image: "/imagenes/racks/galeria-picking.jpg" },
  { title: "Estructuras a medida", image: "/imagenes/racks/estructura-industrial-medida.jpg" },
  { title: "Depósitos industriales", image: "/imagenes/racks/galeria-deposito-industrial.jpg" },
  { title: "Racks con accesorios logísticos", image: "/imagenes/racks/galeria-rack-industrial-1.jpg" },
];

const applications = [
  {
    icon: Warehouse,
    title: "Depósitos y centros logísticos",
    text: "Accesorios para ordenar frentes de picking, reducir recorridos y mejorar la reposición por referencia.",
  },
  {
    icon: Factory,
    title: "Líneas de producción",
    text: "Flow rack, soportes y guías para abastecimiento de insumos, piezas y materiales al borde de línea.",
  },
  {
    icon: Forklift,
    title: "Almacenamiento industrial",
    text: "Componentes para adaptar racks existentes a nuevas cargas, productos o formas de operación.",
  },
  {
    icon: Boxes,
    title: "E-commerce y distribución",
    text: "Soluciones para picking manual, cajas de alta rotación y preparación de pedidos con mayor control visual.",
  },
];

const advantages = [
  { icon: ShieldCheck, title: "Construcción robusta", text: "Piezas metálicas pensadas para operación diaria, golpes, carga repetida y uso industrial real." },
  { icon: Ruler, title: "Diseño técnico", text: "Medidas, apoyos, carriles y separaciones definidos según producto, peso y dinámica de trabajo." },
  { icon: Layers3, title: "Integración modular", text: "Accesorios para racks nuevos o existentes, con soluciones escalables por etapa o sector." },
  { icon: Gauge, title: "Respuesta comercial", text: "Cotizaciones claras para compras, mantenimiento, logística y responsables de depósito." },
];

const process = [
  { step: "01", title: "Relevamiento", text: "Analizamos producto, medidas, peso, rotación, tipo de rack y forma de carga o reposición." },
  { step: "02", title: "Solución técnica", text: "Definimos rodillos, guías, soportes, perfiles, niveles o accesorios según la operación." },
  { step: "03", title: "Cotización", text: "Armamos una propuesta concreta con alcance, cantidades y criterios de fabricación." },
  { step: "04", title: "Fabricación", text: "Coordinamos producción, terminación, entrega y soporte para la instalación del componente." },
];

const quoteData = [
  { icon: Ruler, text: "Medidas del rack o sector" },
  { icon: Boxes, text: "Tipo de caja, bobina o producto" },
  { icon: Gauge, text: "Peso aproximado por unidad" },
  { icon: ClipboardList, text: "Cantidad de posiciones o carriles" },
  { icon: Forklift, text: "Operación manual o con equipo" },
  { icon: Truck, text: "Ubicación de entrega" },
];

function buildWhatsappText({ name, company, phone, message }) {
  return encodeURIComponent(
    `Hola, quiero cotizar accesorios para racks industriales.\n\nNombre: ${name}\nEmpresa: ${company}\nTeléfono: ${phone}\nConsulta: ${message}\n\nPuedo enviar fotos, medidas o planos del rack.`
  );
}

function validatePageData() {
  const imagePaths = [
    "/imagenes/racks/rack-hero-principal.jpg",
    ...accesorios.map((item) => item.image),
    ...productGallery.map((item) => item.image),
  ];

  const tests = [
    imagePaths.every((path) => path.startsWith("/imagenes/racks/")),
    accesorios.length === 6 && accesorios.every((item) => item.title && item.text && item.points.length === 3),
    applications.length === 4 && process.length === 4,
  ];

  if (typeof console !== "undefined") {
    tests.forEach((pass, index) => {
      if (!pass) console.warn(`Validación de datos fallida ${index + 1}`);
    });
  }

  return tests;
}

function LogoMark() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-400/35 bg-[linear-gradient(145deg,#252525,#070707_55%,#7f111b)] shadow-lg shadow-red-950/40">
        <span className="text-xl font-black">K</span>
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black shadow-lg shadow-red-950/30">
      <img
        src={LOGO_SRC}
        alt={`${COMPANY_NAME} logo`}
        onError={() => setError(true)}
        className="h-full w-full object-contain p-1.5"
      />
    </div>
  );
}

function IndustrialImage({ src, alt, className = "" }) {
  return (
    <div className={cn("relative overflow-hidden bg-neutral-950", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.76))]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });

  useMemo(() => validatePageData(), []);

  useEffect(() => {
    document.title = `${COMPANY_NAME} | Accesorios para racks industriales`;
    const description =
      "Accesorios premium para racks industriales: rodillos, carton flow, flow rack, soportes de bobinas, guías metálicas y componentes galvanizados para depósitos y logística.";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
  }, []);

  const whatsappText = buildWhatsappText(form);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(185,28,28,.22),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(113,113,122,.16),transparent_28%),linear-gradient(135deg,#050607,#0d0f10_48%,#050607)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="KRAKEN GROUP inicio">
            <LogoMark />
            <div>
              <p className="text-base font-black leading-none tracking-wide">{COMPANY_NAME}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-red-300">Industrial Rack Accessories</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" asChild>
              <a href={`mailto:${EMAIL}`}>Enviar planos</a>
            </Button>
            <Button asChild>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                Cotizar
              </a>
            </Button>
          </div>

          <button
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2" asChild>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <img src="/imagenes/racks/rack-hero-principal.jpg" alt="Racks industriales Kraken Group" className="h-full w-full object-cover opacity-34" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,.9)_36%,rgba(5,6,7,.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,.1),#050607_98%)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-950/25 px-4 py-2 text-sm font-bold text-red-100 shadow-lg shadow-red-950/25">
              <Sparkles className="h-4 w-4 text-red-300" />
              Componentes premium para racks industriales
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal md:text-6xl lg:text-7xl">
              Accesorios para racks industriales de alto rendimiento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Rodillos, carton flow, flow rack, soportes de bobinas, guías metálicas y componentes galvanizados para depósitos, logística y picking profesional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contacto">
                  Pedir cotización <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#accesorios">Ver accesorios</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.value} className="rounded-lg border border-white/10 bg-black/45 p-4 backdrop-blur">
                  <p className="text-xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-xl bg-red-700/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-2xl shadow-black/50">
              <IndustrialImage src="/imagenes/racks/galeria-detalle-union.jpg" alt="Detalle de accesorios para racks industriales" className="h-[520px]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {["Rodillos", "Guías", "Soportes", "Picking"].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-black/65 px-4 py-3 text-sm font-bold backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/45">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-lg p-6 shadow-xl shadow-black/25">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-red-500/30 bg-red-950/35 text-red-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{item.text}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="accesorios" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Accesorios industriales</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">Componentes para convertir un rack en una herramienta logística.</h2>
          </div>
          <p className="max-w-xl leading-7 text-neutral-400">
            Desarrollamos piezas y sistemas para mejorar flujo, seguridad, ergonomía y disponibilidad de producto en operaciones de picking y almacenamiento.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {accesorios.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025))] shadow-2xl shadow-black/30"
            >
              <IndustrialImage src={item.image} alt={item.title} className="h-56" />
              <div className="p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 min-h-[96px] text-sm leading-6 text-neutral-400">{item.text}</p>
                <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="aplicaciones" className="border-y border-white/10 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Aplicaciones industriales</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Soluciones para depósitos que necesitan velocidad, orden y control.</h2>
            </div>
            <p className="leading-8 text-neutral-400">
              Los accesorios adecuados permiten adaptar racks a operaciones más exigentes sin rehacer toda la estructura. Cada componente se define por producto, carga, rotación y sector.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-lg p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-700/20 text-red-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Galería de productos</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Detalles, terminaciones y sistemas aplicados.</h2>
          </div>
          <Button variant="outline" asChild>
            <a href="#contacto">
              Consultar componente <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productGallery.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-xl shadow-black/25">
              <IndustrialImage src={item.image} alt={item.title} className="h-72" />
              <div className="flex items-center justify-between gap-4 p-5">
                <p className="font-black">{item.title}</p>
                <ArrowRight className="h-4 w-4 text-red-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="border-y border-white/10 bg-[linear-gradient(135deg,#111315,#050607)]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Proceso técnico comercial</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">De la necesidad al componente fabricado.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {process.map((item) => (
              <Card key={item.step} className="rounded-lg bg-black/55 p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-red-500/30 bg-red-950/35 text-lg font-black text-red-200">
                  {item.step}
                </div>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Datos para cotizar</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Con información precisa, la solución llega más rápido.</h2>
          <p className="mt-5 leading-8 text-neutral-400">
            Podés enviar fotos del rack, medidas del frente, profundidad, tipo de producto, peso por unidad y cantidad de posiciones necesarias.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {quoteData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="rounded-lg bg-red-700/20 p-2 text-red-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contacto" className="border-y border-white/10 bg-[#0b0c0d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">Cotización</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Cotizá accesorios para racks industriales.</h2>
            <p className="mt-5 leading-8 text-neutral-400">
              Contanos qué componente necesitás fabricar, adaptar o reemplazar. Podemos evaluar rodillos, carton flow, flow rack, soportes de bobinas, guías y accesorios logísticos.
            </p>

            <div className="mt-8 space-y-4 text-neutral-300">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href={`tel:${PHONE}`} className="hover:text-white">
                  {PHONE}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>{LOCATION}</span>
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-red-500/25 bg-red-950/20 p-6">
              <p className="text-lg font-black">Atención para empresas</p>
              <p className="mt-2 leading-7 text-neutral-300">
                Propuestas para compras, mantenimiento, ingeniería, logística y responsables de depósito que necesitan una solución técnica y comercial clara.
              </p>
            </div>
          </div>

          <Card className="rounded-lg bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] shadow-2xl shadow-black/40">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-neutral-300">
                  Nombre
                  <input
                    className="rounded-lg border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition focus:border-red-500"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-neutral-300">
                  Empresa
                  <input
                    className="rounded-lg border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition focus:border-red-500"
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-neutral-300 sm:col-span-2">
                  Teléfono / WhatsApp
                  <input
                    className="rounded-lg border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition focus:border-red-500"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-neutral-300 sm:col-span-2">
                  Consulta técnica
                  <textarea
                    className="min-h-[156px] rounded-lg border border-white/10 bg-black/65 px-4 py-3 text-white outline-none transition focus:border-red-500"
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={`https://wa.me/${WHATSAPP}?text=${whatsappText}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" /> Enviar por WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`mailto:${EMAIL}`}>Enviar email</a>
                </Button>
              </div>

              <p className="mt-5 text-xs leading-5 text-neutral-500">
                Para una cotización más precisa, enviá fotos del rack, medidas aproximadas, tipo de producto y peso estimado.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-black px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-white">{COMPANY_NAME}</p>
            <p className="mt-1">Accesorios, componentes y soluciones logísticas para racks industriales.</p>
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
