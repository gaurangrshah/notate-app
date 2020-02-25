import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, Text, Flex, Button, Link as ReLink } from 'rebass'
import { HeaderMenu } from './HeaderMenu'
import { Brand } from '../Brand'
import { MenuIcon } from './SideBar'

import { useScrollMenu } from '../../hooks/useScrollMenu'
import { INDEX_ROUTE } from '../../routes'
import { START_ROUTE } from '../../routes'

import { headerStyles } from './header-styles'

const propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  pageList: PropTypes.array.isRequired,
};



export function Header({ logo, title = '', pageList = [], active, ...props }) {

  const { passedScrollThreshold } = useScrollMenu(50)

  return (
    <>
      <Box as='section' sx={{ ...headerStyles }}>
        <Flex
          width='100%'
          alignItems='center'
          justifyContent={['space-evenly']}
          px={[4, null, 6]}
          sx={{
            pr: 4,
            boxShadow: 'boxShadow',
            backgroundColor: passedScrollThreshold ? 'white' : 'transparent',
          }}
        >
          <ReLink
            as={Link}
            to={INDEX_ROUTE}
            mr='auto'
            fontSize={[2, null, 3, 4]}
            fontFamily={'brand'}
            fontWeight={'bold'}
          >
            {<Brand brand brandMark /> || title}
          </ReLink>
          <HeaderMenu
            mx='auto'
            pageList={pageList}
            active={active}
            display={['none', 'none', 'none', 'flex']}
          />
          <Button
            as={Link}
            to={START_ROUTE}
            minWidth='150px'
            fontSize={['0.75em']}
            display={['none', 'inline']}
            justifySelf='flex-start'
            variant='simple'
            color='white'
            className='no-text-wrap'
            mr='1'
            sx={{
              color: 'white',
              borderRadius: 'full',
              whiteSpace: 'nowrap'
            }}
          >
            <Text color='white'>Get Started Today!</Text>
          </Button>
          <MenuIcon pageList={pageList} />
        </Flex>
      </Box>
    </>
  );
};

Header.propTypes = propTypes

export default Header
