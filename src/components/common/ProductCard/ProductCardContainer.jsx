import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ id, image, name, description, isListCard, onAdd }) => {
  



  return (
    <div>
     
      <ProductCard
        id={id}
        image={image}
        name={name}
        description={description}
        isListCard={isListCard}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ProductCardContainer;
