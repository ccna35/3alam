import { useTheme } from "@mui/material";
import { useRTL } from "../../hooks/useRTL";

const useStyles = () => {
  const theme = useTheme();
  const { isRTL } = useRTL();
  return {
    search: {
      boxSizing: "content-box",
      borderWidth: "1px",
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
      left: "0",
      zIndex: 1,
      width: "100%",
      height: "30px",
    },
    input: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      height: "30px",
      px: 2,
    },
    iconCont: {
      background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box`,
      width: "30px",
      height: "30px",
      ml: "12px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nav: {
      position: "fixed",
      width: "100%",
      zIndex: 100,
      py: 1,
      borderWidth: "0",
      borderBottomWidth: "4px",
      borderStyle: "solid",
      borderImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      borderImageSlice: 1,
    },
    navBlue: {
      position: "fixed",
      width: "100%",
      zIndex: 100,
      py: 1,
      borderWidth: "0",
      borderBottomWidth: "4px",
      borderStyle: "solid",
      borderImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      borderImageSlice: 1,
      backgroundColor: theme.palette.background.default,
    },
    navWhite: {
      position: "fixed",
      width: "100%",
      zIndex: 100,
      py: 1,
      borderWidth: "0",
      borderBottomWidth: "4px",
      borderStyle: "solid",
      borderImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      borderImageSlice: 1,
      backgroundColor: theme.palette.common.white,
    },
    mobileNav: {
      width: "100vw", // Set the width to full viewport width
      backgroundColor: theme.palette.background.default, // Set your desired background color
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    bgNav: {
      position: "fixed",
      width: "100%",
      zIndex: 100,
      py: 1,
      backgroundColor: theme.palette.background.default,
    },
    between: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },

    title: {
      fontWeight: "bold",
      position: "relative",
      color: theme.palette.common.white,
      textDecoration: "none",
    },
    dot: {
      position: "absolute",
      width: "7.5px",
      height: "7.5px",
      content: `''`,
      backgroundColor: theme.palette.primary.main,
      bottom: "19%",
      right: "-50%",
    },
    drawerLink: {
      color: theme.palette.common.white,
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      boxSizing: "content-box",
      position: "relative",
      borderBottom: "none",
      borderRadius: 0,
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "1px",
        background: `linear-gradient(to left, ${theme.palette.secondary.main}, ${theme.palette.primary.main},transparent)`,
      },
      cursor: "pointer",
    },
    linkText: {
      fontSize: 25,
      py: 1.5,
    },
    heading: {
      minWidth: 250,
      "&:not(:first-child)": {
        borderRight: `1px solid ${theme.palette.primary.main}`,
      },
      px: 5,
    },
    subNavHeading: {
      fontWeight: "bold",
      marginBottom: theme.spacing(1),
    },
    navLink: {
      mr: 5,
      color: "#ffffff",
      pb: 1,
      position: "relative",
      cursor: "pointer",
      "&:after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "2px",
        left: "0",
        bottom: "0",
        background: `linear-gradient(to left, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        transform: "scaleX(0)",
        transition: "0.3s ease",
      },
      "&:hover:after": {
        transform: "scaleX(1)",
      },
      "&:hover": {
        "& .sub": {
          opacity: 1,
          transform: "translateY(0)",
          pointerEvents: "auto",
        },
      },
    },

    navLinkWhite: {
      mr: 5,
      color: theme.palette.primary.main,
      pb: 1,
      position: "relative",
      cursor: "pointer",
      "&:after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "2px",
        left: "0",
        bottom: "0",
        background: `linear-gradient(to left, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        transform: "scaleX(0)",
        transition: "0.3s ease",
      },
      "&:hover:after": {
        transform: "scaleX(1)",
      },
      "&:hover": {
        "& .sub": {
          opacity: 1,
          transform: "translateY(0)",
          pointerEvents: "auto",
        },
      },
    },

    subNavs: {
      pointerEvents: "none",
      borderRadius: 1,
      display: "flex",
      transition: "0.3s",
      opacity: 0,
      transform: "translateY(-15px)",
      position: "absolute",
      top: "100%",
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      padding: theme.spacing(1),
      zIndex: 10,
      py: 4,
    },
    subNavLink: {
      py: 0.5,
      color: theme.palette.common.black,
      fontWeight: 300,
      fontSize: "16px",
      cursor: "pointer",
      "&:not(:last-child)": {
        marginBottom: theme.spacing(1),
      },
    },

    select: {
      cursor: "pointer",
      display: "flex",
      border: `1px solid ${theme.palette.common.white}!important`,
      py: 1,
      mr: isRTL ? 2.5 : 0,
      ml: isRTL ? 0 : 2.5,
      pr: isRTL ? 0.75 : 0,
      pl: isRTL ? 0 : 0.75,

      borderRadius: 1,
      color: theme.palette.common.white,
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      ".MuiSvgIcon-root ": {
        fill: theme.palette.common.white,
      },
    },
    selectMobile: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      border: `1px solid ${theme.palette.common.white}!important`,
      py: 1,
      pr: isRTL ? 0.75 : 0,
      pl: isRTL ? 0 : 0.75,

      borderRadius: 1,
      color: theme.palette.common.white,
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      ".MuiSvgIcon-root ": {
        fill: theme.palette.common.white,
      },
    },
  };
};

export default useStyles;
