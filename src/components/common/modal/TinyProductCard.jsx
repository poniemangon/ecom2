import { Box, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeById } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const TinyProductCard = ({ id, name, quantity, image }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeById({ id }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: "5%" }}>
      <Box>
        <img width="100px" src={image} alt="" />
      </Box>
      <Box
        sx={{
          padding: "3%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{width: "200px"}}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="overline">{quantity}</Typography>
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
