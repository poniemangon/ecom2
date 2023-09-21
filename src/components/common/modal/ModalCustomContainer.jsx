import ModalCustom from "./ModalCustom"

const ModalCustomContainer = ({open, handleClose}) => {
  return (
    <div>
      <ModalCustom open={open} handleClose={handleClose} />
    </div>
  )
}

export default ModalCustomContainer
