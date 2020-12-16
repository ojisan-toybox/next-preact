import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* TODO: _app.js はクライアントで必ず読まれるJS, なのでここにreset.cssを書く */}
    </Head>
    aaaa
    <Component {...pageProps} />
  </>
);

export default App;
