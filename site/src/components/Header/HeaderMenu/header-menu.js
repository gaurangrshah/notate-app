import React from 'react'
import { FlexWrap } from '../../Containers'
import { Nav } from '../Nav'

export function HeaderMenu({ pageList = [], ...props }) {
  return (
    <FlexWrap
      className='navbar'
      {...props}
    >
      <Nav
        fontSize={[0, 1]}
        display={['none', 'none', 'flex']}
        justifyContent='flex-end'
        pageList={pageList}
        ml='auto'
      />
    </FlexWrap>
  )
}


