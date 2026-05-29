import ProductDetail from "../ProductDetail";
import { getProduct } from "../data";

const product = getProduct("rodillos-rack-dinamico");

export const metadata = {
  title: "Rodillos para Rack Dinamico | Kraken Group",
  description: product.summary,
  keywords: product.keywords,
  openGraph: {
    title: "Rodillos para Rack Dinamico | Kraken Group",
    description: product.summary,
    images: [product.image],
  },
};

export default function Page() {
  return <ProductDetail product={product} />;
}
