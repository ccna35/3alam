import { useState } from "react";
import useStyles from "../styles";
import { Box, Typography } from "@mui/material";

const NavLink = ({ link, navLinkClass }: any) => {
  const classes = useStyles();

  return (
    <Box key={link.label} sx={navLinkClass}>
      <Typography>{link.label}</Typography>
      {link.subNavs.length > 0 && (
        <Box sx={{...classes.subNavs, cursor:"default" ,
        ...(link.label === 'من نحن' && {
          right:"-22vw"
        }),
        ...(link.label === 'أعمالنا' && {
          right:"-45vw"
        }),
        ...(link.label === 'المستثمرون' && {
          left:"-10vw"
        }),
        ...(link.label === 'الأسواق' && {
          right:"-50px"
        }),
        ...(link.label === 'الأخبار' && {
          left:"-100px"
        }),
        ...(link.label === 'التوظيف' && {
          left:"-20px"
        }),}} className="sub">
          {link.subNavs.map((subNav: any) => (
            <Box sx={{...classes.heading}}>
              <Typography
                color="primary"
                variant="subtitle1"
                sx={classes.subNavHeading}
              >
                {subNav.heading}
              </Typography>
              {subNav.list.map((item: any) => (
                <Typography
                  color="primary"
                  key={item.label}
                  sx={{...classes.subNavLink, ":hover":{color:"#a21c9e"}}}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavLink;
