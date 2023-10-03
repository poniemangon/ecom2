import { Box, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeById } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";
import CartCounterContainer from "./cartCounter/CartCounterContainer";


const TinyProductCard = ({ id, name, quantity, image, price }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeById({ id }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: "5%" }}>
      <Box sx={{height: "60px"}}>
        <img width="80px" src={image} alt="" />
      </Box>
      <Box
        sx={{
          paddingLeft: "3%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{width: "200px"}}>
            <Typography variant="subtitle1">{name}</Typography>
            <CartCounterContainer quantity={quantity} id={id}/>
            <Typography variant="overline">{price}</Typography>
          </Box>

          <Box >
            <DeleteIcon  sx={{'&:hover': {color: 'grey', cursor: 'pointer'}}} onClick={() => onRemove()} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TinyProductCard;
