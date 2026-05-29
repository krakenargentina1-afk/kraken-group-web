import ProductDetail from "../ProductDetail";
import { getProduct } from "../data";

const product = getProduct("accesorios-picking");

export const metadata = {
  title: "Accesorios de Picking Industrial | Kraken Group",
  description: product.summary,
  keywords: product.keywords,
  openGraph: {
    title: "Accesorios de Picking Industrial | Kraken Group",
    description: product.summary,
    images: [product.image],
  },
};

export default function Page() {
  return <ProductDetail product={product} />;
}
