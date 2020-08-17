import Head from 'next/head'
import Header from 'components/header'

const Layout = (props) => (
  <>
    <Head>
      <html lang="ru" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="color-scheme" content="light dark" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="data:image/png;base64," />
    </Head>
    <Header />
    {props.children}
  </>
)

export default Layout
