import { Box, Typography, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';






const TinyProductCard = ({id, name, quantity, image}) => {

  return (
    <Box sx={{display: "flex", flexDirection:"row", paddingBottom: "5%"}}>
        <Box sx={{width: "30%"}}>
            
            <img width="100%" src={image} alt="" />
        </Box>
        <Box sx={{padding: "3%"}}>
          <Box sx={{display: 'flex', flexDirection: "row"}}>
          <Typography variant="h6">{name}</Typography>
            <DeleteIcon onClick={onRemove}/>
          </Box>
          
            
            <Typography variant="overline">{quantity}</Typography>
        </Box>

    </Box>
  )
}

export default TinyProductCard
