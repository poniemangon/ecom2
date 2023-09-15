import { Box, Typography } from "@mui/material";
import MenuContainer from "../../common/menu/MenuContainer";
import img from "../../../assets/img/logo_qnvapf.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ paddingTop: "5%", paddingLeft: "5%" }}>
        <img src={img} alt="" />
      </Box>
      <Box sx={{ paddingTop: "3%", paddingLeft: "5%" }}>
        <MenuContainer />
      </Box>
      <Box sx={{ paddingLeft: "5%", paddingTop: "2%", paddingRight: "30%" }}>
        <Typography variant="body2" sx={{color: "secondary.second"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea debitis laborum eius accusamus voluptatibus illo quis nobis! Necessitatibus quas molestias minus fuga assumenda eius vel qui quis animi facilis itaque, odio omnis accusantium voluptas nobis explicabo architecto illo ad magnam quasi asperiores dolorem error culpa. Odit aliquam eaque iste molestiae!</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
