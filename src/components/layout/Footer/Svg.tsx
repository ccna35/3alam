import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Svg = ({ inView }: any) => {
  const theme = useTheme();

  return (
    <svg
      height="560"
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
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-20751.1836"
        y1="547.2394"
        x2="-20751.1836"
        y2="-452.2163"
        gradientTransform="matrix(-1 0 0 -1 -20510.3926 547.2394)"
      >
        <stop
          offset="0"
          stopColor={theme.palette.primary.main}
          stopOpacity="0"
        />
        <stop offset="1" stopColor={theme.palette.secondary.main} />
      </linearGradient>

      {/* Polyline */}
      <motion.polyline
        style={{
          fill: "none",
          stroke: "url(#SVGID_1_)",
          strokeWidth: 3,
          strokeMiterlimit: 10,
        }}
        points="1.5,0 1.5,826.7 297.7,997.7 480.1,895.5 480.1,589.2 296.5,482.6 296.5,0"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Svg;
