import React from 'react'

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25},
    { id: 2, name: "Bob", age: 30},
    { id: 3, name: "Charlie", age: 22}
  ];

  return (
    <div>
      {users.map(({id, name, age}) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{age}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UserList