import { Box, Typography, Button } from "@mui/material";

const ProductCard = ({ id, name, description, image }) => {
  // Determine the flex direction based on the id (row for even, row-reverse for odd)
  const flexDirection = id % 2 === 0 ? "row" : "row-reverse";

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
      {/* Box for the image */}
      <Box
        className="product-image"
        sx={{
          backgroundColor: "secondary.second",
          flex: "50%", // 50% of the parent's width
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          overflow: "hidden", // To ensure the image doesn't overflow
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            maxWidth: "100%", // Ensure the image fits within the box width
            maxHeight: "400px", // Ensure the image fits within the box height
          }}
        />
      </Box>

      {/* Box for title, description, and button */}
      <Box
        sx={{
          flex: "50%", // 50% of the parent's width
          padding: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          color: "secondary.main",
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{description}</Typography>

        <Box sx={{ marginTop: "10%" }}>
          <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
            See product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
