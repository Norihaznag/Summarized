import Head from "next/head";
import React from "react";

interface PagesComponents{
    Component : any,
    pageProps : any

}
function MyApp({ Component, pageProps }:PagesComponents) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;