import Head from 'next/head'
import Header from 'components/Header'
import FlexContainer from 'layout/FlexContainer'
import ContentContainer from 'layout/ContentContainer'

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
    <FlexContainer>
      <ContentContainer className="text-gray-900 bg-gray-50">
        <Header />
      </ContentContainer>
      <ContentContainer className="pb-4 text-gray-900 bg-white">
        {children}
      </ContentContainer>
    </FlexContainer>
  </>
)

export default Layout
