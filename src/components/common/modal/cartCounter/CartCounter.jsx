
import { Box, Button, Typography } from "@mui/material";

const CartCounter = ({ counter, setCounter, plusOne, minusOne }) => {
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "secondary.second",
          marginRight: "3%",
          height: "36.5px",
          
        }}
      >
        <Button onClick={() => {setCounter(counter + 1); plusOne()}}>+</Button>
        <Typography variant="subtitle2" sx={{ paddingTop: "5%" }}>
          {counter}
        </Typography>
        {counter > 1 ? (
          <Button onClick={() => {setCounter(counter - 1); ; minusOne()}}>-</Button>
        ) : (
          <Button>-</Button>
        )}
      </Box>
    </Box>
  );
};

export default CartCounter;
