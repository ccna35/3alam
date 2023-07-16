import { Box, Container, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import GradientText from "../GradientText";
import ImgContainer from "./ImgContainer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BreakPoints } from "../../contexts/ThemeContext";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
const Services = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="services" sx={classes.flex}>
      <Container maxWidth="xl" sx={classes.container}>
        <Box />
        <Box
          component={motion.div}
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            y: inView ? 0 : -50,
            opacity: inView ? 1 : 0,
          }}
          transition={{ ease: "linear", duration: 0.25 }}
        >
          <GradientText sx={classes.title}>
            مثابرون علي تحقيق القيمة
          </GradientText>
          <Box sx={classes.subtitleCont}>
            <Typography
              component="h3"
              sx={classes.subtitle}
              align="center"
              color="primary"
            >
              نبتكر التطبيقات والمنتجات الرقمية التي تمكن الجميع من تحقيق
              تطلعاتهم ورغباتهم
            </Typography>
          </Box>
        </Box>
        <Box ref={ref}>
          <Swiper
            style={{ overflow: "inherit" }}
            dir="ltr"
            slidesPerView={4}
            centeredSlides
            loop
            modules={[Navigation, Pagination, EffectFade]}
            pagination={{ clickable: true }}
            autoplay
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
              },
              [BreakPoints.md]: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              [BreakPoints.lg]: {
                slidesPerView: 4,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            <SwiperSlide>
              <ImgContainer
                src="/images/service1.png"
                text="إسناد الأعمال"
                inView={inView}
                delay={0}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgContainer
                src="/images/service2.png"
                text="الحلول"
                inView={inView}
                delay={0.35}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgContainer
                src="/images/service3.png"
                text="المنتجات الرقمية"
                inView={inView}
                delay={0.7}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgContainer
                src="/images/service4.png"
                text="الخدمات الاستشارية"
                inView={inView}
                delay={1.05}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
