import React from 'react'
import { Box, Flex } from 'rebass'
import { Section, Card as DefCard } from '../components/Containers'

export const Card = ({ card, ...props }) => {
  return (
    <Section sx={{ position: 'absolute', top: '5%', right: '10%' }}>
      <DefCard
        minWidth='sm'
        innerProps={{
          sx: {
            border: 'none',
            boxShadow: 'xl'
          }
        }}
      >
        <Box px='4' py='2' bg='blue.4' color='white' fontWeight='600' sx={{
          border: 'none',
          borderTopLeftRadius: 'lg',
          borderTopRightRadius: 'lg'
        }}>
          {card.heading}
        </Box>
        <Flex py='2' bg='white' sx={{
          border: 'none',
          borderBottomLeftRadius: 'lg',
          borderBottomRightRadius: 'lg'
        }}>
          <Flex p='2' fontSize='sm' sx={{
            borderRightStyle: 'solid',
            borderRightWidth: 'px',
            borderRightColor: 'gray.3',
          }}>
            <Box as='span' className="fa-stack" style={{ verticalAlign: 'top' }} color='blue.4'>
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-map-marker-alt fa-stack-1x fa-inverse"></i>
            </Box>
            <Box textAlign='left'>
              {card.streetAddress}<br />
              {card.aptSuite} <br />
              {card.cityStateZip}
            </Box>
          </Flex>
          <Flex p='2' flexDirection='column' fontSize='sm' textAlign='left'>
            <Box>
              <Box as='span' className="fa-stack" style={{ verticalAlign: 'top' }} color='blue.4'>
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-phone-alt fa-stack-1x fa-inverse"></i>
              </Box>
              {card.phone}
            </Box>
            <Box mt='3'>
              <Box as='span' className="fa-stack" style={{ verticalAlign: 'top' }} color='blue.4'>
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="far fa-envelope fa-stack-1x fa-inverse"></i>
              </Box>
              {card.email}
            </Box>
          </Flex>
        </Flex>
      </DefCard>
    </Section>
  )
}
