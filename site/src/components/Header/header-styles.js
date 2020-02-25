export const headerStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  color: 'text',
  fontWeight: 'bold',
  width: 'full',
  height: 'headerHeight',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  zIndex: 3000,
  a: {
    color: 'inherit',
    "&:hover": {
      color: 'pink.2',
      textDecoration: 'none',
    },
    "&.nav-link": {
      color: 'text',
      "&:hover": {
        color: 'pink.2',
        textDecoration: 'none',
      },
    },
    "&.active": {
      color: 'active'
    }
  }
}
