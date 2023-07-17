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
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",

      height: "100dvh",
    },

    slideImage1: {
      position: "absolute",
      width: { xs: "25rem", lg: "50%" },
      left: { xs: "-14%", lg: "-20%" },
      bottom: { xs: "-3%", lg: "-2%" },
      height: { lg: "100%" },
      zIndex: 5,
      cursor: "pointer",
    },
    slideImage2: {
      position: "absolute",
      width: { xs: "25rem", lg: "50%" },
      left: { xs: "-14%", lg: "0%" },
      bottom: { xs: "0%", lg: "-15%" },
      height: { lg: "100%" },
      zIndex: 4,
      cursor: "pointer",
    },
    slideImage3: {
      position: "absolute",
      width: { xs: "25rem", lg: "75%" },
      left: { xs: "-14%", lg: "13%" },
      bottom: { xs: "19%", lg: "-17%" },
      height: { lg: "100%" },
      zIndex: 3,
      cursor: "pointer",
    },
    slideImage4: {
      position: { xs: "absolute", lg: "relative" },
      width: { xs: "25rem", lg: "100%" },
      left: { xs: "-14%", lg: 0 },
      right: { lg: "-26%" },
      bottom: { xs: "38%", lg: "-15%" },
      height: { lg: "100%" },
      zIndex: 2,
      cursor: "pointer",
    },
    content1: {
      top: { xs: "25%", lg: "31%" },
      left: { xs: "72%", md: "55%", lg: "69.5%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-30%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content2: {
      top: { xs: "13%", lg: "12%" },
      left: { xs: "72%", md: "55%", lg: "69.5%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-20%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content3: {
      top: { xs: "13%", lg: "12%" },
      left: { xs: "72%", md: "60%", lg: "62.5%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-15%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    content4: {
      top: { xs: "13%", lg: "12%" },
      left: { xs: "72%", md: "60%", lg: "59.5%" },
      zIndex: 10,
      position: "absolute",
      transform: "translateY(-15%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "40px", lg: "100px" },
      textAlign: "center",
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      // zIndex: -1,
    },
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexDirection: { xs: "column", lg: "row" },
      pb: 3,
      pt: { xs: 10, lg: 0 },
    },
  };

  return classes;
};

export default useStyles;
