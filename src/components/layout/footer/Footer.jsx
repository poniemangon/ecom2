import { Box, Typography, Grid } from "@mui/material";
import MenuContainer from "../../common/menu/MenuContainer";
import img from "../../../assets/img/logo_qnvapf.svg";
import text from "./text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        minHeight: "360px",
      }}
    >
      {/* Layout for xs screens */}
      <Box
        sx={{
          display: { sm: "none", xs: "flex", md: "none", lg: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "5%",
        }}
        xs={{ display: "block" }}
      >
        <Box sx={{ padding: "5%" }}>
          <img src={img} alt="" />
        </Box>
        <Box sx={{ padding: "5%" }}>
          <MenuContainer flexDirection="row" />
        </Box>

        <Typography
          align="center"
          variant="body2"
          sx={{ color: "secondary.second", paddingTop: "2%" }}
        >
          {text}
        </Typography>
      </Box>

      {/* Layout for sm and md screens */}
      <Box
        sx={{
          display: { sm: "flex", xs: "none", md: "flex", lg: "none" },
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
          paddingRight: "5%",
          padding: "3%",
        }}
        sm={{ display: "flex" }}
        md={{ display: "flex" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ padding: "5%" }}>
            <img src={img} alt="" />
          </Box>
          <Box sx={{ padding: "5%" }}>
            <MenuContainer flexDirection="row" />
          </Box>
        </Box>
        <Box sx={{ padding: "2%" }}>
          <Typography
            variant="body2"
            sx={{ color: "secondary.second", paddingTop: "0" }}
          >
            {text}
          </Typography>
        </Box>
      </Box>

      {/* Layout for lg screens */}
      <Box
        sx={{
          display: { sm: "none", xs: "none", md: "none", lg: "flex" },
          flexDirection: "row",
          // alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "20%",
          paddingLeft: "20%",
          paddingTop: "3%",
          
        }}
      >
        <Box sx={{ width: "50%", height: "100%" }}>
          <Box sx={{ paddingTop: "5%", '&:hover': {color: "primary.main"} }}>
           <Link to="/"> <img src={img} alt="" /></Link> 
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "secondary.second", paddingTop: "10%" }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingTop: "2%" }}>
          <MenuContainer flexDirection="row" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;


