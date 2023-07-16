import { Box, Typography, useTheme } from "@mui/material";
import Hexa from "../hexagon animation.gif";

const Loading = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor:"#05040F"
      }}
    >
      <img
        src={Hexa.src}
        alt="Loading animation"
        style={{ objectFit: "contain",  }}
      />
    </Box>
  );
};

export default Loading;
