import 'styles/global.css'
import type { AppProps } from 'next/app'
import Layout from 'layout/Layout'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://pvinis.github.io/iosevka-webfont/7.0.2/iosevka.css"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default App
