import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Link as ReLink } from 'rebass'
import { Brand } from '../Brand'
import { FooterMenu } from './FooterMenu'
import { Social } from '../Social'
import { footerStyles } from './footerStyles'
import { INDEX_ROUTE } from '../../routes'

export function Footer(props) {
  const data = useStaticQuery(graphql`
    query  {
      sectionsJson {
        footerStatement
        footerLinks{
          id
          link
          title
        }
      }
    }
  `)
  const { sectionsJson: { footerStatement, footerLinks } } = data

  return (
    <>
      <FooterMenu statement={footerStatement} />
      <Flex
        px='4'
        width='full'
        color='white'
        alignItems='center'
        fontSize='1'
        height='headerHeight'
        flexDirection={['column', 'row']}
        justifyContent={['flex-start']}
        sx={{ ...footerStyles }}
        {...props}
      >
        <Flex fontSize='sm'>
          <Link to={INDEX_ROUTE}>
            <Brand
              fontSize='1'
              color='white'
              // display='inline'
              fontFamily={'sans'}
              brand
            />
          </Link>
          <span className='space-top'>&nbsp;&nbsp;&nbsp;&copy;&nbsp;{new Date().getFullYear()}&nbsp;All&nbsp;rights&nbsp;reserved.</span>
        </Flex>
        <Box fontSize='sm' ml='auto'>
          {footerLinks.map(link => (
            <ReLink key={link.id} href={link.link} mr='2'>{link.title}</ReLink>
          ))}
        </Box>
        <Box className='space-left' >
          <Social />
        </Box>
      </Flex>
    </>
  )
}

