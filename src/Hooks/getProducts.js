import {React, useState, useEffect } from "react";

function useGetProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products/");
      const data = await response.json();
      if (response.ok) {
        setProducts(data?.products);
      }
    };
    fetchProducts();
  }, []);

  return products;
}

export default useGetProducts