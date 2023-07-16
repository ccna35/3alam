import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { easeIn, motion } from "framer-motion";
import Svg from "./Svg";

const ImgContainer = ({ src, text, inView, delay }: any) => {
  const classes = useStyles();

  return (
    <Box
      sx={{ position: "relative", bottom: "-3px", cursor:"pointer" }}
      component={motion.div}
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        y: inView ? 0 : 200,
        opacity: inView ? 1 : 0,
      }}
      transition={{ ease: "linear", duration: 0.35}}
      whileHover={{
        scale: 1,
        x: 25,
        y: -25,
        transition: {ease:easeIn ,duration: 0.1 }
      }}
    >
      <Box component="img" src={src} alt="services" sx={classes.img} />
      <Box sx={classes.overlay}>
        <Typography sx={classes.text}>{text}</Typography>
      </Box>
      <Box sx={classes.svg}>
        <Svg inView={inView} />
      </Box>
    </Box>
  );
};

export default ImgContainer;
