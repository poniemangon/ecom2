import { Button, TextField, Box, FormHelperText } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// sx={{ m: 1, width: '25ch' }}


const Login = ({google, handleSubmit, handleChange, errors, handleShow, showPassword}) => {

  return (
    <Box sx={{paddingTop:"20px", display: 'flex',  justifyContent: "center"}}>
      
      <form onSubmit={handleSubmit}>
      <Box sx={{paddingTop:"20px", display:"flex", flexDirection:"column", width: "100%" }}>
        <TextField sx={{paddingBottom: "5%"}} name="email" label="Email" variant="outlined" error={errors.email ? true : false} onChange={handleChange} helperText={errors.email}></TextField>
        <FormControl sx={{paddingBottom: "5%"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            error={errors.password ? true : false}
            onChange={handleChange}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShow}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            
          />
          <FormHelperText sx={{color: "#d32f2f"}}>{errors.password}</FormHelperText>
        </FormControl>
        <Button  type="submit" variant="contained">Loguearse</Button>
        <Button onClick={google}>Google</Button>
        </Box>
      </form>
      
    </Box>
  )
}

export default Login

