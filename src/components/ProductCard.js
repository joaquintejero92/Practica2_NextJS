export default function ProductCard({
  title,
  desc,
  price,
  image,
  badge,
}) {
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
          <button className="btn btn-primary btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
}

