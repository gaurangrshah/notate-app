import React, { useState } from 'react'
import { Box, Heading, Text } from 'rebass'
import { Container } from '../components/Containers/Containers'
import UserTable from '../components/Tables/UserTable'
import { AddUserForm, EditUserForm } from '../components/Forms'
import { UserForm } from '../components/Forms/UserForm'
import { GetData } from '../utils/GetData'
import { useData } from '../hooks/useData'
const usersData = [
  { id: 1, firstName: 'Tania', lastName: 'floppydiskette', email: 'test@email.com', password: '123ten' },
  { id: 2, firstName: 'Craig', lastName: 'siliconeidolon', email: 'test@email.com', password: '123ten' },
  { id: 3, firstName: 'Ben', lastName: 'benisphere', email: 'test@email.com', password: '123ten' },
]

const initialFormState = { id: null, firstName: '', lastName: '', email: '', password: '' }

export default () => {
  const { data, updateData, callback } = useData('http://localhost:3000/users')
  const [users, setUsers] = useState(data || usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  console.log(data)
  return null
}
