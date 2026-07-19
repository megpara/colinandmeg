import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import localFont from '@next/font/local';

const optimanova = localFont({
  src: [
    { path: "../public/fonts/OptimaNovaLTProLight.otf", weight: "100" },
    { path: "../public/fonts/OptimaNovaLTProRegular.otf", weight: "400" }
  ],
  variable: '--font-optima-nova'
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Colin & Meg | A director duo based in Los Angeles</title>
        <meta
          name="description"
          content="Together, Colin & Meg direct, DP, edit, and choreograph."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="stylesheet" href="https://use.typekit.net/oev0dtt.css" />
        <link rel="stylesheet" href="https://use.typekit.net/uao4cwk.css" />
        <link rel="stylesheet" href="https://use.typekit.net/znb2ste.css" />
        <meta property="og:title" content="Colin & Meg" key="ogtitle" />
        <meta property="og:description" content="A director duo based in Los Angeles" key="ogdesc" />
        <meta property="og:image" content="/biopic.JPG" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      </Head>
      <div className={`${optimanova.variable} font-paragraph h-full`}>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
