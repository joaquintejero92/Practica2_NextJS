"use client";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartModal() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(stored);
    };

    updateCart();
    window.addEventListener("cart-updated", updateCart);
    return () => window.removeEventListener("cart-updated", updateCart);
  }, []);
  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * (item.quantity || 1),
    0
  );

  const removeFromCart = (id) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <>
      {/* 🔹 Input que conecta con el label del Header */}
      <input type="checkbox" id="cart-modal" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box max-w-lg">
          <h3 className="font-bold text-2xl text-primary mb-4 flex items-center gap-2">
            🛒 Tu carrito
          </h3>

          {cart.length === 0 ? (
            <p className="text-center py-6">Tu carrito está vacío</p>
          ) : (
            <>
              <ul className="space-y-3">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b border-base-300 pb-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm opacity-70">
                          {item.price} € x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="text-right mt-4 font-bold text-lg">
                Total: {total.toFixed(2)} €
              </div>
            </>
          )}

          <div className="modal-action flex justify-between items-center">
            <button className="btn btn-outline btn-error" onClick={clearCart}>
              Vaciar
            </button>
            <label htmlFor="cart-modal" className="btn btn-primary">
              Cerrar
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
