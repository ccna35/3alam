import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      minHeight: { xs: "auto", lg: "100dvh" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      scrollSnapAlign: "start",
      scrollBehavior: "smooth",
      height: "100dvh",
    },
    title: {
      "@media (max-width: 1800px)": {
        fontSize: 55,
        lineHeight: 1.4,
      },
      "@media (max-width: 800px)": {
        fontSize: 35,
      },
      fontSize: 95,
      lineHeight: 1,
      fontWeight: "bold",
    },

    slideContainer: {
      position: "absolute",
      left: -200,
      bottom: -200,
    },
    vrContainer: {
      position: "absolute",
      left: -10,
      bottom: -10,
    },
    flexArrow: {
      mt: 2,
      display: "flex",
      alignItems: "center",
    },
    diamond: {
      width: { xs: 300, lg: 420 },
      height: { xs: 300, lg: 490 },
      position: "relative",
      overflow: "hidden",
      clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
      zIndex: 1,
    },
    img: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "relative",
    },
    svg: {
      display: { xs: "none" },
      position: "absolute",
      left: { xs: 0, lg: 0 },
      bottom: { xs: 50, lg: 25 },
      width: "200px",
    },
    slideImage: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "550px",
      "@media (max-width: 1200px)": {
        width: "450px",
        display: "none",
      },
      "@media (max-width: 850px)": {
        width: "80%",
        display: "none",
      },

      "@media (max-width: 800px)": {
        width: "100%",
        display: "none",
      },
    },

    images: {
      "@media (max-width: 1200px)": {
        // height: "700px",
        height: "auto",
        display: "flex",
        justifyContent: "flex-end",
      },

      "@media (max-width: 1000px)": {
        // height: "500px",
        height: "auto",
      },
      "@media (max-width: 900px)": {
        // height: "600px",
        height: "auto",
      },
      "@media (max-width: 800px)": {
        // height: "700px",
        height: "auto",
      },
      "@media (max-width: 550px)": {
        // height: "500px",
        height: "auto",
      },
    },
    text: {
      fontSize: "25px",
      mt: 3,
      "@media (max-width: 700px)": {
        fontSize: "18px",
      },
    },
    text2: {
      fontSize: "20px",
      "@media (max-width: 700px)": {
        fontSize: "18px",
      },
    },
    arrowCont: {
      background: `linear-gradient(to left, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      p: 0.25,
      mr: 1,
    },
    imgCont: {
      display: { xs: "none", lg: "flex" },
      alignItems: "center",
      justifyContent: "center",
    },
    mobSlider: {
      display: { xs: "block", lg: "none" },
      position: "relative",
      width: { xs: "100%", md: "90%", lg: "75%" },
      left: "-25px",
      bottom: 0,
    },
  };

  return classes;
};

export default useStyles;
