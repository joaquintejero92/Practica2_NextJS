"use client";

import ProductCard from "@/components/ProductCard";
import { FaMemory, FaBolt, FaRocket } from "react-icons/fa";

export default function RAMPage() {
  const products = [
    {
      id: 9,
      title: "Corsair Vengeance DDR5 32GB",
      desc: "2×16GB | 6000MHz | DDR5 | Rendimiento extremo para gamers y creadores.",
      price: 169,
      image: "/productos/ram-corsair.jpg",
      badge: "Top Ventas",
    },
    {
      id: 10,
      title: "Kingston Fury Beast DDR4 16GB",
      desc: "2×8GB | 3200MHz | DDR4 | Fiabilidad y calidad al mejor precio.",
      price: 79,
      image: "/productos/ram-kingston.jpg",
      badge: "Recomendado",
    },
    {
      id: 11,
      title: "G.Skill Trident Z5 RGB 32GB",
      desc: "2×16GB | 6400MHz | DDR5 | Diseño RGB y rendimiento espectacular.",
      price: 189,
      image: "/productos/ram-gskill.jpg",
      badge: "Nuevo",
    },
    {
      id: 12,
      title: "Crucial Pro DDR5 64GB",
      desc: "2×32GB | 5600MHz | DDR5 | Ideal para tareas profesionales y multitarea pesada.",
      price: 259,
      image: "/productos/ram-crucial.jpg",
      badge: "Premium",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* 🔷 Banner promocional superior */}
      <div className="alert alert-info shadow-lg mb-10 w-full max-w-4xl">
        <div>
          <FaBolt className="text-2xl text-primary" />
          <span className="text-lg font-semibold">
            ⚡ ¡Acelera tu PC con la nueva generación DDR5! — Envío gratis esta semana.
          </span>
        </div>
      </div>

      {/* 🧠 Encabezado */}
      <section className="text-center mb-10 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaMemory className="text-5xl text-primary animate-bounce" />
          <h1 className="text-5xl font-extrabold text-primary">
            Memoria RAM
          </h1>
        </div>

        <p className="text-lg opacity-80 mb-6">
          Aumenta el rendimiento de tu PC con nuestra selección de{" "}
          <span className="text-primary font-semibold">memorias DDR4 y DDR5</span>.  
          Fiabilidad, velocidad y diseño para gaming y trabajo profesional.
        </p>
      </section>

      {/* 💾 Barra informativa de disponibilidad */}
      <div className="w-full max-w-4xl mb-8">
        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaRocket className="text-3xl" />
            </div>
            <div className="stat-title">Velocidad Máxima</div>
            <div className="stat-value text-primary">6400 MHz</div>
            <div className="stat-desc">DDR5 más rápidas del mercado</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaMemory className="text-3xl" />
            </div>
            <div className="stat-title">Stock Disponible</div>
            <div className="stat-value text-secondary">98%</div>
            <div className="stat-desc text-secondary-content">
              Entrega inmediata 🚚
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 Productos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
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
      </section>

      {/* 📘 Sección final con enlaces */}
      <section className="text-center mt-16 max-w-2xl">
        <div className="alert alert-success shadow-lg mb-6">
          <div className="flex items-center gap-3">
            <FaRocket className="text-2xl" />
            <span className="text-lg font-semibold">
              ¿Buscas más componentes? 🔍
            </span>
          </div>
        </div>

        <p className="text-lg opacity-80">
          Explora también nuestras secciones de{" "}
          <a href="/cpu" className="text-primary font-semibold hover:underline">
            CPU
          </a>
          ,{" "}
          <a
            href="/placa-base"
            className="text-primary font-semibold hover:underline"
          >
            Placa Base
          </a>{" "}
          y{" "}
          <a
            href="/tarjeta-grafica"
            className="text-primary font-semibold hover:underline"
          >
            Tarjetas Gráficas
          </a>{" "}
          para completar tu equipo de alto rendimiento ⚙️.
        </p>
      </section>
    </main>
  );
}

