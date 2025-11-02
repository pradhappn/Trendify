import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];
  }, [products]);

  const filtered = useMemo(() => {
    return activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  if (loading) return <p className="loading-message">Loading products...</p>;
  if (error) return <p className="error-message">Failed to load products.</p>;

  return (
    <div className="home-page">
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="/banner.jpg" 
          alt="Banner" 
          className="hero-image"
        />

      </div>

      <div className="container">
        <div className="categories-section">
          {categories.slice(1, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn ${activeCategory === cat ? "active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>

        <h2 className="section-title">Featured Products</h2>
        {filtered.length === 0 ? (
          <p className="no-products-message">No products in this category.</p>
        ) : (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
