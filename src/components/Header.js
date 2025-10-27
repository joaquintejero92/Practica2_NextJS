import Link from "next/link";
import { FaMicrochip, FaMemory, FaDesktop, FaHdd, FaKeyboard } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Izquierda */}
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <FaDesktop className="text-primary text-2xl" />
          TIENDA INFORMÁTICA
        </Link>
      </div>

      {/* Centro */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link href="/cpu" className="flex items-center gap-2">
              <FaMicrochip /> CPU
            </Link>
          </li>
          <li>
            <Link href="/placa-base" className="flex items-center gap-2">
              <FaHdd /> Placa Base
            </Link>
          </li>
          <li>
            <Link href="/tarjeta-grafica" className="flex items-center gap-2">
              <FaDesktop /> Tarjeta Gráfica
            </Link>
          </li>
          <li>
            <Link href="/ram" className="flex items-center gap-2">
              <FaMemory /> Memoria RAM
            </Link>
          </li>
          <li>
            <Link href="/perifericos" className="flex items-center gap-2">
              <FaKeyboard /> Periféricos
            </Link>
          </li>
        </ul>
      </div>

      {/* Derecha */}
      <div className="navbar-end">
        <select className="select select-bordered w-32">
          <option>Claro</option>
          <option>Oscuro</option>
        </select>
      </div>
    </div>
  );
}
