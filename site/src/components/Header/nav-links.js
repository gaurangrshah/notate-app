import React from 'react'
import { Link } from 'gatsby'
import { Link as ReLink, } from 'rebass'


export function NavLink({ to = '#0,', children, ...props }) {
  return (
    <Link
      as={ReLink}
      to={to}
      color='secondary'
      activeStyle={{ color: 'highlight' }}
      className='nav-link'
      {...props}
    >
      {children}
    </Link>
  )
}

