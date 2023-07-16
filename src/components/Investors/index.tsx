import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useStyles from "./styles";
import GradientText from "../GradientText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImgContainer from "./ImgContainer";

const Investors = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="investors" sx={classes.flex}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{ pt: "150px!important", display: { xs: "block", lg: "none" } }}
          />
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            xs={12}
            lg={4}
            component={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{ ease: "linear", duration: 0.35 }}
          >
            <GradientText sx={classes.title}>المستثمرون</GradientText>
            <Typography component="p" variant="body1" sx={classes.text}>
              بدأت رحلتنا في العام ۱۹۸۸ ومستمرون في تحقيق الأهداف وتخطي الصعوبات
              وتمهيد السبل لنحقق رؤيتنا في حقبة جديدة من التحول الرقمي
              والابتكارات
            </Typography>

            <IconButton sx={{...classes.flexArrow, width:"fit-content", borderRadius:2}} ref={ref}>
              <Typography component="p" variant="body1" sx={classes.text2}>
                لتحميل الملف
              </Typography>
              <Box sx={classes.arrowCont}>
                <ArrowDropDownIcon />
              </Box>
            </IconButton>
          </Grid>
          <Grid item xs={12} lg={8} sx={classes.images}>
            <Box
              sx={classes.svg}
              component={motion.div}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: inView ? 1 : 0,
              }}
              transition={{ ease: "linear", duration: 0.35, delay: 1 }}
            >
              <img
                src="/images/line1.svg"
                alt="slide"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
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
              transition={{ ease: "linear", duration: 0.35, delay: 0.5 }}
            >
              <img
                src="/images/slide.svg"
                alt="slide"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <ImgContainer
              src="/images/news0.png"
              inView={inView}
              delay={0.75}
            />
            <Box
              sx={classes.mobSlider}
              component={motion.div}
              initial={{
                x: -1100,
                y: 500,
              }}
              animate={{
                x: inView ? 0 : -1100,
                y: inView ? 0 : 500,
              }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.35 }}
            >
              <img
                src="/images/mob-invest.png"
                alt="slide"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Investors;
