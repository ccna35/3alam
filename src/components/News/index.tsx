import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import useStyles from "./styles";
import GradientText from "../GradientText";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Svg from "./Svg";

const News = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/new1.png", "/images/new2.png", "/images/new3.png"];
  const texts = [
    "علم شريك مساهم في القمة العالمية للذكاء الاصطناعي.",
    "علم توقع مذكرة تفاهم مع وزارة السياحة لتغزيز التحول الرقمي في القطاع السياحي في المملكة.",
    "الهيئه الملكية توقع اتفاقا مع علم لأنشاء منظومة رقمية لتشغيل النقل.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box component="section" id="news" sx={classes.flex}>
      <Container maxWidth="xl">
        <AnimatePresence mode="wait">
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={classes.images}
              order={{ xs: 2, lg: 1 }}
            >
              <Box sx={classes.svgCont}>
                <Svg inView={inView} />
              </Box>
              <Box
                sx={classes.slideImage}
                component={motion.div}
                initial={{
                  x: 1100,
                  y: 500,
                }}
                animate={{
                  x: inView ? 0 : 1100,
                  y: inView ? 0 : 500,
                }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.35 }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="slide"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className={`img${index} ${
                      currentImageIndex === index ? "active" : ""
                    }`}
                  />
                ))}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              order={{ xs: 1, lg: 2 }}
              component={motion.div}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ ease: "linear", duration: 0.5 }}
            >
              <Typography sx={classes.title2} color="primary" ref={ref}>
                الاخبار
              </Typography>

              <GradientText sx={classes.title} className={`textAni`}>
                {texts[currentImageIndex]}
              </GradientText>

              <IconButton sx={{...classes.flexArrow, width:"fit-content"}}>
                <Typography
                  component="p"
                  variant="body1"
                  sx={classes.text}
                  color="primary"
                >
                  تعرف على أعمالنا
                </Typography>
                <Box sx={classes.arrowCont}>
                  <ArrowLeftIcon />
                </Box>
              </IconButton>
            </Grid>
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default News;
