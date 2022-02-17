import { AppProps } from "next/app";
import GlobalStytle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStytle />
    </ThemeProvider>
  );
};

export default MyApp;
