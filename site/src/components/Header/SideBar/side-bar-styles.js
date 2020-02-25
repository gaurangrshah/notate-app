export const sidebarMenuStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'primary',
  // transform: set via component -- requires props
  height: 'full',
  textAlign: 'left',
  padding: 5,
  top: 0,
  right: '-7em',
  // transform: 'translate3d(100%, 0 , 0)',
  transition: 'transform .3s cubic-bezier(0, .52, 0, 1)',
  zIndex: 0,
  boxShadow: 'default',
  a: {
    fontSize: [2, 3],
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s linear',
    textAlign: ['inherit', 'inherit', 'center'],
    "&:hover": {
      color: 'primaryHover'
    },
    "&:focus": {
      outline: 'none',
      border: 'none',
    }
  }
}

export const burgerStyles = {
  // https://github.com/maximakymenko/react-burger-menu-article-app/
  // position: 'fixed',
  // top: '1.3em',
  // right: '2em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: [8],
  height: [8],
  backgroundColor: 'transparent',
  borderRadius: 'default',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 1,
  '&:focus': {
    outline: 'none',
    border: 'none'
  }
}

export const burgerBarStyles = {
  height: [2],
  // background: set via component -- requires props
  display: 'flex',
  borderRadius: 'default',
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: '1px',
}
