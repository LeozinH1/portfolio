import { AppProps } from "next/app";
import GlobalStytle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ToastContainer } from "react-toastify";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStytle />
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
};

export default MyApp;
