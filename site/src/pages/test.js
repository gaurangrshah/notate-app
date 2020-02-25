import React, { useState } from 'react'
import { Box, Heading, Text } from 'rebass'
import { Container } from '../components/Containers/Containers'
import UserTable from '../components/Tables/UserTable'
import { AddUserForm, EditUserForm } from '../components/Forms'
import { UserForm } from '../components/Forms/UserForm'
import { GetData } from '../utils/GetData'

const usersData = [
  { id: 1, firstName: 'Tania', lastName: 'floppydiskette' },
  { id: 2, firstName: 'Craig', lastName: 'siliconeidolon' },
  { id: 3, firstName: 'Ben', lastName: 'benisphere' },
]



export default () => {

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, firstName: '', lastName: '', username: '', email: '', password: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <Container>
      <Heading as='h1'>Settings</Heading>
      <Box display='flex' mt='5'>
        <Box width='30%'>
          {/* {editing ? (
            <div>
              <Heading as='h2' fontSize='3'>Edit User</Heading>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <Heading as='h2' fontSize='3'>Add User</Heading>

                <AddUserForm addUser={addUser} />
              </div>
            )} */}

          {editing ? (
            <>
              <Heading as='h2' fontSize='3'>Edit User</Heading>
              <UserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
              <>
                <Heading as='h2' fontSize='3'>Add User</Heading>
                <UserForm addUser={addUser} />
              </>
            )}
        </Box>
        <Box flexBasis='1'>
          <Heading as='h2' fontSize='3'>Users:</Heading>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Box>
      </Box>
      <GetData />
    </Container>
  )
}
