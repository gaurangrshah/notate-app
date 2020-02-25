import React from 'react'
import { Header, Main, Container, Footer } from "theme-ui"
function FullLayout({ title, children }) {
  return (
    <>
      <Header>{title || `StyleGuide Defaults`}</Header>
      <Main>
        <Container>{children || `content-coming-soon`}</Container>
      </Main>
      <Footer>
        © {new Date().getFullYear()} {title}
      </Footer>
    </>
  )
}

export default FullLayout
