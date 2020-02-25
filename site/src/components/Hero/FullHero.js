import React from 'react'
import { Section } from '../Containers/'

const defaultBg = `url("https://source.unsplash.com/random?orientation=landscape")`

export const FullHero = ({ bgImg = defaultBg, children, ...props }) => {
  return (
    <Section
      width={['screenWidth']}
      height='heroHeight'
      outerProps={{
        sx: {
          background: 'linear-gradient(180deg, #606060 0%, rgba(255, 255, 255, 0) 100%)',
          backgroundImage: bgImg,
          backgroundSize: 'cover',
        }
      }}
      {...props}
    >
      {children}
    </Section>
  )
}
