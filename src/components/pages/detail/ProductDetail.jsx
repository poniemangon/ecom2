import ProductCard from "../../common/ProductCard/ProductCard";

const ProductDetail = ({ id, image, name, description, onAdd }) => {
  return (
    <ProductCard
      id={id}
      image={image}
      name={name}
      description={description}
      onAdd={onAdd}
    />
  );
};

export default ProductDetail;
