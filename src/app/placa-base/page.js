"use client";

import ProductCard from "@/components/ProductCard";

export default function PlacaBasePage() {
  const products = [
    {
      id: 5,
      title: "Placa Base ASUS B650",
      desc: "Chipset AM5 / DDR5 / PCIe 5.0 / Wi-Fi 6E.",
      price: 189,
      image: "/productos/placa-asus-b650.jpg",
      badge: "Top Ventas",
    },
    {
      id: 6,
      title: "MSI PRO Z790-P",
      desc: "Intel LGA1700 / DDR5 / VRM potente y refrigeración avanzada.",
      price: 249,
      image: "/productos/placa-msi-z790.jpg",
      badge: "Recomendado",
    },
    {
      id: 7,
      title: "Gigabyte B550 AORUS Elite",
      desc: "Socket AM4 / PCIe 4.0 / Gran relación calidad-precio.",
      price: 139,
      image: "/productos/placa-gigabyte-b550.jpg",
      badge: "Económico",
    },
    {
      id: 8,
      title: "ASRock X670E Taichi",
      desc: "Chipset AM5 / Overclock extremo / Diseño premium.",
      price: 399,
      image: "/productos/placa-asrock-x670e.jpg",
      badge: "Premium",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* Encabezado tipo hero */}
      <section className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Placas Base
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Las mejores placas base del mercado, optimizadas para{" "}
          <span className="font-semibold text-primary">AMD</span> e{" "}
          <span className="font-semibold text-primary">Intel</span>.
          Calidad, estabilidad y rendimiento para tu PC.
        </p>
      </section>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            desc={p.desc}
            price={p.price}
            image={p.image}
            badge={p.badge}
          />
        ))}
      </div>
    </main>
  );
}
