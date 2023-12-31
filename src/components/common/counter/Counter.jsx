
import { Box, Button, Typography } from "@mui/material";

const Counter = ({ counter, setCounter }) => {
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
    </Box>
  );
};

export default Counter;
