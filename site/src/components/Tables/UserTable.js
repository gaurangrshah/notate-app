/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Box, Heading, Text, Button } from 'rebass'

const borderTop = {
  borderTopColor: 'secondary',
  borderTopStyle: 'solid',
  borderTopWidth: 'px',
  pb: '3'
}

const borderRight = {
  pr: '3',
  borderRightColor: 'secondary',
  borderRightStyle: 'solid',
  borderRightWidth: 'px'
}

const UserTable = ({ users, ...props }) => (

  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody sx={{
      ...borderTop
    }}>
      {users.length > 0 ? (
        users.map(user => (
          <tr key={user.id} sx={{ ...borderTop }}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
              <Button onClick={() => { props.editRow(user) }} variant="simple" bg='muted'>Edit</Button>
              <Button onClick={() => props.deleteUser(user.id)} variant="simple" bg='muted'>Delete</Button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable
