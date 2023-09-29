import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "./ModalCustom";
import { removeById } from "../../../store/cartSlice";

const ModalCustomContainer = ({ open, handleClose }) => {
  const { cart } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  const onRemove = (id) => {

    dispatch(removeById(id));
  };

  return (
    <div>
      <ModalCustom open={open} handleClose={handleClose} cart={cart} onRemove={onRemove} />
    </div>
  );
}

export default ModalCustomContainer;
