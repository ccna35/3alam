import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      backgroundColor: theme.palette.common.white,
      overflow: "hidden",
      position: "relative",
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",

      height: "100dvh",
    },
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    title: {
      fontSize: { lg: 65, xs: 40 },
      textAlign: "center",
      fontWeight: "bold",
      mb: 1,
      mt: { xs: 3, lg: 0 },
    },

    subtitleCont: {
      width: { lg: "400px", xs: "auto" },
      margin: "0 auto",
    },
    subtitle: { fontSize: { lg: 30, xs: 20 }, lineHeight: 1 },

    img: {
      display: "block",
      height: "300px",
      width: "260px",
      objectFit: "cover",
      position: "relative",
    },

    center: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },

    text: {
      py: 3,
      fontSize: 30,
      color: theme.palette.common.white,
    },
    svgLeft: {
      position: "absolute",
      left: { xs: "-5%", sm: "-10%", lg: "-5px" },
      top: "65px",
      width: "90px",
      "@media (max-width: 400px)": {
        left: "-10%",
      },
    },
    svgRight: {
      position: "absolute",
      right: { xs: "-5%", sm: "-10%", lg: "-5px" },
      top: "65px",
      width: "90px",
      "@media (max-width: 400px)": {
        right: "-10%",
      },
    },
  };

  return classes;
};

export default useStyles;
