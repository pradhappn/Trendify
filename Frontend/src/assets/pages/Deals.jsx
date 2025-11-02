import React from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function Deals() {
  const { products, loading } = useProducts();

  if (loading) return <p className="py-10 text-center">Loading deals...</p>;

  // show first 12 products as "deals"
  const deals = products.slice(0, 12);

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Today's Deals</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
