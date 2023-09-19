import React from "react";
import { Box, Button } from "@mui/material";

const Counter = ({ counter, setCounter, onAdd }) => {
   
  return (
    <Box>
      <Button onClick={()=>onAdd(counter)} variant="contained" sx={{ backgroundColor: "primary.main" }}>
        Add to cart
      </Button>
      <Box>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
        <h5>{counter}</h5>
        {counter > 1 && (
          <Button onClick={() => setCounter(counter - 1)}>-</Button>
        )}
      </Box>
    </Box>
  );
};

export default Counter;

