export default function ProductCard({ image, name, price, onSeeMore }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain rounded" />
      </div>
      <h4 className="mt-4 font-semibold">{name}</h4>
      <p className="text-amber-600 font-bold mt-1">Starting from ₹{price}</p>
      <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800" onClick={onSeeMore}>
        See More
      </button>
    </div>
  );
}
