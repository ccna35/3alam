import { Box, Container, Typography } from "@mui/material";
import useStyles from "./styles";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import GradientText from "../GradientText";
import ImgContainer from "./ImgContainer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { BreakPoints } from "../../contexts/ThemeContext";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";

const Effect = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="effect" sx={classes.flex}>
      <Box sx={classes.svgRight}>
        <Svg1 inView={inView} />
      </Box>
      <Box sx={classes.svgLeft}>
        <Svg2 inView={inView} />
      </Box>

      <Container maxWidth="lg" sx={classes.container}>
        <Box
          sx={{ mt: 6, mb: 4 }}
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
          <GradientText sx={classes.title}>تأثيرنا</GradientText>
          <Box sx={classes.subtitleCont}>
            <Typography
              component="h3"
              sx={classes.subtitle}
              align="center"
              color="primary"
            >
              مبادرات مؤثرة لغد أفضل
            </Typography>
          </Box>
        </Box>
        <Box ref={ref}>
          <Swiper
            dir="ltr"
            modules={[Navigation, Pagination, EffectFade]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            centeredSlides
            loop
            autoplay
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
              },
              [BreakPoints.md]: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                centeredSlides: true,
              },
              [BreakPoints.lg]: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false,
              },
            }}
          >
            <SwiperSlide>
              <ImgContainer
                src="/images/effect3.png"
                text="الإبداع"
                sub="تلتزم علم دوما بتطبيق التقنيات المتقدمة، واعتماد مبادئ التكامل الإجتماعي وتكافؤ الفرص في المجتمعات التي نخدمها، ونركز بشكل كبير علي تشجيع الابتكار والتفكير الإبداعي."
                inView={inView}
                delay={0.25}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgContainer
                src="/images/effect2.png"
                text="الأثر المجتمعي"
                sub="تواصل علم الترويج لثقافة رقمية شاملة تسهم في تقريب المجتمعات التي تعمل فيها، وتهدف الشركة، من خلال الابتكار الرقمي المستدام، إلي تلبية الاحتياجات المتطورة لأصحاب المصلحة وتمكينهم من تحقيق أهدافهم."
                inView={inView}
                delay={0.5}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgContainer
                src="/images/effect1.png"
                text="الاستدامة"
                sub="تتربع الاستدامة في قلب كل ما تقوم به شركة علم، ولطالما كانت مبادئ الاستدامة الواضحة بوصلة توجهنا طوال رحلتنا الرامية لتحقيق التقدم والتنويع والنمو."
                inView={inView}
                delay={0.75}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Effect;
