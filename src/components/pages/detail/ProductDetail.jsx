import ProductCard from "../../common/ProductCard/ProductCard";


const ProductDetail = ({ id, image, name, description, showAddToCartButton }) => {
  return (
    <ProductCard
      id={id}
      image={image}
      name={name}
      description={description}
      
    />
  );
};

export default ProductDetail;
