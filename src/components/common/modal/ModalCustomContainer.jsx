import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "./ModalCustom";
import { clearCart, getTotal} from "../../../store/cartSlice";
import { useEffect } from "react";




const ModalCustomContainer = ({ open, handleClose }) => {
  const { cart, total } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const onClear = () => {


  dispatch( clearCart())
  };
  useEffect(()=> {
    dispatch(getTotal())
  }, [cart, dispatch])

  console.log(total)




 


  

  return (
    <div>
      <ModalCustom open={open} handleClose={handleClose} cart={cart}  total={total} onClear={onClear}/>
    </div>
  );
}

export default ModalCustomContainer;
