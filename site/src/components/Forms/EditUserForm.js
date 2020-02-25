import React, { useState, useEffect } from 'react'

export const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label htmlFor='firstName'>First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
      <label htmlFor='lastName'> Last Name</label >
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form >
  )
}

