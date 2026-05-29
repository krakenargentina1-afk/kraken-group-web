import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kraken-group-web.vercel.app"),
  title: {
    default: "Kraken Group | Accesorios industriales para racks",
    template: "%s",
  },
  description:
    "Accesorios industriales para racks, picking y logistica en Argentina: rodillos, Carton Flow, Flow Rack, soportes de bobinas, guias metalicas y componentes galvanizados.",
  keywords: [
    "Kraken Group",
    "accesorios para racks",
    "logistica industrial argentina",
    "rodillos para racks dinamicos",
    "Carton Flow",
    "Flow Rack",
    "soportes de bobinas",
    "componentes galvanizados",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
