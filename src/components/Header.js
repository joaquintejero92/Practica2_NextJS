"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMicrochip,
  FaMemory,
  FaDesktop,
  FaHdd,
  FaShoppingCart,
} from "react-icons/fa";
import CartModal from "@/components/CartModal";
import { useState, useEffect } from "react";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // función para actualizar el número de productos
    const updateCount = () => {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = stored.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCount(totalItems);
    };

    // actualizar al cargar la página
    updateCount();

    // escuchar el evento personalizado del carrito
    window.addEventListener("cart-updated", updateCount);

    // limpiar al desmontar
    return () => window.removeEventListener("cart-updated", updateCount);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md px-8 py-3">
      {/* IZQUIERDA: Logo + texto */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/imagen4.jpg"
            alt="Logo InformaTech"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <span className="text-4xl font-extrabold text-primary tracking-wide">
            InformaTech
          </span>
        </Link>
      </div>

      {/* CENTRO: Menú con iconos */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li>
            <Link href="/cpu" className="flex items-center gap-2">
              <FaMicrochip className="text-primary text-xl" /> CPU
            </Link>
          </li>
          <li>
            <Link href="/placa-base" className="flex items-center gap-2">
              <FaHdd className="text-primary text-xl" /> Placa Base
            </Link>
          </li>
          <li>
            <Link href="/tarjeta-grafica" className="flex items-center gap-2">
              <FaDesktop className="text-primary text-xl" /> Tarjeta Gráfica
            </Link>
          </li>
          <li>
            <Link href="/ram" className="flex items-center gap-2">
              <FaMemory className="text-primary text-xl" /> RAM
            </Link>
          </li>
        </ul>
      </div>

      {/* DERECHA: Selector de tema + Carrito */}
      <div className="navbar-end flex items-center gap-6">
        <select
          data-choose-theme
          className="select select-bordered w-40 text-lg"
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>

        {/* 🛒 Icono del carrito que abre el modal */}
          <div className="relative">
            <label htmlFor="cart-modal" className="btn btn-ghost btn-circle cursor-pointer">
              <FaShoppingCart className="text-3xl text-primary" />
              {count > 0 && (
                <span className="badge badge-primary absolute -top-1 -right-1 text-sm font-bold">
                  {count}
                </span>
              )}
            </label>
          </div>

          <CartModal />
        </div>
      </div>
  );
}
