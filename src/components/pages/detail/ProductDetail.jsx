import { Box, Typography } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";







const ProductDetail = ({ id, image, name, description, onAdd }) => {
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
        <Typography variant="h3">{name ? name.toUpperCase() : ''}</Typography>
        <Typography  align="center" sx={{ marginTop: "10%", color: "#817D7D" }} variant="body1">{description}</Typography>

        <Box sx={{ marginTop: "10%" }}>
          

          
            
              
            <CounterContainer onAdd={onAdd}/>
           
         
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
