import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "./ModalCustom";
import { clearCart} from "../../../store/cartSlice";




const ModalCustomContainer = ({ open, handleClose }) => {
  const { cart } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const onClear = () => {


  dispatch( clearCart())
  };





  

  return (
    <div>
      <ModalCustom open={open} handleClose={handleClose} cart={cart}  onClear={onClear}/>
    </div>
  );
}

export default ModalCustomContainer;
