import React, { useState } from 'react'
import { FormInput } from './FormInput'

export const AddUserForm = props => {
  const initialFormState = { id: null, firstName: '', lastName: '', username: '', email: '', password: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    console.log(event.target)
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.firstName || !user.lastName) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <FormInput name='firstName' type='text' value={user.firstName} onChange={handleInputChange} />
      {/* <label htmlFor='firstName'>First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} /> */}
      {/* <label htmlFor='lastName'>Last Name</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} /> */}
      <button>Add new user</button>
    </form>
  )
}


