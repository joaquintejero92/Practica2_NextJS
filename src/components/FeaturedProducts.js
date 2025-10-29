import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Productos destacados 💻
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="CPU AMD Ryzen 7 7800X3D"
          desc="8 núcleos / 16 hilos / Gaming extremo."
          price="339,00"
          image="/productos/cpu.jpg"
          badge="Top Ventas"
        />
        <ProductCard
          title="Placa Base ASUS B650"
          desc="Socket AM5 / PCIe 5.0 / DDR5 / Wi-Fi 6."
          price="189,90"
          image="/productos/placa.jpg"
        />
        <ProductCard
          title="Memoria RAM Corsair 32GB DDR5"
          desc="2x16GB 6000MHz CL30 RGB."
          price="129,99"
          image="/productos/ram.jpg"
        />
        <ProductCard
          title="Tarjeta Gráfica RTX 4070 SUPER"
          desc="12GB GDDR6X / DLSS 3 / Ray Tracing."
          price="729,00"
          image="/productos/gpu.jpg"
          badge="Gaming"
        />
        <ProductCard
          title="SSD NVMe 1TB Samsung 980 PRO"
          desc="PCIe 4.0 / hasta 7000MB/s / Alta durabilidad."
          price="89,00"
          image="/productos/ssd.jpg"
        />
        <ProductCard
          title="Fuente de Alimentación 750W 80+ Gold"
          desc="80+ Gold / Modular / Ventilador silencioso."
          price="99,00"
          image="/productos/fuente.jpg"
        />
      </div>
    </section>
  );
}

