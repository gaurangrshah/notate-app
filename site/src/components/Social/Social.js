import React from 'react'
import { Link as ReLink } from 'rebass'

const defaultSocialLinks = [{ id: 1, title: 'twitter', link: '/' }, { id: 2, title: 'linkedin', link: '/' }, { id: 3, title: 'instagram', link: '/' }, { id: 1, title: 'facebook', link: '/' }, { id: 4, title: 'github', link: '/' }]


export function Social({ channels, ...props }) {
  return defaultSocialLinks.map((channel, i) => (
    <ReLink key={i} href={channel.link} color='inherit'>
      <i className={`fab fa-${channel.title} pr-2`} />
    </ReLink>
  ))
}
