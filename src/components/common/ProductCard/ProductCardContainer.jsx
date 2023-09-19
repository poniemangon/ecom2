import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ id, image, name, description, isListCard }) => {
  return (
    <div>
      {/* Pass isListCard as a prop to ProductCard */}
      <ProductCard
        id={id}
        image={image}
        name={name}
        description={description}
        isListCard={isListCard}
      />
    </div>
  );
};

export default ProductCardContainer;
