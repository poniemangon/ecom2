import { Box, Typography, Button } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ProductDetail = ({ id, image, name, description, onAdd, counter, setCounter }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flex: 1,
        backgroundColor: "white",
        padding: "15%",
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
        <Typography
          align="center"
          variant="h3"
          sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
        >
          {name ? name.toUpperCase() : ""}
        </Typography>
        <Typography
          variant="h3"
          sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
        >
          {name ? name.toUpperCase() : ""}
        </Typography>
        <Typography
          align="center"
          sx={{
            display: { sm: "block", xs: "block", md: "none", lg: "none" },
            marginTop: "10%",
            color: "#817D7D",
          }}
          variant="body1"
        >
          {description}
        </Typography>
        <Typography
          sx={{
            display: { sm: "none", xs: "none", md: "block", lg: "block" },
            marginTop: "10%",
            color: "#817D7D",
          }}
          variant="body1"
        >
          {description}
        </Typography>

        <Box sx={{ marginTop: "10%", display: "flex" }}>
          <CounterContainer setCounter={setCounter} counter={counter} />
          <Button
            onClick={() => onAdd(counter)}
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "0%",
              height: "36.5px",
              width: "128px",
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
