import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import Svg from "./Svg";
import GradientText from "../GradientText";

const Creative = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="creative" sx={classes.flex}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} lg={6} sx={classes.mobContent}>
            <GradientText sx={classes.titleMob}>الابتكار والابحاث</GradientText>
            <Typography color="primary" sx={classes.title2Mob}>
              نهدف من خلالها الي ادارة وتنفيذ دورة حياة كاملة للمنتج بداية من
              تحديد وتكوين حل شامل وحتي اطلاقه وتحقيق نجاحه
            </Typography>

            
              <IconButton sx={{...classes.flexArrow}}>
              <Typography
                component="p"
                variant="body1"
                sx={classes.text}
                color="primary"
              >
                تعرف على المزيد
              </Typography>
              <Box sx={classes.arrowCont}>
                <ArrowLeftIcon />
                </Box>
              </IconButton>
            
          </Grid>
          <Grid item xs={12} lg={6} ref={ref}>
            <Box sx={classes.bg}>
              <Container maxWidth="xl" sx={classes.cont}>
                <Typography sx={classes.title}>الابتكار والابحاث</Typography>
                <Box>
                  <Typography sx={classes.title2}>
                    نهدف من خلالها الي ادارة وتنفيذ دورة حياة كاملة للمنتج بداية
                    من تحديد وتكوين حل شامل وحتي اطلاقه وتحقيق نجاحه
                  </Typography>
                  <Box
                    sx={{
                      ...classes.flexArrow,
                      display: { xs: "none", lg: "flex" },
                    }}
                  >
                    <Typography component="p" variant="body1" sx={classes.text}>
                      تعرف على المزيد
                    </Typography>
                    <Box sx={classes.arrowCont}>
                      <ArrowLeftIcon />
                    </Box>
                  </Box>
                </Box>
              </Container>
              <Box sx={classes.robot}>
                <img
                  src="/images/robot.png"
                  alt="robot"
                  style={classes.img as any}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={classes.left}
            component={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
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

            <Box sx={{ height: "400px" }}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: -400, lg: -200 },
                  left: 0,
                }}
              >
                <Svg inView={inView} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Creative;
