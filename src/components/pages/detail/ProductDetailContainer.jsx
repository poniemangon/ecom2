import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);
  useEffect(() => {
    const getData = async () => {
      let data = await getProductById(id);
      setProduct(data);
    };

    getData();
  }, [id]);
  const onAdd = (quantity) => {
    let data = { ...product, quantity: quantity };
    console.log("added to cart: ", product.name, data.quantity);
  };
  return (
    <ProductDetail
      id={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      onAdd={onAdd}
    />
  );
};

export default ProductDetailContainer;
