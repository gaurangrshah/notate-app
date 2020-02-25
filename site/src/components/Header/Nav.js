import React from 'react'
import { FlexWrap } from '../Containers'
import { NavLink } from './nav-links'

// removable...
const defaultPages = [{ page: 'Home', to: '#0' }, { page: 'Services', to: '#0' }, { page: 'CaseStudies', to: '#0' }, { page: 'Process', to: '#0' },]

export function Nav({ pageList = defaultPages, children, ...props }) {
  return (
    <>
      <FlexWrap as='nav' justifyContent='space-between'  {...props}>
        {pageList.map((page, i) => <NavLink key={i} to={page.path}>{page.page}</NavLink>)}
        {children}
      </FlexWrap>
    </>
  )
}

export default Nav
