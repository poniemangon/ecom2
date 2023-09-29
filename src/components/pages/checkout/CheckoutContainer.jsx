import { useDispatch } from "react-redux";
import Checkout from "./Checkout"
import { removeById, clearCart } from "../../../store/cartSlice";



const CheckoutContainer = () => {
  const dispatch = useDispatch();

  const onClear = () => {


    dispatch( clearCart())
    };

  const onRemove = () => {
    dispatch(removeById({ id }));
  };
  return (
    <div>
      <Checkout onRemove={onRemove} onClear={onClear}/>
    </div>
  )
}

export default CheckoutContainer
