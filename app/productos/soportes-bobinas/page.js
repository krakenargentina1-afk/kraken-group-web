import ProductDetail from "../ProductDetail";
import { getProduct } from "../data";

const product = getProduct("soportes-bobinas");

export const metadata = {
  title: "Soportes de Bobinas Industriales | Kraken Group",
  description: product.summary,
  keywords: product.keywords,
  openGraph: {
    title: "Soportes de Bobinas Industriales | Kraken Group",
    description: product.summary,
    images: [product.image],
  },
};

export default function Page() {
  return <ProductDetail product={product} />;
}
