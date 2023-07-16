import { Box, useTheme } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
const PrevIcon = ({ sx }: any) => {
  const theme = useTheme();

  return (
    <Box>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={theme.palette.primary.main} />
          <stop offset={1} stopColor={theme.palette.secondary.main} />
        </linearGradient>
      </svg>

      <WestIcon sx={{ fill: "url(#linearColors)", ...sx }} />
    </Box>
  );
};

export default PrevIcon;
