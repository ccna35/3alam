import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Svg = ({ inView }: any) => {
  const theme = useTheme();

  return (
    <svg
      height="700"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 481.6 999.5"
      xmlSpace="preserve"
    >
      <linearGradient
        id="SVGID_10_"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="499.7279"
        x2="481.584"
        y2="499.7279"
      >
        <stop offset="0" stopColor={theme.palette.primary.main} />
        <stop offset="1" stopColor={theme.palette.secondary.main} />
      </linearGradient>

      {/* Polyline */}
      <motion.polyline
        style={{
          fill: "none",
          stroke: "url(#SVGID_10_)",
          strokeWidth: 3,
          strokeMiterlimit: 10,
        }}
        points="480.1,999.5 480.1,172.8 183.9,1.7 1.5,104 1.5,410.2 185.1,516.9 185.1,999.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Svg;
