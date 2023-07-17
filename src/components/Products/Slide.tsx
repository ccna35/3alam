import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

const Slide = ({
  path,
  delay,
  inView,
  imgClass,
  textClass,
  content,
  path2,
  addClass,
  setSelectedValue,
  handleClickOpen,
}: any) => {
  return (
    <Box
      sx={imgClass}
      component={motion.div}
      initial={{
        x: -1100,
        y: 500,
      }}
      animate={{
        x: inView ? 0 : -1100,
        y: inView ? 0 : 500,
      }}
      transition={{ ease: "linear", duration: 0.35, delay }}
      onClick={() => {
        handleClickOpen();
        setSelectedValue(path);
        console.log(path);
      }}
    >
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <img
          src={path}
          className={addClass}
          alt="slide"
          style={{ width: "100%", height: "100%" }}
        />
        <Box sx={textClass}>
          <img src={path2} alt="slide" className="icon-img" />
          <Typography sx={{ fontSize: { xs: 20, lg: 40 } }}>
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide;
