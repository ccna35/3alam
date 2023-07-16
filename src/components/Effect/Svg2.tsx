import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Svg2 = ({ inView }: any) => {
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
        id="SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="244.4196"
        y1="10716.9482"
        x2="244.4196"
        y2="11261.9629"
        gradientTransform="matrix(1 0 0 -1 -152.0253 11349.9561)"
      >
        <stop offset="0" stopColor={theme.palette.primary.main} />
        <stop offset="1" stopColor={theme.palette.secondary.main} />
      </linearGradient>

      {/* Polygon */}
      <motion.polygon
        points="182,108.3 0,3.2 0,0 184.8,106.8 184.8,931.3 182,931.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "linear" }}
        fill="url(#SVGID_4_)"
        strokeWidth={3}
      />
    </svg>
  );
};

export default Svg2;
