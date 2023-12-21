import React, { useState } from 'react'

const ListUser = () => {

  let [subTitle, setSubTitle] = useState('Show all')

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mohamed"
    },
    {
      id: 2,
      name: "Kamal"
    },
    {
      id: 3,
      name: "Basma"
    }
  ])

  const changeSubTitle = () => {
    setSubTitle("List of all costumers CIH")
    console.log(subTitle)
  }

  const deleteUser = user => {
    let newUsers = users.filter(currentUser => currentUser.id !== user.id)
    setUsers(newUsers)
  }

  return (
    <div>

      <h3>List of Users</h3>
      <p>{ subTitle }</p>

      <button onClick={changeSubTitle} className="btn btn-success">Change Subtitle</button> 

      <ul className="list-group">

        { users.map((user, index) => (<li key={index} className="list-group-item">
          {user.name}
              <div className="text-end">
                <button onClick={() => deleteUser(user)} className="btn btn-sm btn-danger my-3">Delete</button>
              </div>
        </li>) ) }

        
      </ul>

    </div>
  )
}

export default ListUser