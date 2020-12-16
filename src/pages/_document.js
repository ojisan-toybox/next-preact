import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* TODO: _document.js はSSR時の共通template, ここには各ページ共通のメタタグなどを書ける。 */}
        </Head>
        <body>
          bbb
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
