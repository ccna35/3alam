import { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import useStyles from "../styles";
import MenuIcon from "@mui/icons-material/Menu";
import PrevIcon2 from "../../../icons/PrevIcon2";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import Search from "@mui/icons-material/Search";
import NavLink from "./NavLink";
import { ScrollContext } from "../../../contexts/ScrollContext";
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";

const Nav = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("null");
  const { activeSection } = useContext(ScrollContext)!;
  const theme = useTheme();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const menuLinks = [
    {
      label: "من نحن",
      subNavs: [
        {
          heading: "الشركة",
          list: [
            { label: "نبذة عامة" },
            { label: "مبادئ القيادة" },
            { label: "قيمنا" },
            { label: "حقائق عن علم" },
          ],
        },
        {
          heading: "لماذا علم",
          list: [
            { label: "دراسة حالة" },
            { label: "الجوائز وشهادات التقدير" },
            { label: "تأثيرنا" },
            { label: "الابتكار والابحاث" },
          ],
        },
        {
          heading: "الاستثمارات",
          list: [
            { label: "الفلسفة الاستثمارية" },
            { label: "الفريق الاستثماري" },
            { label: "الشركات التابعة" },
            { label: "شركات رأس المال الجزئي" },
            { label: "الأستحواذات" },
          ],
        },
      ],
    },
    {
      label: "أعمالنا",
      subNavs: [
        {
          heading: "الخدمات الاستشارية",
          list: [
            { label: "الاستراتيجيات والتحول" },
            { label: "التحول الرقمي" },
            { label: "العمليات والتميز التشغيلي" },
            { label: "التغيير والتطور القيادي" },
            { label: "الابتكار وتجربة العميل" },
          ],
        },
        {
          heading: "SAAS والمنتجات الرقمية",
          list: [
            { label: "المنتجات الامنية" },
            { label: "منتجات النقل" },
            { label: "المنتجات الصحية" },
            { label: "المنتجات الإدارية" },
          ],
        },
        {
          heading: "الحلول",
          list: [
            { label: "الأعمال التقنية المتكاملة" },
            { label: "محركات الإستحقاق" },
          ],
        },
        {
          heading: "إسناد الأعمال",
          list: [
            { label: "الرقابة والتفتيش" },
            { label: "مراكز الأعمال" },
            { label: "إسناد العمليات" },
            { label: "تمكين العمليات" },
          ],
        },
      ],
    },
    {
      label: "الأسواق",
      subNavs: [
        {
          heading: "الأسواق",
          list: [
            { label: "القطاع الحكومي" },
            { label: "الرعاية الصحية" },
            { label: "النقل" },
            { label: "الأمن" },
            { label: "الذكاء الاصطناعي" },
            { label: "التعليم" },
            { label: "الخدمات المالية" },
            { label: "العقارات" },
            { label: "التصنيع" },
            { label: "التجزئة" },
          ],
        },
      ],
    },
    {
      label: "المستثمرون",
      subNavs: [
        {
          heading: "سهم علم",
          list: [
            { label: "نشرة المعلومات" },
            { label: "معلومات السهم" },
            { label: "الأرباح" },
            { label: "إعلانات الشركة" },
          ],
        },
        {
          heading: "المعلومات المالية",
          list: [
            { label: "اللوحة الرئيسية" },
            { label: "التقارير السنوية" },
            { label: "القوائم المالية" },
            { label: "التقارير والعروض التقديمية" },
            { label: "التقويم المالي" },
          ],
        },
        {
          heading: "الحوكمة",
          list: [
            { label: "مجلس الإدارة" },
            { label: "القيادة التنفيذية" },
            { label: "وثائق الحوكمة" },
            { label: "اجتماعات الجمعية العامة" },
          ],
        },
        {
          heading: "مركز مساعدة المستثمر",
          list: [
            { label: "إشعار المستثمر عبر البريد الإلكتروني" },
            { label: "التواصل مع علاقات المستثمرين" },
            { label: "الأسئلة الشائعة" },
          ],
        },
      ],
    },
    {
      label: "الأخبار",
      subNavs: [
        {
          heading: "الأخبار",
          list: [
            { label: "مركز الأخبار" },
            { label: "الفعاليات والندوات الإلكترونية" },
            { label: "القادم في علم" },
            { label: "معرض الصور والفيديو" },
            { label: "ملفات العلامة التجارية" },
          ],
        },
      ],
    },
    {
      label: "التوظيف",
      subNavs: [
        {
          heading: "التقديم",
          list: [
            { label: "المرشحون ذوي الخبرة" },
            { label: "العمل الجزئي" },
            { label: "المرشحون حديثو التخرج" },
            { label: "برامج التدريب التعاوني" },
          ],
        },
        {
          heading: "الحياة في علم",
          list: [
            { label: "من نحن" },
            { label: "ثقافتنا" },
            { label: "بيئة العمل" },
            { label: "المزايا" },
          ],
        },
      ],
    },
  ];

  const navClass =
    activeSection === "home"
      ? classes.nav
      : activeSection === "about"
      ? classes.navBlue
      : activeSection === "services" ||
        activeSection === "effect" ||
        activeSection === "numbers" ||
        activeSection === "news" ||
        activeSection === "creative" ||
        activeSection === "footer"
      ? classes.navWhite
      : classes.navBlue;

  const navLinkClass =
    activeSection === "services" ||
    activeSection === "effect" ||
    activeSection === "numbers" ||
    activeSection === "news" ||
    activeSection === "creative" ||
    activeSection === "footer"
      ? classes.navLinkWhite
      : classes.navLink;

  const logo =
    activeSection === "services" ||
    activeSection === "effect" ||
    activeSection === "numbers" ||
    activeSection === "news" ||
    activeSection === "creative" ||
    activeSection === "footer"
      ? "/images/logo-2.svg"
      : "/images/logo.svg";

  const menuColor =
    activeSection === "services" ||
    activeSection === "effect" ||
    activeSection === "numbers" ||
    activeSection === "news" ||
    activeSection === "creative" ||
    activeSection === "footer"
      ? { color: theme.palette.primary.main }
      : { color: theme.palette.common.white };

  return (
    <Box sx={navClass} bgcolor={"#211259"}>
      <Container maxWidth="xl">
        <Box sx={classes.between} >
          <Box><img src={logo} width="50" height="50" alt="logo" /></Box>
          

          <Hidden lgDown>
            <Box sx={classes.flex}>
              {menuLinks.map((link) => (
                <NavLink link={link} navLinkClass={navLinkClass} />
              ))}
            </Box>
          </Hidden>

          <Hidden lgUp>
            <IconButton
              color="inherit"
              aria-label="open menu"
              onClick={handleMenuToggle}
            >
              <MenuIcon sx={menuColor} />
            </IconButton>
          </Hidden>
        </Box>
      </Container>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={handleMenuClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{...classes.mobileNav, minHeight:"fit-content"}} role="presentation">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            
              py: 2,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <IconButton
                color="inherit"
                aria-label="close menu"
                onClick={handleMenuClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", width: "100%", my: 2, pb: 4 }}>
                <Box sx={{ position: "relative", width: "100%" }}>
                  <Box sx={classes.search} />
                  <InputBase sx={classes.input} />
                </Box>
                <Box sx={classes.iconCont}>
                  <Search />
                </Box>
              </Box>
              {menuLinks.map((link) => (
                <Box>
                <Box
                  onClick={() => {
                    setActiveSubMenu(link.label)
                  }}
                  sx={classes.drawerLink}
                >
                  <PrevIcon2 sx={{ fontSize: "30px" }} />
                  <Typography sx={classes.linkText}>{link.label}</Typography>
                </Box>
                <Box  hidden={activeSubMenu === link.label? false:true} >
                  {link.subNavs.map((subNav)=>(
                    <Box>
                      <Typography sx={{...classes.linkText, fontSize:20 ,textAlign:"right", mr:1}}>{subNav.heading}</Typography>
                      {subNav.list.map((item)=>(
                        <Box display={"flex"} justifyContent={"end"}>
                        <IconButton sx={{display:"flex", justifyContent:"right"}}>
                       <Typography sx={{textAlign:"right", fontSize:18, mr:2, mt:1, mb:1}}>{item.label}</Typography>
                       <RemoveIcon />
                       </IconButton>
                       </Box>
                      ))}
                    </Box>
                  ))}
                  
                </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography sx={classes.linkText}>English</Typography>
            </Box>
          </Container>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Nav;
