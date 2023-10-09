import axios from "axios";
import ProductsList from "./ProductsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";


const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    
    
    const getData = async () => {
      let ref = collection(db, 'products');
      let filtered = query(ref, where('category', '==', categoryName));
      let res = await getDocs(filtered);
      let products = res.docs.map((p, index) => {
        return {...p.data(), id: p.id};
      });
      setProducts(products);
    };
    
    getData();
  }, [categoryName]);
  return <ProductsList categoryName={categoryName} products={products} />;
};

export default ProductsListContainer;
