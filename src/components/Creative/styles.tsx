import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    bg: {
      background: `linear-gradient(to left, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      position: "absolute",
      width: "50vw",
      bottom: 0,
      right: 0,
    },
    mobContent: {
      display: { xs: "flex", lg: "none" },
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "400px",
    },
    cont: {
      height: { xs: "350px", lg: "100dvh" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    robot: {
      position: "absolute",
      zIndex: 3,
      top: "50%",
      left: { sm: "-208px", lg: "-242px" },
      transform: "translateY(-50%)",
      width: { sm: 300, lg: 350 },
      height: { sm: 342.857142857, lg: 400 },
      "@media (max-width: 600px)": {
        width: "240px",
        height: "274.285714286px",
        left: "-166px",
      },
    },
    left: {
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: { xs: "center", lg: "flex-end" },
    },
    flex: {
      position: "relative",
      backgroundColor: theme.palette.common.white,
      scrollSnapAlign: "start",
      scrollBehavior: "smooth",
      height: "100dvh",
      overflow: "hidden",
    },
    title: {
      fontSize: 140,
      display: { xs: "none", lg: "block" },
      lineHeight: 1.2,
      fontWeight: "bold",
    },

    title2: {
      lineHeight: 1.2,
      fontSize: 25,
      display: { xs: "none", lg: "block" },
      width: "500px",
      mb: 4,
    },

    titleMob: {
      fontSize: 30,
      mb: 1,
      display: { xs: "block", lg: "none" },
      fontWeight: "bold",
      textAlign: "center",
    },
    title2Mob: {
      lineHeight: 1.2,
      fontSize: 20,
      display: { xs: "block", lg: "none" },
      textAlign: "center",
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
      cursor:"pointer"
    },
    svg: {
      position: "absolute",
      left: { xs: 0, lg: 0 },
      bottom: { xs: 50, lg: 25 },
      width: "200px",
    },
    img: {
      width: "100%",
      height: "100%",
    },
    slideImage: {
      position: "absolute",
      left: 0,
      bottom: -5,
      width: "450px",
      "@media (max-width: 1200px)": {
        display: "none",
      },
      zIndex: 1,
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
      fontSize: "18px",
      ml: 1,
    },
    arrowCont: {
      border: `2px solid ${theme.palette.common.white}`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
    },
  };

  return classes;
};

export default useStyles;
