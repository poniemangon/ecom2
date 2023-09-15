import ProductCard from "./ProductCard";

const ProductCardContainer = ({ id, image, name, description }) => {
  return (
    <div>
      {/* Pass index, name, and description as props to ProductCard */}
      <ProductCard id={id} image={image} name={name} description={description} />
    </div>
  );
};

export default ProductCardContainer;

