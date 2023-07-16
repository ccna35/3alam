import { useRTL } from "../../hooks/useRTL";
import { useTheme } from "@mui/material";

const useStyles = () => {
  const { isRTL } = useRTL();
  const theme = useTheme();

  const classes = {
    homeText: {
      fontSize: { xs: 20, lg: 40 },
    },
    subText: {
      fontSize: { xs: 25, lg: 60 },
    },
    centerText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    flex: {
      direction: isRTL ? "rtl" : "ltr",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    videoContainer: {
      position: "relative",
      minHeight: "100dvh",
      overflow: "hidden",
    },

    video: {
      minHeight: "100%",
      minWidth: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -3,
    },

    prev: {
      position: "absolute",
      left: { xs: 16, lg: 24 },
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "50px",
        padding: "2px",
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        "-webkit-mask": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
      },
    },

    next: {
      position: "absolute",
      right: { xs: 16, lg: 24 },
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "50px",
        padding: "2px",
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        "-webkit-mask": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
      },
    },
    icon: {
      background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return classes;
};

export default useStyles;
