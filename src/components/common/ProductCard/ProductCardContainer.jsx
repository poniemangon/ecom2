import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ index, id, image, name, description, isListCard, onAdd }) => {
  



  return (
    <div>
     
      <ProductCard
        index={index}
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
