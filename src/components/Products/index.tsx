import { Box, Container, Typography } from "@mui/material";
import useStyles from "./styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slide from "./Slide";

const Products = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="products" sx={classes.flex} ref={ref}>
      <Box sx={classes.overlay}>
        <Slide
          inView={inView}
          path="/images/download.svg"
          imgClass={classes.slideImage1}
          textClass={classes.content1}
          delay={1.05}
          content="المنتجات الأدارية"
          path2="/images/products1-icon.svg"
          addClass="slide"
        />
        <Slide
          inView={inView}
          path="/images/products2.svg"
          imgClass={classes.slideImage2}
          textClass={classes.content2}
          delay={0.7}
          content="المنتجات الصحية"
          path2="/images/products2-icon.svg"
        />
        <Slide
          inView={inView}
          path="/images/products3.svg"
          imgClass={classes.slideImage3}
          textClass={classes.content3}
          delay={0.35}
          content="المنتجات النقل"
          path2="/images/products3-icon.svg"
        />
        <Slide
          inView={inView}
          path="/images/products4.svg"
          imgClass={classes.slideImage4}
          textClass={classes.content4}
          delay={0}
          content="المنتجات الأمنية"
          path2="/images/products4-icon.svg"
        />
      </Box>
      <Container maxWidth="xl" sx={classes.container}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: { xs: 40, lg: 70 } }}
        >
          منتجات <br /> علم
        </Typography>
       
      </Container>
    </Box>
  );
};

export default Products;
