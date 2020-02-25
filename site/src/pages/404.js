import React from "react"
import { graphql } from 'gatsby'
import { Section, Container } from '../components/Containers'
import Layout from "../gatsby-theme-styleguide/components/Layout"

export default ({ data, ...props }) => {
  const { site: { siteMetadata }, contentJson } = data
  const { pages } = contentJson
  return (
    <Layout pageList={pages} {...siteMetadata}>
      <Section bg='base'>
        <Container mt={'4em'}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Section>
    </Layout >
  )
}

export const qeury = graphql`
  query{
    site {
      siteMetadata {
      title
      logo
    }
  }
  contentJson {
    pages {
      page
      path
    }
  }
}
`
