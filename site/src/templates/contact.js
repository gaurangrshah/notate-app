import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Text, Heading } from 'rebass'

import { Section } from '../components/Containers'
import { Card } from './contact-card'
import { ContactForm } from './contact-form'
import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function ({ data, pageContext, ...props }) {

  const { site: { siteMetadata }, contactJson: { hero: { map, card }, form } } = data


  return (
    <Layout pageList={pageContext.pageList} {...siteMetadata}>
      <Card card={card} />
      <Section width='100vw' height='45vh' bg='gray.2' sx={{ margin: 0, padding: 0 }}>
        <Box width='100vw' ml={-5} >
          <iframe title='default-map' src={map} frameBorder="0" style={{ border: 'none', width: '100%', height: '40vh' }} allowFullScreen={false} />
        </Box>
      </Section>
      <Section bg='base' width='full'>
        <Flex mt='4' bg='gray.2' width='3xl' mx='auto' sx={{ borderRadius: 'default' }}>
          <Box width='50%' my='4' p='4' color='gray.6' sx={{
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
            borderRightColor: 'gray.3'
          }}>
            <Heading fontSize='5' mb='3'>{form.heading}</Heading>
            <Text>{form.tagline}</Text>
          </Box>
          <ContactForm form={form} />
        </Flex>
      </Section>

    </Layout>
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
    contactJson {
      hero {
        map
        card {
          aptSuite
          cityStateZip
          email
          heading
          phone
          streetAddress
        }
      }
      form {
        fields
        heading
        tagline
      }
    }
  }
`
