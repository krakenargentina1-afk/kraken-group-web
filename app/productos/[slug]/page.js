import { notFound } from "next/navigation";
import ProductDetail from "../ProductDetail";
import { getProducto, productos } from "../../data/productos";

export function generateStaticParams() {
  return productos.map((producto) => ({
    slug: producto.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProducto(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Kraken Group",
    };
  }

  return {
    title: `${product.titulo} | Kraken Group`,
    description: product.resumen,
    keywords: product.keywords,
    openGraph: {
      title: `${product.titulo} | Kraken Group`,
      description: product.resumen,
      images: [product.imagen],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProducto(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
