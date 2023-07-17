import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const firstSlide = {
  heading: "المنتجات الأمنية",
  image: "/images/products4-icon.svg",
  bgcolor: "#7d24ab",
  menuItems: [
    {
      id: 1,
      text: "يقين",
      href: "#",
    },
    {
      id: 2,
      text: "مقيم",
      href: "#",
    },
    {
      id: 3,
      text: "نذير",
      href: "#",
    },
    {
      id: 4,
      text: "التصاريح الأمنية",
      href: "#",
    },
    {
      id: 5,
      text: "أمن",
      href: "https://amn.net.sa/",
    },
    {
      id: 6,
      text: "سلامة",
      href: "https://salamah.998.gov.sa/#/landing",
    },
    {
      id: 7,
      text: "زاول",
      href: "https://www.zawil.com.sa/landing/#/",
    },
    {
      id: 8,
      text: "باقة رواد",
      href: "#",
    },
    {
      id: 9,
      text: "الباقة الذكية",
      href: "https://smartgate.com.sa/",
    },
    {
      id: 10,
      text: "الموثق الالكترونية",
      href: "#",
    },
  ],
};
const secondSlide = {
  heading: "منتجات النقل",
  image: "/images/products3-icon.svg",
  bgcolor: "#a31c9e",
  menuItems: [
    {
      id: 1,
      text: "تم",
      href: "https://www1.tamm.net.sa/CarPortalWeb/index.jsp",
    },
    {
      id: 2,
      text: "موجز",
      href: "https://mojaz.com.sa/",
    },
    {
      id: 3,
      text: "نقل",
      href: "https://naql.sa/main/",
    },
    {
      id: 4,
      text: "مسارات",
      href: "https://masaratrental.elm.sa/WebPages/Registration.aspx",
    },
    {
      id: 5,
      text: "وصل",
      href: "#",
    },
    {
      id: 6,
      text: "بيان",
      href: "#",
    },
    {
      id: 7,
      text: "توصيل",
      href: "#",
    },
    {
      id: 8,
      text: "تأجير",
      href: "https://tajeer.tga.gov.sa/",
    },
    {
      id: 9,
      text: "حافلات",
      href: "#",
    },
    {
      id: 10,
      text: "ارتح",
      href: "#",
    },
    {
      id: 10,
      text: "وشج",
      href: "https://washaj.sa/",
    },
  ],
};
const thirdSlide = {
  heading: "المنتجات الصحية",
  image: "/images/products2-icon.svg",
  bgcolor: "#00ccfa",
  menuItems: [
    {
      id: 1,
      text: "إفادة",
      href: "https://www.efada.com.sa/EMC.UI/login.aspx",
    },
    {
      id: 2,
      text: "واحد",
      href: "#",
    },
    {
      id: 3,
      text: "Saudi Bio Bubble",
      href: "#",
    },
    {
      id: 4,
      text: "مركز التحكم بالموارد",
      href: "#",
    },
  ],
};
const fourthSlide = {
  heading: "المنتجات الإدارية",
  image: "/images/products1-icon.svg",
  bgcolor: "#006ec2",
  menuItems: [
    {
      id: 1,
      text: "إدارة بيانات",
      href: "#",
    },
    {
      id: 2,
      text: "ضامن",
      href: "#",
    },
    {
      id: 3,
      text: "رابط",
      href: "https://www.rabet.sa/",
    },
    {
      id: 4,
      text: "أساس",
      href: "#",
    },
    {
      id: 5,
      text: "تفتيش",
      href: "#",
    },
    {
      id: 6,
      text: "مستمر",
      href: "#",
    },
    {
      id: 7,
      text: "كشف",
      href: "#",
    },
    {
      id: 8,
      text: "مزادات",
      href: "#",
    },
    {
      id: 9,
      text: "دخلى",
      href: "#",
    },
    {
      id: 10,
      text: "شيبر",
      href: "https://shypr.ecloud.sa/",
    },
    {
      id: 10,
      text: "خبرة",
      href: "https://khibrah.sa/#/index",
    },
    {
      id: 10,
      text: "نبأ",
      href: "#",
    },
  ],
};

export default function FullScreenDialog(props: any) {
  const { onClose, open, selectedValue, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const currentSlide =
    selectedValue === "/images/new-product-slides-images/security.svg"
      ? firstSlide
      : selectedValue === "/images/new-product-slides-images/transport.svg"
      ? secondSlide
      : selectedValue === "/images/new-product-slides-images/health.svg"
      ? thirdSlide
      : fourthSlide;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: currentSlide.bgcolor,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Container>
      </Box>
      <Box
        component="div"
        sx={{
          p: 2,
          bgcolor: currentSlide.bgcolor,
          height: {
            xs: `${currentSlide === thirdSlide && "100%"}`,
            sm: "100%",
          },
          textAlign: "center",
          overflow: { sm: "hidden" },
          position: "relative",
        }}
      >
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row-reverse" }}
          alignItems="center"
        >
          <img src={currentSlide.image} alt="" style={{ maxWidth: "3rem" }} />
          <Typography variant="h3">{currentSlide.heading}</Typography>
        </Stack>
        <Stack
          //   spacing={{ xs: 0, md: 12 }}
          alignItems={{ xs: "center", md: "flex-start" }}
          direction={{ xs: "column", md: "row-reverse" }}
          sx={{ gap: { xs: 0, md: "10rem", lg: "15rem" }, mt: 4 }}
        >
          <Stack alignItems={{ xs: "center", md: "flex-end" }}>
            {currentSlide.menuItems.slice(0, 5).map((item) => {
              return (
                <Link
                  href={item.href}
                  sx={{
                    p: 2,
                    borderBottom: "1px solid #27135f",
                    width: "fit-content",
                    color: "white",
                    fontSize: "2rem",
                  }}
                  underline="none"
                  key={item.id}
                >
                  {item.text}
                </Link>
              );
            })}
          </Stack>
          <Stack alignItems={{ xs: "center", md: "flex-end" }}>
            {currentSlide.menuItems.slice(5, 10).map((item) => {
              return (
                <Link
                  href={item.href}
                  sx={{
                    p: 2,
                    borderBottom: "1px solid #27135f",
                    width: "fit-content",
                    color: "white",
                    fontSize: "2rem",
                  }}
                  underline="none"
                  key={item.id}
                >
                  {item.text}
                </Link>
              );
            })}
          </Stack>
          <Stack alignItems={{ xs: "center", md: "flex-end" }}>
            {currentSlide.menuItems.slice(10).map((item) => {
              return (
                <Link
                  href={item.href}
                  sx={{
                    p: 2,
                    borderBottom: "1px solid #27135f",
                    width: "fit-content",
                    color: "white",
                    fontSize: "2rem",
                  }}
                  underline="none"
                  key={item.id}
                >
                  {item.text}
                </Link>
              );
            })}
          </Stack>
        </Stack>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
          </Grid>
          <Grid item xs={6}>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
            <div>Hello There</div>
          </Grid>
        </Grid> */}
        <Box
          component="div"
          sx={{
            width: "25rem",
            height: "25rem",
            position: "absolute",
            bottom: "-20%",
            left: "-5%",
            overflow: "hidden",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={currentSlide.image}
            alt=""
            style={{
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
    </Dialog>
  );
}
