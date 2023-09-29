import * as React from "react";
import  Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TinyProductCard from "./TinyProductCard";



const style = {
  position: 'absolute',
  top: '35%',
  right: '0%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minHeight: "400px",
  outline: "0"
  
};

const ModalCustom = ({open, handleClose, cart, onRemove}) => {
  return (
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {
    cart.map( e => <TinyProductCard key={e.id} name={e.name} image={e.image} quantity={e.quantity} id={e.id}/>)
    }
    <Link to={'/checkout'}>
      <Button  onClick={handleClose} variant={'contained'} sx={{backgroundColor: "primary.main", borderRadius: "0%", width: "80%", left: "10%"}}>CHECKOUT</Button>
    </Link>

  </Box>
</Modal>
  );
};

export default ModalCustom;
