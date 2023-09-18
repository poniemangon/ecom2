import axios from "axios";
import ProductsList from "./ProductsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
        const data = await getAllProducts()
        const productsByCategory = data.filter(
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


