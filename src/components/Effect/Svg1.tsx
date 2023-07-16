import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Svg1 = ({ inView }: any) => {
  const theme = useTheme();

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 184.8 931.3"
      xmlSpace="preserve"
    >
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="-7912.2573"
        y1="10827.2461"
        x2="-7912.2573"
        y2="11372.2607"
        gradientTransform="matrix(-1 0 0 -1 -7819.8628 11460.2539)"
      >
        <stop offset="0" stopColor={theme.palette.primary.main} />
        <stop offset="1" stopColor={theme.palette.secondary.main} />
      </linearGradient>

      {/* Polygon */}
      <motion.polygon
        points="2.7,108.3 184.8,3.2 184.8,0 0,106.8 0,931.3 2.7,931.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "linear" }}
        fill="url(#SVGID_3_)"
        strokeWidth={3}
      />
    </svg>
  );
};

export default Svg1;
