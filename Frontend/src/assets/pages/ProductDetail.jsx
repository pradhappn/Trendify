import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";

const PLACEHOLDER_DATA = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="#f3f4f6" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="20">Image unavailable</text></svg>`
)} `;

export default function ProductDetail() {
  const { id } = useParams();
  const { getProductById, loading } = useProducts();
  const { addToCart } = useCart();

  const product = getProductById(id);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;
  if (!product) return <p className="text-center py-10 text-gray-500">Product not found.</p>;

  const initialImage = (product && product.images && product.images[0]) || (product && product.image) || PLACEHOLDER_DATA;
  const [currentImage, setCurrentImage] = React.useState(initialImage);

  React.useEffect(() => {
    // update currentImage when product changes
    if (product) {
      setCurrentImage((product.images && product.images[0]) || product.image || PLACEHOLDER_DATA);
    }
  }, [product]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/2">
        <img
          src={currentImage}
          alt={product.name}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER_DATA;
          }}
          className="w-full h-100 object-cover rounded-xl shadow mb-4"
        />

        {product.images && product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(img)}
                className="w-20 h-20 p-0 border rounded overflow-hidden"
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = PLACEHOLDER_DATA;
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-teal-600 text-xl font-semibold mb-4">₹{product.price}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
