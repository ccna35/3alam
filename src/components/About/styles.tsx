import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      scrollSnapAlign: "start",
      scrollBehavior: "smooth",
    },
    title: {
      mt: 4,
      "@media (max-width: 800px)": {
        fontSize: 35,
      },
      fontWeight: "bold",
      fontSize: 53,
      lineHeight: 1.3,
    },

    flexArrow: {
      mt: 4,
      display: "flex",
      alignItems: "center",
    },
    svg: {
      position: "absolute",
      right: -5,
      bottom: -5,
      "@media (max-width: 1200px)": {
        right: -58,
      },
    },
    svgCont: {
      height: { xs: "auto", lg: "262.5px" },
    },
    slideImage: {
      position: "absolute",
      left: 0,
      bottom: -150,
      width: "700px",
      "@media (max-width: 1200px)": {
        width: "60%",
      },
      "@media (max-width: 850px)": {
        width: "70%",
      },

      "@media (max-width: 600px)": {
        width: "90%",
      },
    },
    vrImage: {
      position: "absolute",
      left: -10,
      bottom: -10,
      width: "800px",
      "@media (max-width: 1500px)": {
        width: "800px",
      },
      "@media (max-width: 1200px)": {
        width: "60%",
      },
      "@media (max-width: 900px)": {
        width: "70%",
      },

      "@media (max-width: 850px)": {
        width: "80%",
      },
      "@media (max-width: 600px)": {
        width: "100%",
      },
    },
    images: {
      "@media (max-width: 1200px)": {
        height: "700px",
      },

      "@media (max-width: 1000px)": {
        height: "500px",
      },

      "@media (max-width: 550px)": {
        height: "400px",
      },
      "@media (max-width: 400px)": {
        height: "300px",
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
