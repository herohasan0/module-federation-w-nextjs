import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      {/* <script src="http://localhost:3000/build/remoteEntry.js" /> */}
      <Script src="http://localhost:3000/build/remoteEntry.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
