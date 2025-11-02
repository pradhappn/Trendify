import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Error");
        setProducts([]);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const getProductById = (id) => products.find((p) => p.id === Number(id));

  return (
    <ProductsContext.Provider value={{ products, loading, error, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
