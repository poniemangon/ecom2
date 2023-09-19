import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/ProductCard/ProductCardContainer";

const ProductsList = ({ products, categoryName }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        justifyContent: "center",
        margin: "0px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "secondary.main",
          padding: "5%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          {categoryName.toUpperCase()}
        </Typography>
      </Box>
          <Box sx={{margin: "10%"}}>
      {products.map((product) => {
        return (

          
          <ProductCardContainer
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            isListCard={true}
          />
        );
      })}
      </Box>
    </Box>
  );
};

export default ProductsList;
