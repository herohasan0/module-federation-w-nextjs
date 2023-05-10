import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script src="http://localhost:3000/remoteEntry_2.js" />
      {/* <script src="http://localhost:3000/build/remotedemo.js" /> */}
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <script src="http://localhost:3000/remoteEntry.js" /> */}
      </body>
    </Html>
  );
}
