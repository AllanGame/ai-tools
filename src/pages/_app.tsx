import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import Layout from "../components/layout/layout.component";
import '../styles/main.css';

const darkTheme = createTheme({ type: 'dark' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
