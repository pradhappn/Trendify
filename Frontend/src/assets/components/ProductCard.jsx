import React from "react";
import { Link } from "react-router-dom";

const PLACEHOLDER_DATA = 'data:image/svg+xml;utf8,' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?>' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">' +
  '<rect width="100%" height="100%" fill="#f3f4f6" />' +
  '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="20">Image unavailable</text>' +
  '</svg>');

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img
          src={(product.images && product.images[0]) || product.image || PLACEHOLDER_DATA}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER_DATA;
          }}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">
          {product.name}
        </h2>

        <div className="product-price">
          <span className="price-symbol">₹</span>
          <span className="price-value">{product.price}</span>
        </div>

        {typeof product.stock === 'number' && product.stock < 20 && (
          <p className="product-stock">Only {product.stock} left in stock</p>
        )}

        <div className="product-delivery">
          <span>Free delivery</span>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ProductCard);

