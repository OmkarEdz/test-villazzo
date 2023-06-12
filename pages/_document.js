import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>          
          {/* eslint-disable-next-line */}
          <title>Miami Luxury Real Estate | Villazzo Realty</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument