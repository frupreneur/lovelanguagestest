import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        {/* <Script
          id="googleAdSenseScript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106258986656665"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          // data-client="ca-pub-4106258986656665"
        /> */}

        <Script
          id="googleAdSenseScript"
          async
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
