import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useTheme } from "@mui/material";

const PrevIcon = ({ sx }: any) => {
  const theme = useTheme();

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={theme.palette.primary.main} />
          <stop offset={1} stopColor={theme.palette.secondary.main} />
        </linearGradient>
      </svg>
      <ArrowBackIosNewIcon sx={{ fill: "url(#linearColors)", ...sx }} />
    </>
  );
};

export default PrevIcon;
