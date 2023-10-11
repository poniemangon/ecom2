import * as React from "react";
import  Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TinyProductCard from "./TinyProductCard";





const style = {
  position: 'absolute',
  top: '40%',
  right: '50%',
  left: {lg: '80%', md: "50%", sm: "50%", xs: "50%"},
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minHeight: "400px",
  outline: "0"
  
};

const ModalCustom = ({open, handleClose, cart, onClear, total}) => {
  return (
<Modal
  sx={{}}
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  
  <Box sx={style}>
  <Button onClick={()=> onClear()}>Clear cart</Button>
    {
    cart.map( e => <TinyProductCard key={e.id} name={e.name} image={e.image} quantity={e.quantity} price={e.price + "$"} id={e.id}/>)
    }
    

    <Typography align="center" variant="subtitle1">{total}$</Typography>
    <Link to={'/checkout'}>
      <Button  onClick={handleClose} variant={'contained'} sx={{backgroundColor: "primary.main", borderRadius: "0%", width: "80%", left: "10%"}}>CHECKOUT</Button>
    </Link>

    

  </Box>
</Modal>
  );
};

export default ModalCustom;
