import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../styles/theme.config';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
