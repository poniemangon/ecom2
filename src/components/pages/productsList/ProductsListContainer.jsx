import axios from "axios";
import ProductsList from "./ProductsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
        const response = await axios.get("http://localhost:5000/products");
        const productsByCategory = response.data.filter(
          (prod) => prod.category === categoryName
        );
        setProducts(productsByCategory);
        console.log(productsByCategory);
    };
    getData(); 
  }, [categoryName]); 
  return (
    
      <ProductsList categoryName={categoryName} products={products} />
    
  );
};

export default ProductsListContainer;


