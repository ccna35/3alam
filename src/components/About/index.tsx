import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import useStyles from "./styles";
import GradientText from "../GradientText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Svg from "./Svg";

const About = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="about" sx={classes.flex}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            xl={6}
            lg={5}
            component={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{ ease: "linear", duration: 0.35 }}
          >
            <GradientText sx={classes.title}>
              نقود مسيرة التطور نحو خدمات رقمية مبتكرة ومتكاملة ونقدم حلولا
              تقنية شاملة
            </GradientText>
            <IconButton sx={{...classes.flexArrow, borderRadius:1}} ref={ref}>
              <Typography component="p" variant="body1" sx={classes.text}>
                تعرف على أعمالنا
              </Typography>
              <Box sx={classes.arrowCont}>
                <ArrowLeftIcon />
              </Box>
            </IconButton>
            <Box sx={classes.svgCont}>
              <Box sx={classes.svg}>
                <Svg inView={inView} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} xl={6} lg={7} sx={classes.images}>
            <Box
              sx={classes.slideImage}
              component={motion.div}
              initial={{
                x: -1100,
                y: 500,
              }}
              animate={{
                x: inView ? 0 : -1100,
                y: inView ? 0 : 500,
              }}
              transition={{ ease: "linear", duration: 0.35, delay: 0.35 }}
            >
              <img
                src="/images/slide.svg"
                alt="slide"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={classes.vrImage}
              component={motion.div}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: inView ? 1 : 0,
              }}
              transition={{ ease: "linear", duration: 0.35, delay: 0.7 }}
            >
              <img
                src="/images/vr.png"
                alt="vr"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
