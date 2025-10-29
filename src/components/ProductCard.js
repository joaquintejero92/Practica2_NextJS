"use client";
import { toast } from "sonner";

export default function ProductCard({ id, title, desc, price, image, badge }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // construimos el objeto producto correctamente
    const newProduct = {
      id: id || title, // si no tienes id, usa el título como clave única
      name: title,
      price,
      image,
      quantity: 1,
    };

    // comprobar si ya existe
    const existing = cart.find((p) => p.id === newProduct.id);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
      toast.info(`Añadiste otra unidad de ${newProduct.name} 🛒`);
    } else {
      cart.push(newProduct);
      toast.success(`${newProduct.name} añadido al carrito 🛍️`);
    }

    // guardar
    localStorage.setItem("cart", JSON.stringify(cart));

    // notificar actualización del carrito
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cart-updated"));
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition border border-base-300">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-48 w-full object-contain bg-base-200 p-2"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-lg">{title}</h3>
          {badge && (
            <span
              className="inline-block bg-primary text-primary-content text-sm font-semibold px-3 py-1 rounded-full leading-none"
              style={{ lineHeight: "1.4", minHeight: "1.75rem" }}
            >
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm opacity-80">{desc}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-xl font-bold">{price} €</span>
          <button onClick={addToCart} className="btn btn-primary btn-sm">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}



