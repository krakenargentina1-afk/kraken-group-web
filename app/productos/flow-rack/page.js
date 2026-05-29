import ProductDetail from "../ProductDetail";
import { getProduct } from "../data";

const product = getProduct("flow-rack");

export const metadata = {
  title: "Flow Rack Industrial | Kraken Group",
  description: product.summary,
  keywords: product.keywords,
  openGraph: {
    title: "Flow Rack Industrial | Kraken Group",
    description: product.summary,
    images: [product.image],
  },
};

export default function Page() {
  return <ProductDetail product={product} />;
}
