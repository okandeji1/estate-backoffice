/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="/css/style1.bundle.css"
            type="text/css"
            rel="stylesheet"
          />
          <link
            href="/css/style2.bundle.css"
            type="text/css"
            rel="stylesheet"
          />
          {/* <link
            href="/css/style3.bundle.css"
            type="text/css"
            rel="stylesheet"
          /> */}
          <link
            href="/css/style4.bundle.css"
            type="text/css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
