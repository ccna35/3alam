import { Box, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useStyles from "./styles";
import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";

const Home = () => {
  const classes = useStyles();
  const swiperRef: any = useRef();
  const smallScreen = useMediaQuery('(max-width:768px)');

 

  return (
    <Box
      component="section"
      id="home"
      sx={{
        scrollSnapAlign: "start",
        scrollBehavior: "smooth",
        height: "100dvh",
      }}
    >
       {!smallScreen&&
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        dir="ltr"
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        loop
      >
       <SwiperSlide>
          <video style={classes.video as any} loop muted autoPlay>
            <source src="/videos/vid1.mp4" type="video/mp4" />
          </video>

          <Container maxWidth="xl" sx={classes.flex}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={classes.prev}
            >
              <PrevIcon sx={classes.icon} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={classes.next}
            >
              <NextIcon sx={classes.icon} />
            </IconButton>
          </Container>
        </SwiperSlide>
      

        <SwiperSlide>
          <video style={classes.video as any} loop muted autoPlay>
            <source src="/videos/vid2.mp4" type="video/mp4" />
          </video>

          <Container maxWidth="xl" sx={classes.flex}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={classes.prev}
            >
              <PrevIcon sx={classes.icon} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={classes.next}
            >
              <NextIcon sx={classes.icon} />
            </IconButton>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <video style={classes.video as any} loop muted autoPlay>
            <source src="/videos/vid3.mp4" type="video/mp4" />
          </video>

          <Container maxWidth="xl" sx={classes.flex}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={classes.prev}
            >
              <PrevIcon sx={classes.icon} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={classes.next}
            >
              <NextIcon sx={classes.icon} />
            </IconButton>
          </Container>
        </SwiperSlide>
      </Swiper>
}
{smallScreen&&
  <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        dir="ltr"
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        loop
      >

        <SwiperSlide>
          <video style={classes.smallVideo as any} loop muted autoPlay>
            <source src="/videos/m2.mp4" type="video/mp4" />
          </video>

          <Container maxWidth="xl" sx={classes.flex}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={classes.prev}
            >
              <PrevIcon sx={classes.icon} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={classes.next}
            >
              <NextIcon sx={classes.icon} />
            </IconButton>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <video style={classes.smallVideo as any} loop muted autoPlay>
            <source src="/videos/m1.mp4" type="video/mp4" />
          </video>

          <Container maxWidth="xl" sx={classes.flex}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={classes.prev}
            >
              <PrevIcon sx={classes.icon} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={classes.next}
            >
              <NextIcon sx={classes.icon} />
            </IconButton>
          </Container>
        </SwiperSlide>
      </Swiper>
}
    </Box>
  );
};

export default Home;
