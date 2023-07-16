import { Box } from "@mui/material";
import Nav from "./Nav";
import { useRTL } from "../../hooks/useRTL";
import Footer from "./Footer";
import { motion } from "framer-motion";

type IProps = {
  children: any;
};

const Layout: React.FC<IProps> = ({ children }) => {
  const { isRTL } = useRTL();
  const dir = isRTL ? "rtl" : "ltr";
  return (
    <Box
      dir={dir}
      component={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ ease: "linear", duration: 0.25 }}
    >
      <Nav />
      <Box
        className="snap"
        sx={{
          scrollSnapType: "y mandatory",
          height: "100dvh",
          overflow: "auto",
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
