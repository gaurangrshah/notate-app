
import React from 'react'
import { Box as Boxbass } from 'rebass'

export function Card({ innerProps, children, ...props }) {
  return (
    <Boxbass
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      alignItems='stretch'
      my={[0]}
      p={[1, 3]}
      {...props}
    >
      <Boxbass sx={{
        boxShadow: `default`,
        borderRadius: `lg`,
        border: `default`,
      }}
        {...innerProps}
      >
        {children}
      </Boxbass>
    </Boxbass>
  )
}
export function ShapedCard({ innerProps, children, ...props }) {
  return (
    <Boxbass
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      alignItems='stretch'
      my={[0]}

      p={[1, 3]}
      {...props}
    >
      <Boxbass sx={{
        boxShadow: `default`,
        borderTopLeftRadius: `full`,
        borderBottomLeftRadius: `full`,
        borderBottomRightRadius: `full`,
      }}
        {...innerProps}
      >
        {children}
      </Boxbass>
    </Boxbass>
  )
}
export const Cards = {
  Card,
  ShapedCard
}

export default Cards
