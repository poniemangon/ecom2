import { useState } from "react"
import Navbar from "./Navbar"




const NavbarContainer = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Navbar open={open} handleClose={handleClose} handleOpen={handleOpen}/>
    </div>
  )
}

export default NavbarContainer
