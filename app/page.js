import HomeClient from "./components/HomeClient";

export const metadata = {
  title: "Kraken Group | Accesorios industriales para racks y logistica",
  description:
    "Catalogo industrial premium de rodillos para racks dinamicos, Carton Flow, Flow Rack, soportes de bobinas, guias metalicas y accesorios de picking en Argentina.",
  keywords: [
    "accesorios para racks",
    "rodillos rack dinamico Argentina",
    "Carton Flow",
    "Flow Rack",
    "soportes de bobinas",
    "accesorios de picking",
    "componentes galvanizados",
    "logistica industrial argentina",
  ],
  openGraph: {
    title: "Kraken Group | Accesorios industriales para racks",
    description:
      "Soluciones premium para racks dinamicos, picking, deposito y logistica industrial.",
    images: ["/imagenes/racks/rack-hero-principal.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
