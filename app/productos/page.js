import { redirect } from "next/navigation";

export const metadata = {
  title: "Productos industriales | Kraken Group",
  description: "Catalogo de accesorios industriales para racks, picking y logistica.",
};

export default function Page() {
  redirect("/#productos");
}
