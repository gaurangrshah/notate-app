import React from 'react'
import { Box, Text, Heading, Image } from 'rebass'
import { ShapedCard } from '../components/Containers'
import { shortid } from '../utils'


export const Cards = ({ cards, ...props }) => {
  return (
    <Box display={['block', 'block', 'block', 'flex']} textAlign='center' my='5'>
      {cards.map(card => (
        <ShapedCard key={shortid()} mx='auto' innerProps={{
          display: 'flex',
          maxWidth: ['sm'],
          mx: 'auto'
        }}>
          <Box>
            <Image src={card.image} sx={{
              borderRadius: 'full'
            }} />
          </Box>
          <Box ml='2em' my='auto' textAlign='left'>
            <Heading>
              {card.heading}
            </Heading>
            <Text>
              {card.details}
            </Text>
          </Box>
        </ShapedCard>
      ))}
    </Box>
  )
}
