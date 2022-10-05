import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import '../styles/globals.css';
import { UIProvider } from '../context/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <UIProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </UIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
