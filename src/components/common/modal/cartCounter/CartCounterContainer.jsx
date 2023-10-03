import { useState } from "react"
import CartCounter from "./CartCounter"
import { useDispatch } from "react-redux";
import { minusById, plusById } from "../../../../store/cartSlice";


const CartCounterContainer = ({quantity, id}) => {

  const dispatch = useDispatch();

  const plusOne = () => {
    dispatch ( plusById({id}) )
  }
  const minusOne = () => {
    dispatch ( minusById({id}) )
  }

    let [counter, setCounter] = useState(quantity);
  return (
    
    <CartCounter counter={counter} setCounter={setCounter} plusOne={plusOne} minusOne={minusOne}/>
    
  )
}

export default CartCounterContainer;
