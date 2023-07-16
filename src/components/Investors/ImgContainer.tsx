import { Box } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";

const ImgContainer = ({ src, inView, delay }: any) => {
  const classes = useStyles();

  return (
    <Box
      sx={classes.imgCont}
      component={motion.div}
      initial={{
        y: -10,
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 100 : -175,
      }}
      transition={{ ease: "linear", duration: 0.25, delay }}
    >
      <Box sx={classes.diamond}>
        <Box component="img" src={src} alt="effect" sx={classes.img} />
      </Box>
    </Box>
  );
};

export default ImgContainer;
