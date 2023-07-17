import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: theme.palette.common.white,
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",

      height: "100dvh",
    },
    svgCont: {
      position: "absolute",
      bottom: 0,
      right: 0,
      display: { xs: "none", lg: "block" },
    },
    title: {
      "@media (max-width: 2000px)": {
        fontSize: 55,
        lineHeight: 1.5,
      },
      "@media (max-width: 1800px)": {
        fontSize: 55,
        lineHeight: 1.4,
      },
      "@media (max-width: 800px)": {
        fontSize: 25,
      },

      fontWeight: "bold",
    },

    title2: {
      lineHeight: 1.2,
      mb: 1,
      fontWeight: "bold",
      fontSize: 40,
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
    svg: {
      position: "absolute",
      left: { xs: 0, lg: 0 },
      bottom: { xs: 50, lg: 25 },
      width: "200px",
    },
    slideImage: {
      position: "absolute",
      height: "500px",
      bottom: 0,
      right: 0,
      width: "625px",

      "@media (max-width: 700px)": {
        width: "500px",
        height: "400px",
      },
      "@media (max-width: 520px)": {
        width: "90%",
        height: "260px",
      },
    },

    images: {
      "@media (max-width: 1200px)": {
        height: "500px",
      },
      "@media (max-width: 420px)": {
        height: "100px",
      },
    },

    text: {
      fontSize: "25px",
      ml: 1,
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
    },
  };

  return classes;
};

export default useStyles;
