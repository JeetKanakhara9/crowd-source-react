import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    // const response = await fetch(url);
    // const products = await response.json();
    const response = axios.get(url);
    console.log((await response).data);
    const products = (await response).data;
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};