import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import TinyProductCard from "../../common/modal/TinyProductCard";

const style = {
  display: "flex",
  flexDirection: "row",
  bgcolor: "background.paper",

  p: 4,
  minHeight: "400px",
};

const Checkout = ({onRemove, onClear}) => {
  const { cart } = useSelector((store) => store.cartSlice);

  return (
    <Box sx={style}>
      <Box sx={{width: "70%"}}>

      </Box>
      <Box sx={{width: "400px"}}>
      <Button onClick={()=> onClear()}>Clear cart</Button>
        {cart.map((e) => (
          <TinyProductCard
            id={e.id}
            name={e.name}
            image={e.image}
            quantity={e.quantity}
            onRemove={onRemove}
            onClear={onClear}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Checkout;


