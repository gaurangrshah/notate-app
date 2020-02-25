import React from 'react'
import { Box, Button } from 'rebass'


export const ContactForm = ({ form, ...props }) => {
  return (
    <Box width='50%' as='form' p='4'>
      <label>{form.fields[0]}</label>
      <input style={{ width: '100%' }} />
      <label>{form.fields[1]}</label>
      <input style={{ width: '100%' }} />
      <label>{form.fields[2]}</label>
      <textarea style={{ width: '100%' }} />
      <Button mt='2' sx={{ float: 'right' }}>Send</Button>
    </Box>
  )
}
