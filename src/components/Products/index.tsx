import { Box, Container, Typography } from "@mui/material";
import useStyles from "./styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slide from "./Slide";
import { useState } from "react";
import SimpleDialog from "./Dialog/SimpleDialogDemo";
import FullScreenDialog from "./Dialog/FullPageDiaglog";

const Products = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = [
    {
      id: 1,
      path: "/images/download.svg",
      imgClass: classes.slideImage2,
      textClass: classes.content1,
      delay: 1.05,
      content: "المنتجات الأدارية",
      path2: "/images/products1-icon.svg",
      addClass: "slide",
    },
    {
      id: 2,
      path: "/images/products2.svg",
      imgClass: classes.slideImage1,
      textClass: classes.content2,
      delay: 0.7,
      content: "المنتجات الأدارية",
      path2: "/images/products1-icon.svg",
      addClass: "slide",
    },
    {
      id: 3,
      path: "/images/download.svg",
      imgClass: classes.slideImage1,
      textClass: classes.content1,
      delay: 1.05,
      content: "المنتجات الأدارية",
      path2: "/images/products1-icon.svg",
      addClass: "slide",
    },
    {
      id: 4,
      path: "/images/download.svg",
      imgClass: classes.slideImage1,
      textClass: classes.content1,
      delay: 1.05,
      content: "المنتجات الأدارية",
      path2: "/images/products1-icon.svg",
      addClass: "slide",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <Box component="section" id="products" sx={classes.flex} ref={ref}>
      <FullScreenDialog
        open={open}
        onClose={handleClose}
        selectedValue={selectedValue}
        setOpen={setOpen}
      />
      <Box sx={classes.overlay}>
        <Slide
          inView={inView}
          path="/images/new-product-slides-images/management.svg"
          imgClass={classes.slideImage1}
          textClass={classes.content1}
          delay={1.05}
          content="المنتجات الإدارية"
          path2="/images/products1-icon.svg"
          addClass="slide"
          setSelectedValue={setSelectedValue}
          handleClickOpen={handleClickOpen}
        />
        <Slide
          inView={inView}
          path="/images/new-product-slides-images/health.svg"
          imgClass={classes.slideImage2}
          textClass={classes.content2}
          delay={0.7}
          content="المنتجات الصحية"
          path2="/images/products2-icon.svg"
          handleClickOpen={handleClickOpen}
          setSelectedValue={setSelectedValue}
        />
        <Slide
          inView={inView}
          path="/images/new-product-slides-images/transport.svg"
          imgClass={classes.slideImage3}
          textClass={classes.content3}
          delay={0.35}
          content="منتجات النقل"
          path2="/images/products3-icon.svg"
          handleClickOpen={handleClickOpen}
          setSelectedValue={setSelectedValue}
        />
        <Slide
          inView={inView}
          path="/images/new-product-slides-images/security.svg"
          imgClass={classes.slideImage4}
          textClass={classes.content4}
          delay={0}
          content="المنتجات الأمنية"
          path2="/images/products4-icon.svg"
          handleClickOpen={handleClickOpen}
          setSelectedValue={setSelectedValue}
        />
      </Box>
      <Container maxWidth="xl" sx={classes.container}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: "",
            fontSize: { xs: "2rem", lg: "3rem" },
            zIndex: 999,
          }}
        >
          منتجات
          <br />
          علم الرقمية
        </Typography>
      </Container>
    </Box>
  );
};

export default Products;
