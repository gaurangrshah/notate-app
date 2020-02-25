import React, { useState, useEffect } from 'react'
import { FormInput } from './FormInput'

// const initialFormState =


export const UserForm = (currentUser, addUser, updateUser, editing, setEditing, ...props) => {

  // set state with current user or default empty user.
  const [user, setUser] = useState(editing ? currentUser : { id: null, firstName: '', lastName: '', username: '', email: '', password: '' })

  const handleInputChange = event => {
    console.log(event.target)
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }


  const handleSubmit = event => {
    event.preventDefault()
    console.log('clicked')
    if (!updateUser || !addUser) return

    if (updateUser) {
      console.log('updating')
      return updateUser(user.id, user)
    }

    if (!user.firstName || !user.lastName) return

    if (addUser) {
      console.log('adding')
      return addUser(user)
    }


  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <form onSubmit={handleSubmit}>
      <FormInput name='firstName' type='text' value={user.firstName} onChange={handleInputChange} />
      {/* <label htmlFor='firstName'>First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} /> */}
      <label htmlFor='lastName'>Last Name</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <button>Submit</button>
      {updateUser && <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
      }
    </form>
  )
}
