// _document gives us more control over the whole document (app)
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />

        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
