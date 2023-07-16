import React from "react";
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
      width="350"
      height="262.5"
      viewBox="0 0 300 230"
      xmlSpace="preserve"
    >
      <g>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="115"
          x2="300"
          y2="115"
        >
          <stop offset="0" stopColor={theme.palette.secondary.main} />
          <stop offset="1" stopColor={theme.palette.primary.main} />
        </linearGradient>
        {/* First Line */}
        <motion.path
          d="M0,230 0,115"
          fill="none"
          stroke="url(#SVGID_1_)"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "linear", delay: 0 }}
        />

        {/* Second Line */}
        <motion.path
          d="M0,115 150,0"
          fill="none"
          stroke="url(#SVGID_1_)"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "linear", delay: 0.35 }}
        />

        {/* Third Line */}
        <motion.path
          d="M150,0 300,58"
          fill="none"
          stroke="url(#SVGID_1_)"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "linear", delay: 0.7 }}
        />
      </g>
    </svg>
  );
};

export default Svg;
