"use client";

import ProductCard from "@/components/ProductCard";

export default function CpuPage() {
  const products = [
    {
      id: 1,
      title: "CPU AMD Ryzen 7 7800X3D",
      desc: "8 núcleos / 16 hilos / Gaming extremo.",
      price: 339,
      image: "/productos/cpu-ryzen7.jpg",
      badge: "Top Ventas",
    },
    {
      id: 2,
      title: "Intel Core i7-13700K",
      desc: "16 núcleos híbridos / Rendimiento sobresaliente.",
      price: 419,
      image: "/productos/cpu-i7.jpg",
      badge: "Recomendado",
    },
    {
      id: 3,
      title: "AMD Ryzen 5 7600",
      desc: "6 núcleos / 12 hilos / Gran relación calidad-precio.",
      price: 229,
      image: "/productos/cpu-ryzen5.jpg",
      badge: "Económico",
    },
    {
      id: 4,
      title: "Intel Core i9-13900K",
      desc: "24 núcleos / 32 hilos / La bestia definitiva.",
      price: 599,
      image: "/productos/cpu-i9.jpg",
      badge: "Premium",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* Encabezado tipo hero */}
      <section className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Procesadores (CPU)
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Elige entre los mejores procesadores de{" "}
          <span className="font-semibold text-primary">AMD</span> e{" "}
          <span className="font-semibold text-primary">Intel</span> para tu PC.
          Potencia tu experiencia de juego y trabajo con lo último en tecnología.
        </p>
      </section>

      {/* Grid de productos (igual que la principal) */}
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
