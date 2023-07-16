import { colors } from "../styles/colors";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { Theme, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { useRTL } from "../hooks/useRTL";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
  },
});

export class BreakPoints {
  static sm = 576;

  static md = 768;
  static lg = 992;

  static xl = 1200;
  static xxl = 1400;
}

type IProps = {
  children: React.ReactElement<any, any> & React.ReactNode;
};

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const { isRTL } = useRTL();

  interface IProp {
    isRTL?: boolean;
  }

  const cacheLTR = createCache({
    key: "rtl",
    prepend: true,
  });

  // Create rtl cache
  const cacheRTL = createCache({
    key: "ltr",
    stylisPlugins: [prefixer, rtlPlugin],
    prepend: true,
  });

  if (!isRTL)
    return (
      <MUIThemeProvider theme={{ ...theme, direction: "ltr" }}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    );

  return (
    <MUIThemeProvider theme={{ ...theme, direction: "rtl" }}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
