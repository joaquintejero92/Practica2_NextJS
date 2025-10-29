"use client";
import { useState } from "react";
import AutoCarousel from "@/components/AutoCarousel";
import RadialProgress from "@/components/RadialProgress";
import FeaturedProducts from "@/components/FeaturedProducts";
import Precarga from "@/components/Precarga"; 

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Precarga onFinish={() => setLoading(false)} />;

  return (
    <main className="flex flex-col items-center bg-base-100 min-h-screen">
      {/* Carrusel arriba */}
      <section className="w-full max-w-5xl mt-6 px-4">
        <AutoCarousel />
      </section>

      {/* Progreso de carga */}
      <section className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Bienvenido a InformaTech 💻
        </h1>
      </section>

      {/* Descripción */}
      <section className="max-w-3xl text-center mt-10 px-4 space-y-4">
        <p className="text-lg text-base-content">
          En <span className="font-semibold text-primary">InformaTech</span> te ofrecemos los mejores
          componentes informáticos del mercado: procesadores, placas base, memorias RAM, tarjetas
          gráficas, periféricos y mucho más.
        </p>
        <p className="text-lg text-base-content">
          Nuestro objetivo es ayudarte a montar o mejorar tu ordenador con productos de calidad,
          siempre con asesoramiento técnico y las mejores marcas disponibles.
        </p>
      </section>

      {/* Productos destacados */}
      <section className="w-full max-w-6xl mt-12 px-4">
        <FeaturedProducts />
      </section>
    </main>
  );
}


