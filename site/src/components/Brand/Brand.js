import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Image, Heading } from 'rebass'


export function Brand({ brand = false, brandMark = false, children, ...props }) {

  const { site: { siteMetadata: { title, logo } }, file: { publicURL } } = useStaticQuery(graphql`
    query BrandQuery {
      site {
      siteMetadata {
        title
        logo
        }
      }
      file(relativePath: {eq: "logo.svg"}) {
        publicURL
      }
    }
  `)


  return (
    <Flex alignItems='center' fontFamily='brand' {...props}>
      {brandMark && <Image src={logo || publicURL} sx={{ width: '48px', marginRight: '0.5em' }} />}
      {brand && <Heading as='h1' fontSize='inherit' color='primary' sx={{ whiteSpace: 'nowrap', textShadow: 'default' }}>
        {title}
      </Heading>}
    </Flex>
  )
}
