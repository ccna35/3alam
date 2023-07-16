import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const GradientText = ({ sx, duration = 8, className, children }: any) => {
  const theme = useTheme();

  const grad = {
    ...sx,
    background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% auto",
    animation: `movingGradient ${duration}s linear infinite`,
    "@keyframes movingGradient": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "200% 50%",
      },
    },
  };

  return (
    <Box className={className}>
      <Typography sx={grad}>{children}</Typography>
    </Box>
  );
};

export default GradientText;
