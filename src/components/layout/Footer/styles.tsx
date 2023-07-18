import { useTheme } from "@mui/material";

const useStyles = () => {
  const theme = useTheme();

  const classes = {
    flex: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      scrollSnapAlign: "start",

      scrollBehavior: "smooth",
      // scrollSnapType: "y proximity",
      height: { xs: "auto", lg: "100vh" },
    },
    title: {
      fontSize: 28,
    },
    footerLink: {
      my: { xs: 0.3, lg: 1 },
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
    search: {
      boxSizing: "content-box",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "transparent",
      background: `linear-gradient(to left, ${theme.palette.secondary.main}, ${theme.palette.primary.main}) border-box`,
      borderImageSlice: 1,
      borderRadius: "50px",
      "-webkit-mask":
        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
      "-webkit-mask-composite": "xor",
      "mask-composite": "exclude",
      position: "absolute",
      zIndex: 1,
      width: "250px",
      height: "35px",
      py: 0.5,
    },
    input: {
      position: "relative",
      zIndex: 2,
      width: "250px",
      height: "35px",
      px: 2,
      py: 0.5,
    },
    white: {
      background: theme.palette.common.white,
      width: "100%",
    },
    flex2: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    btn: {
      background: theme.palette.primary.main,
      ml: 3,
      "&:hover": {
        background: theme.palette.primary.main,
        opacity: 0.7,
      },
    },
    footerLinkWhite: {
      ml: 3,
      fontSize: 16,
      color: theme.palette.primary.main,
      my: 1,
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  };
  return classes;
};

export default useStyles;
