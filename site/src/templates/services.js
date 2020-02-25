import React from 'react'
import { graphql } from 'gatsby'

import { Flex, Box, Text, Heading } from 'rebass'
import { Cards } from './service-featuredCards'
import { ServiceCards } from './service-cards'

import { Section, Container } from '../components/Containers'

import Layout from "../gatsby-theme-styleguide/components/Layout"


export default function ({ data, pageContext, ...props }) {

  const { site: { siteMetadata }, servicesJson: { hero, main, cards }
  } = data


  return (
    <Layout pageList={pageContext.pageList} {...siteMetadata}>
      <Container bg='gray.2'>
        <Flex justifyContent='flex-end' position='relative'>
          {/* <Image display={['none', null, null, 'block']} src={hero.image} width='40%' mt='200px' sx={{ borderRadius: 'lg' }} /> */}
          <Box mt='6' color='white' color='secondary' textAlign={['center', null, null, 'right']} position='relative' width='100%'>
            <Heading fontSize='6' color='primary' mr='6'>{hero.heading}</Heading>
            <Text mt='2' display='inline'>{hero.taglineA}&nbsp;</Text><Text color='highlight' display='inline' mr='6'>{hero.taglineB}</Text>
            <Cards cards={hero.featuredCards} />
          </Box>
        </Flex>
      </Container>
      <Section textAlign='center' mx='auto'>
        <Heading>{main.heading}</Heading>
        <Text my='4'>{main.outro}</Text>
        <ServiceCards cards={cards} />
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
    servicesJson {
        main {
        outro
        heading
      }
      cards {
        icon
        heading
        details
      }
      hero {
        featuredCards {
          linkLabel
          linkIcon
          link
          heading
          details
          icon
        }
        taglineA
        taglineB
        image
        heading
      }
    }
  }
`
