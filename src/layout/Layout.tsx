import Head from 'next/head'
import Router from 'next/router'
import Header from 'components/Header'
import FlexContainer from 'layout/FlexContainer'
import ContentContainer from 'layout/ContentContainer'
import { useEffect, useState } from 'react'

const Layout = ({ title, description, children }) => {
  const [prevPos, setPrevPos] = useState(Number)
  const handleScroll = () => {
    const currentPos = window.pageYOffset

    document
      .querySelectorAll('.navbar')
      .forEach(e =>
        e.setAttribute(
          'style',
          prevPos >= currentPos
            ? 'bottom: 0; transition: bottom 0.3s ease-out'
            : 'bottom: -4rem; transition: bottom 0.3s ease-in'
        )
      )
    setPrevPos(currentPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  Router.events.on('routeChangeComplete', () => handleScroll())

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FlexContainer>
        <ContentContainer className="hidden text-gray-900 navbar bg-gray-50 sm:block">
          <Header />
        </ContentContainer>
        <ContentContainer className="pb-4 text-gray-900 bg-white">
          {children}
        </ContentContainer>
        <ContentContainer className="fixed bottom-0 w-full text-gray-900 navbar sm:hidden bg-gray-50">
          <Header />
        </ContentContainer>
      </FlexContainer>
    </>
  )
}

export default Layout
