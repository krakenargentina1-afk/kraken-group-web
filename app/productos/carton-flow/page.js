import ProductDetail from "../ProductDetail";
import { getProduct } from "../data";

const product = getProduct("carton-flow");

export const metadata = {
  title: "Carton Flow Industrial | Kraken Group",
  description: product.summary,
  keywords: product.keywords,
  openGraph: {
    title: "Carton Flow Industrial | Kraken Group",
    description: product.summary,
    images: [product.image],
  },
};

export default function Page() {
  return <ProductDetail product={product} />;
}
