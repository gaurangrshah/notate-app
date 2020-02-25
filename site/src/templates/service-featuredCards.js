import React from 'react'
import { Box, Text, Heading } from 'rebass'
import { Card } from '../components/Containers'
import { shortid } from '../utils'


export const Cards = ({ cards, ...props }) => {
  return (
    <Box display={['block', 'block', 'block', 'flex']} flexWrap='wrap' mx='auto' maxWidth='80%'>
      {cards.map(card => (
        <Card
          key={shortid()}
          width={['full', null, null, 1 / 3]}
        >
          <Box
            bg='gray.1'
            fontSize='64px'
            textAlign='left'
            pl='2'
            sx={{
              borderTopLeftRadius: 'lg',
              borderTopRightRadius: 'lg'
            }}
          >
            <i className={card.icon} /><br />
            <Heading fontSize='3'>{card.heading}</Heading>
          </Box>
          <Box p='2'
            fontSize='0.55em'
            textAlign='left'
            pt='3'
            bg='gray.1'

            sx={{
              borderBottomLeftRadius: 'lg',
              borderBottomRightRadius: 'lg'
            }}>
            <Text>
              {card.details}
            </Text>
            <Text fontSize='md' mt='3' mb='-3'><i className={card.linkIcon} /><span className='space-left '>{card.linkLabel}</span></Text>
          </Box>
        </Card>
      ))}
    </Box>
  )
}
