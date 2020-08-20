import Head from 'next/head'
import Header from 'components/Header'

const Layout = ({ title, description, children }) => (
  <>
    <Head>
      <html lang="ru" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="color-scheme" content="light dark" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="data:image/png;base64," />
    </Head>
    <Header />
    {children}
  </>
)

export default Layout
