import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{paddingLeft: "20%", paddingRight: "20%", backgroundColor: "#1A1A1A"}}>
      <Box
        sx={{
          maxHeight: "632px",
          width: "100%",
          display: "flex",
          backgroundColor: "#1A1A1A",
        }}
      >
        <Box sx={{ width: "50%", paddingTop: "10%" }}>
          <Box>
            <Typography variant="h2" sx={{ color: "secondary.second" }}>
              XX99 MARK II HEADPHONE
            </Typography>
          </Box>
          <Box>
            <Typography  variant="subtitle2" sx={{ color: "secondary.second", paddingTop: "5%", paddingBottom: "5%", paddingRight: "20%" }}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.main", borderRadius: "0" }}
          >
            See product
          </Button>
        </Box>
        <Box sx={{ width: "50%" }}>
          <img
            height={"90%"}
            src="https://audiophile.dlindegren.com/_next/static/media/xx99-mark-ii-headphones.f7f5fde6090b9f9cfd2ceb115f60aa37.jpg"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
