import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";




const ProductDetailContainer = () => {
  let [counter, setCounter] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({});
  let refCol = collection(db, 'products');
  let refDoc = doc(refCol, id)

  useEffect(() => {
    const getData = async () => {
      let res = await getDoc(refDoc);
      let product = {...res.data(), id: res.id}
      setProduct(product);
  
    };

    getData();

  }, [id])
  
  
  const onAdd = (cantidad) => {
    let data = {
      ...product, quantity: cantidad
    }

  dispatch( addToCart(data))
  };
  return (
    <ProductDetail
    
      id={product.id}
      onAdd={onAdd}
      image={product.image}
      name={product.name}
      description={product.description}
      counter={counter}
      setCounter={setCounter}
      
    />
  );
};

export default ProductDetailContainer;
