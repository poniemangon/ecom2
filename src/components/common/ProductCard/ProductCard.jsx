import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../counter/CounterContainer";





const ProductCard = ({ id, name, description, image, onAdd }) => {
  const flexDirection =  id % 2 === 0 ? "row" : "row-reverse";



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column",  md: "column", sm: "column",lg: flexDirection },
        flex: 1,
        backgroundColor: "white",
        padding: "2%",
        // alignItems: "center"
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
          borderRadius: "2%"
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
          alignItems: "center"
        }}
      >
        <Box sx={{display: { lg: "none"}}} ><Typography  align="center" variant="h3">{name ? name.toUpperCase(): ''}</Typography></Box>
        <Box sx={{display: {xs: "none", sm: "none", md: "none", lg: "block"}}}><Typography  variant="h3">{name}</Typography></Box>
        
        <Typography  align="center" sx={{ marginTop: "10%", color: "#817D7D" }} variant="body1">{description}</Typography>

        <Box sx={{ marginTop: "5%" }}>
         
            <Link to={`/detail/${id}`}>
              <Button variant="contained" sx={{ backgroundColor: "primary.main", borderRadius: "0" }}>
                See product
              </Button>
            </Link>

           
       
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
