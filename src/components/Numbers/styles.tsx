import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      backgroundColor: theme.palette.common.white,
      overflow: { xs: "hidden", lg: "initial" },
      position: "relative",
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",

      height: "100vh",
    },

    center: {
      display: "flex",
      justifyContent: "center",
      height: { xs: "auto", lg: "100%" },
      flexDirection: "column",
    },
    cont: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text: {
      fontSize: { xs: 50, sm: 70, lg: 160 },
      mb: 1,
      fontWeight: "bold",
      textAlign: { xs: "center", lg: "right" },
      lineHeight: 1.4,
    },
    counter: {
      fontSize: { xs: 40, sm: 60, lg: 80 },
      width: { xs: "120px", sm: "180px", lg: "260px" },
      textAlign: "left",
      "@media (max-width: 400px)": {
        width: 130,
        fontSize: 30,
      },
    },
    plus: {
      fontSize: { xs: 40, sm: 70, lg: 80 },
      width: { xs: "50px", sm: "80px", lg: "100px" },
      textAlign: "center",
      fontWeight: "bold",
      lineHeight: 0.8,
    },
    textCounter: {
      fontSize: { xs: 25, sm: 30, lg: 40 },
      mt: { xs: 1, lg: 2 },
      width: { xs: "160px", sm: "200px", lg: "305px" },
      "@media (max-width: 400px)": {
        fontSize: 20,
      },
    },

    br: { display: { xs: "none", lg: "block" } },
    svg: {
      position: "absolute",
      left: { xs: 0, lg: 0 },
      bottom: { xs: 50, lg: 25 },
      width: "200px",
    },
  };

  return classes;
};

export default useStyles;
