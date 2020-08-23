import Head from 'next/head'
import Header from 'components/Header'
import TopLine from 'components/TopLine'
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
    <TopLine />
    <FlexContainer>
      <ContentContainer className="text-gray-900 bg-gray-50 pb-2">
        <Header />
      </ContentContainer>
      <ContentContainer className="text-gray-900 bg-gray-100 shadow pb-4">
        {children}
      </ContentContainer>
    </FlexContainer>
  </>
)

export default Layout
