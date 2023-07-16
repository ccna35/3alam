import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "../styles/style.css";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ScrollProvider } from "../contexts/ScrollContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Elm</title>
        <meta name="description" content="some description" />
      </Head>
      <ScrollProvider>
        <LanguageProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </LanguageProvider>
      </ScrollProvider>
    </CacheProvider>
  );
}
