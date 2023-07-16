import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";
import GradientText from "../GradientText";

const ImgContainer = ({ src, text, sub, inView, delay }: any) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      component={motion.div}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        y: inView ? 0 : 100,
        opacity: inView ? 1 : 0,
      }}
      transition={{ ease: "linear", duration: 0.25, delay }}
    >
      <Box component="img" src={src} alt="effect" sx={classes.img} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GradientText sx={{ my: 1, fontSize: "25px", fontWeight: "bold" }}>
          {text}
        </GradientText>
        <Typography sx={{px:3}} align="center" color="primary" dir="rtl">
          {sub}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImgContainer;
