import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, image, isListCard }) => {
  const flexDirection = isListCard ? (id % 2 === 0 ? "row" : "row-reverse") : "row";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: flexDirection },
        flex: 1,
        backgroundColor: "white",
        padding: "5%",
      }}
    >
      <Box
        className="product-image"
        sx={{
          backgroundColor: "secondary.second",
          flex: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "50%",
          padding: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "secondary.main",
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{description}</Typography>

        <Box sx={{ marginTop: "10%" }}>
          {isListCard ? (
            <Link to={`/detail/${id}`}>
              <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
                See product
              </Button>
            </Link>
          ) : (
            <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
              Add to cart
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
