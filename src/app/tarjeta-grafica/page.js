"use client";

import { useState } from "react";

export default function TarjetaGraficaPage() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center py-12 px-6">
      {/* 🧠 ENCABEZADO PRINCIPAL */}
      <section className="text-center mb-10 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Tarjetas Gráficas
        </h1>

        <p className="text-lg opacity-80 mb-6">
          🔧 Esta sección todavía no está disponible, pero muy pronto podrás
          disfrutar de nuestra colección de{" "}
          <span className="font-semibold text-primary">
            tarjetas gráficas de última generación
          </span>{" "}
          para gaming, diseño y edición profesional.
        </p>

        <p className="text-lg opacity-80 mb-6">
          En <span className="font-semibold text-primary">InformaTech</span>{" "}
          estamos trabajando para ofrecerte las{" "}
          <strong>GPU más potentes</strong> del mercado, de marcas como{" "}
          <span className="text-primary">NVIDIA</span> y{" "}
          <span className="text-primary">AMD</span>. 🚀 ¡Muy pronto disponible!
        </p>
      </section>

      {/* 🎨 COMPARADOR DE IMÁGENES */}
      <section className="card bg-base-100 shadow-2xl w-full max-w-4xl my-10">
        <div className="card-body items-center">
          <h2 className="card-title text-2xl mb-4">Comparativa Visual</h2>

          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
            {/* Imagen antigua */}
            <img
              src="/productos/gpu-antigua.jpg"
              alt="Tarjeta gráfica antigua"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Imagen moderna recortada */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-100"
              style={{ width: `${sliderValue}%` }}
            >
              <img
                src="/productos/gpu-moderna.jpg"
                alt="Tarjeta gráfica moderna"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Barra divisoria DaisyUI */}
            <div
              className="absolute top-0 h-full w-[4px] bg-primary transition-all duration-100"
              style={{
                left: `${sliderValue}%`,
                transform: "translateX(-50%)",
              }}
            ></div>

            {/* Botón circular DaisyUI */}
            <button
              className="btn btn-circle btn-primary absolute top-1/2 shadow-lg border-2 border-base-100"
              style={{
                left: `${sliderValue}%`,
                transform: "translate(-50%, -50%)",
              }}
            ></button>

            {/* Control deslizante invisible */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-col-resize"
            />
          </div>

          {/* Etiquetas debajo */}
          <div className="flex justify-between w-full text-sm text-base-content/70 mt-4">
            <span>💾 Tarjeta Antigua</span>
            <span>⚡ Tarjeta Moderna</span>
          </div>
        </div>
      </section>

      {/* 💬 MENSAJE FINAL */}
      <section className="text-center mt-10 max-w-2xl">
        <p className="text-lg opacity-80">
          Mientras tanto, puedes visitar nuestras secciones de{" "}
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
          <a href="/ram" className="text-primary font-semibold hover:underline">
            Memoria RAM
          </a>{" "}
          para seguir mejorando tu equipo 💻.
        </p>
      </section>
    </main>
  );
}



