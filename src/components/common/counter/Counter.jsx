import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "secondary.second",
          marginRight: "3%",
        }}
      >
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
        <Typography variant="subtitle1" sx={{ paddingTop: "5%" }}>
          {counter}
        </Typography>
        {counter > 1 ? (
          <Button onClick={() => setCounter(counter - 1)}>-</Button>
        ) : (
          <Button>-</Button>
        )}
      </Box>
      <Button
        onClick={() => onAdd(counter)}
        variant="contained"
        sx={{ backgroundColor: "primary.main" }}
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default Counter;
