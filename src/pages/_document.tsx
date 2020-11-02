import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" type="image/png" href="data:image/png;base64," />
        </Head>
        <body className="dark-theme">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
