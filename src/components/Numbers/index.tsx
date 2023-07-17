import { Box, Container, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import GradientText from "../GradientText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BreakPoints } from "../../contexts/ThemeContext";
import CountUp from "react-countup";
import Count from "./Count";
import Svg from "./Svg";

const Numbers = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="numbers" sx={classes.flex}>
      <Container maxWidth="lg" sx={classes.cont}>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={6}
            sx={classes.center}
            component={motion.div}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              x: inView ? 0 : 50,
              opacity: inView ? 1 : 0,
            }}
            transition={{ ease: "linear", duration: 0.25 }}
          >
            <GradientText sx={classes.text}>
              علم <Box component="br" sx={classes.br} />
              بالأرقام
            </GradientText>
          </Grid>
          <Grid item xs={12} lg={6} sx={classes.center} ref={ref}>
            <Count end={50000} duration={2} text="عميل" />
            <Count end={3000} duration={1} text="موظف" />
            <Count end={50} duration={0.5} text="علامة تجارية" />
            <Count end={30} duration={0.5} text="عاما نحو الرقمنة" />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: "absolute", bottom: -520, left: -3, zIndex: 0 }}>
        <Svg inView={inView} />
      </Box>
    </Box>
  );
};

export default Numbers;
