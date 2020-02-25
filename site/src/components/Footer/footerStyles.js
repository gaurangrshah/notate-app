export const footerStyles = {
  bg: 'gray.8',
  width: 'full',
  textAlign: 'center',
  color: 'white',
  a: {
    color: 'inherit',
    "&:hover": {
      color: 'secondaryHover',
      textDecoration: 'none',
    },
    "&.active": {
      color: 'active'
    }
  },
}
