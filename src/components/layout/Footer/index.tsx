import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import useStyles from "./styles";

import { useInView } from "react-intersection-observer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Svg from "./Svg";
const Footer = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box component="section" id="footer" sx={classes.flex}>
      <Box />
      <Box sx={{ position: "absolute", right: 0, top: 0, zIndex: -1 }}>
        <Svg inView={inView} />
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={2}>
            <Typography sx={classes.title}>علم عن قرب</Typography>
            <Typography sx={classes.footerLink}>من نحن</Typography>
            <Typography sx={classes.footerLink}>مبادئ القيادة</Typography>
            <Typography sx={classes.footerLink}>قيمنا</Typography>
            <Typography sx={classes.footerLink}>لماذا علم؟</Typography>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Typography sx={classes.title}>أعمالنا</Typography>
            <Typography sx={classes.footerLink}>الخدمات الاستشارية</Typography>
            <Typography sx={classes.footerLink}>المنتجات الرقمية</Typography>
            <Typography sx={classes.footerLink}>الحلول</Typography>
            <Typography sx={classes.footerLink}>اسناد الأعمال</Typography>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Typography sx={classes.title}>المستثمرون</Typography>
            <Typography sx={classes.footerLink}>سهم علم</Typography>
            <Typography sx={classes.footerLink}>المعلومات المالية</Typography>
            <Typography sx={classes.footerLink}>الحوكمة</Typography>
            <Typography sx={classes.footerLink}>
              مركز مساعدة المستثمر
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", lg: "flex-end" },
              width: "100%",
            }}
          >
            <Box sx={{ position: "relative", mb: 4 }}>
              <Box sx={{ ...classes.search, width: 248 }} />
              <Typography sx={{ ...classes.input, width: 248, fontSize: 22 }}>
                اتصل بنا على <span dir="ltr">۹۲۰۰ ۲۹ ۲۰۰</span>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={3} sx={{ mt: { xs: 1, lg: 3 } }} ref={ref}>
            <img src="/images/call.svg" width="40" height="40" />
            <Typography sx={classes.title}>الرقم الموحد</Typography>
            <Typography sx={{ fontSize: 20, mt: { xs: 1, lg: 3 } }}>
              <span dir="ltr"> ۹۲۰۰ ۲۹ ۲۰۰</span>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: { xs: 1, lg: 3 } }}>
            <img src="/images/msg.svg" width="40" height="40" />
            <Typography sx={classes.title}>للاستفسارات</Typography>
            <Typography sx={{ fontSize: 14, mt: { xs: 1, lg: 3 } }}>
              info@elm.sa
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: { xs: 1, lg: 3 } }}>
            <img src="/images/loc.svg" width="40" height="40" />
            <Typography sx={classes.title}>الموقع على الخريطة</Typography>
            <Typography sx={{ fontSize: 14, mt: { xs: 1, lg: 3 } }}>
              6614 الثغر - حي النخيل وحده رقم 2
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ mt: { xs: 1, lg: 3 } }}>
            <img src="/images/inbox.svg" width="40" height="40" />
            <Typography sx={classes.title}>
              اشترك في نشرتنا الاخبارية
            </Typography>

            <Box
              sx={{ position: "relative", width: "100%", mt: { xs: 1, lg: 3 } }}
            >
              <Box sx={{ ...classes.search, height: 25 }} />
              <InputBase
                sx={{ ...classes.input, height: 30, mb: { xs: 3, lg: 0 } }}
                placeholder="البريد الالكتروني"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={classes.white}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              xs={12}
              lg={4}
              sx={{ py: 2, display: "flex", alignItems: "center" }}
            >
              <img
                src="/images/logo-2.svg"
                width="100"
                height="100"
                alt="logo"
              />
            </Grid>
            <Grid xs={12} lg={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-end" },
                  alignItems: "center",
                  width: "100%",
                  py: 2,
                }}
              >
                <IconButton sx={classes.btn}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={classes.btn}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={classes.btn}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={classes.btn}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={classes.btn}>
                  <YouTubeIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-end" },
                  alignItems: "center",
                  width: "100%",
                  flexWrap: "wrap",
                  pb: 1,
                  py: 1,
                }}
              >
                <Typography sx={classes.footerLinkWhite}>
                  شركه علم 2023
                </Typography>
                <Typography sx={classes.footerLinkWhite}>
                  حقوق الملكية الفكرية
                </Typography>
                <Typography sx={classes.footerLinkWhite}>
                  سياسة الخصوصية
                </Typography>
                <Typography sx={classes.footerLinkWhite}>
                  خريطة الموقع
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
