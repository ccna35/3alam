import { Box, Typography, useTheme } from "@mui/material";
import Hexa from "../hexagon animation.gif";

const Loading = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Hexa.src}
        alt="Loading animation"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default Loading;
