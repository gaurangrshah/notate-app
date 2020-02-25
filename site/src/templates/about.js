import React from 'react'
import { graphql } from 'gatsby'

import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Section, Container, ShapedCard } from '../components/Containers'
import { FullHero } from '../components/Hero/FullHero'
import { Cards } from './about-cards'

import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function ({ data, pageContext, ...props }) {

  const { site: { siteMetadata }, aboutJson: { hero, cards, main, team } } = data

  const [card1, ...restCards] = cards

  return (
    <Layout pageList={pageContext.pageList} {...siteMetadata}>
      <FullHero bgImg={`url("${hero.image}")`}>
        <Flex mt='5' justifyContent='flex-end'>
          <Box p='2' color='white' textAlign='right' color='secondary'>
            <Heading color='primary'>{hero.heading}</Heading>
            <Text mt='2'>{hero.tagline}</Text>
            <Text fontSize='sm' mt='3' mb='-3'><i className=" fas fa-arrow-circle-right" /><span className='space-left'>{hero.links[0].label}</span></Text>
          </Box>
          <Box />
        </Flex>
      </FullHero>
      <Section bg='base' textAlign='center'>
        <Container px='4' mt='4' maxWidth='5xl' mx='auto' >
          <Text as='small' fontWeight='600' color='textMuted'>{main.sectionTitle}</Text>
          <Heading maxWidth='3xl' mx='auto' my='3' color='primary'>{main.heading}</Heading>
          <Text my='5' color='text'>{main.body}</Text>
        </Container>
        <Text as='small' fontWeight='600' color='textMuted' textAlign='center'>{team.sectionTitle}</Text>
        <Flex textAlign='center' my='5'>
          <ShapedCard mx='auto' innerProps={{
            display: 'flex',
            maxWidth: 'sm',
            mx: 'auto'
          }}>
            <Box>
              <Image src={card1.image} sx={{
                borderRadius: 'full'
              }} />
            </Box>
            <Box ml='2em' my='auto' textAlign='left'>
              <Heading>
                {card1.heading}
              </Heading>
              <Text>
                {card1.details}
              </Text>
            </Box>
          </ShapedCard>
        </Flex>
        <Text maxWidth='3xl' textAlign='left' mx='auto'>
          {team.body}
        </Text>

        <Text mt='4' maxWidth='3xl' textAlign='left' mx='auto'>
          {team.body2}
        </Text>
        <Cards cards={restCards} />
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
    aboutJson {
        hero {
        heading
        tagline
        image
        links {
        label
          link
      }
    }
    cards {
      details
      heading
      image
    }
    main {
      body
      heading
      sectionTitle
    }
    team {
      body
      body2
      sectionTitle
    }
  }
}
`
