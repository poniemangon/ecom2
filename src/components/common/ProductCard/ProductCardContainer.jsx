import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ id, image, name, description, showAddToCartButton }) => {
  return (
    <div>
      {/* Pass showAddToCartButton as a prop to ProductCard */}
      <ProductCard
        id={id}
        image={image}
        name={name}
        description={description}
        showAddToCartButton={showAddToCartButton}
      />
    </div>
  );
};

export default ProductCardContainer;

