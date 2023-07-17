import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        ...classes.flex,
        background: "url('./videos/gif-image.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    ></Box>
  );
};

export default Hero;
