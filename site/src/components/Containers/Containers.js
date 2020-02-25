import React from 'react'
import { Box as Boxbass } from 'rebass'
import { containerStyles } from './containerStyles'


export function Container({ innerProps = {}, children, ...props }) {
  return (
    <Boxbass
      sx={{ ...containerStyles }}
      {...props}
    >
      <Boxbass {...innerProps}>
        {children}
      </Boxbass>
    </Boxbass>
  )
}

export function Section({ outerProps = {}, ...props }) {
  return (
    <Boxbass as='section'  {...outerProps}>
      <Boxbass p={[4, 5]} sx={{ position: `relative` }}{...props} />
    </Boxbass>
  );
};

export function FlexWrap({ responsive = true, ...props }) {
  return (
    <Boxbass
      display='flex'
      flexWrap='wrap'
      mx={-2}
      width='full'
      variant={responsive && 'boxes.responsiveFlex'}
      position='relative' {...props} />
  )
}

export const Containers = {
  Container,
  FlexWrap,
  Section,
}

export default Containers
