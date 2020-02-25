import React from 'react'
import { stringUtils } from '../../utils'

export const FormInput = ({ name, type, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{stringUtils(name, 'camelToProper')}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </>
  )
}
