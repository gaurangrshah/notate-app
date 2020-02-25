import React, { useState } from 'react'
import { Main } from 'theme-ui'
import { Layout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'
import Meta from '../../components/Meta'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export default function Layout({ logo = '', title = '', pageList = [], currentPath = '', children, ...props }) {
  const [themed] = useState({
    default: {
      bg: 'bg',
      text: 'text'
    },
    dark: {
      bg: 'grayDark',
      text: 'gray.6'
    }
  })

  return (
    <ThemedLayout {...themed.default} {...props}>
      <Meta />
      <Header logo={logo || ""} pageList={pageList} />
      <Main as='article' textAlign='center' className='layout'>
        {children}
      </Main>
      <Footer />
    </ThemedLayout>
  )
}
