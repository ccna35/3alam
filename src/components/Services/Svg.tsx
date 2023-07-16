import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Svg = ({ inView }: any) => {
  const theme = useTheme();

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 324.2 504.8"
      xmlSpace="preserve"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="252.3967"
        x2="324.2242"
        y2="252.3967"
      >
        <stop offset="0" stopColor={theme.palette.primary.main} />
        <stop offset="1" stopColor={theme.palette.secondary.main} />
      </linearGradient>

      {/* Polygon */}
      <motion.polygon
        style={{
          fill: "none",
          stroke: "url(#SVGID_1_)",
          strokeWidth: 3.1105,
          strokeMiterlimit: 10,
        }}
        points="322.7,413 162.1,503 1.6,413 1.6,91.8 162.1,1.8 322.7,91.8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "linear" }}
      />
    </svg>
  );
};

export default Svg;
