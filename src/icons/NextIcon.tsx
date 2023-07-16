import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material";

const NextIcon = ({ sx }: any) => {
  const theme = useTheme();

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={theme.palette.primary.main} />
          <stop offset={1} stopColor={theme.palette.secondary.main} />
        </linearGradient>
      </svg>
      <ArrowForwardIosIcon sx={{ fill: "url(#linearColors)", ...sx }} />
    </>
  );
};

export default NextIcon;
