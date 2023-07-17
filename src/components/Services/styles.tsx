import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      backgroundColor: theme.palette.common.white,
      position: "relative",
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",

      height: "100dvh",
      overflow: "hidden",
    },
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: { xs: "80vh", lg: "0" },
    },
    title: {
      fontSize: { lg: 50, xs: 30 },
      lineHeight: 1.4,
      textAlign: "center",
      fontWeight: "bold",
      mb: 1,
      mt: { xs: 5, lg: 0 },
    },
    subtitleCont: {
      width: { lg: "400px", xs: "auto" },
      margin: "0 auto",
    },

    subtitle: { fontSize: 20, lineHeight: 1.2 },

    img: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "relative",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 3,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    svg: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: -1,
      bottom: 7.5,
      right: { xs: -15, lg: -25 },
    },
    text: {
      py: 3,
      fontSize: 30,
      color: theme.palette.common.white,
    },
  };

  return classes;
};

export default useStyles;
