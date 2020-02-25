import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'

import { Section, Container } from '../components/Containers'
import { Cards } from './home-cards.js'
import { FullHero } from '../components/Hero/FullHero'
import "../styles/styles.scss"

import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function ({ data, pageContext, ...props }) {

  const { site: { siteMetadata }, homeJson: { hero, main, cards, info } } = data


  return (
    <Layout pageList={pageContext.pageList} {...siteMetadata}>
      <FullHero className='this' bgImg={`url("${hero.image}")`}>
        <Flex mt='5'>
          <Box p='2' color='white'>
            <Heading className='text-shadow'>{hero.heading}</Heading>
            <Text mt='2' className='text-shadow'>{hero.tagline}</Text>
            <Text fontSize='sm' mt='3' mb='-3' className='text-shadow'>{hero.links[0].label}<span><i className="space-left fas fa-arrow-circle-right" /></span></Text>
          </Box>
          <Box />
        </Flex>
      </FullHero>
      <Section bg='base'>
        <Container textAlign='center' px='4' mt='4' maxWidth='3xl' mx='auto'>
          <Heading>{main.heading}</Heading>
          <Text mt='3'>{main.body}</Text>
        </Container>
      </Section>
      <Section bg='base'>
        <Cards cards={cards} />
        <Container px='4' my='4' maxWidth='4xl' mx='auto'>
          <Text>
            {info.body}
          </Text>
          <Text mt='4'>
            {info.body2}
          </Text>
        </Container>
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
    homeJson {
      hero {
        links {
          label
          link
        }
        tagline
        heading
        image
      }
      main {
        body
        heading
      }
      cards {
        body
        heading
        icon
      }
      info {
        body
        body2
      }
    }
  }
`
