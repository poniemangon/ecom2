import { Button, TextField, Box } from "@mui/material"
import PasswordField from "../../common/passwordfield/PasswordField"



const Login = () => {
  return (
    <Box sx={{paddingTop:"20px"}}>
      <form action="">
        <TextField label="Email" variant="outlined"></TextField>
        <PasswordField/>
        <Button variant="contained">Ingresar</Button>
      </form>
    </Box>
  )
}

export default Login

