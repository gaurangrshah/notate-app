import React from 'react'
import { Box, Text } from 'rebass'
import { Brand } from '../../Brand'

export const FooterMenu = ({ statement, pageList, ...props }) => {
  return (
    <Box display={['block', null, null, 'flex']} bg='lightgray' width='full' p='4' {...props}>
      <Box maxWidth={['full', null, null, '40%']}>
        <Brand brand brandMark />
        <Text fontSize='md' mb='3'>
          {statement}
        </Text>
      </Box>

    </Box>
  )
}
