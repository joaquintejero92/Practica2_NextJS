"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMicrochip,
  FaMemory,
  FaDesktop,
  FaHdd,
  FaKeyboard,
} from "react-icons/fa";

export default function Header() {
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
          <li>
            <Link href="/perifericos" className="flex items-center gap-2">
              <FaKeyboard className="text-primary text-xl" /> Periféricos
            </Link>
          </li>
        </ul>
      </div>

      {/* DERECHA: Selector de tema */}
      <div className="navbar-end">
        <select
          data-choose-theme
          className="select select-bordered w-40 text-lg"
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
    </div>
  );
}
