import React, { useEffect, useState } from 'react'
import Card from '../components/users/Card'

import axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState([])
    const [textSearch, setTextSearch] = useState(null)

    const getUsers = () => {
        axios.get('https://api.github.com/users')
        .then(data => {
            setUsers(data.data)
            console.log(data.data)
        })
        .catch()
    }

    const searchUsers = () => {
        fetch(`https://api.github.com/search/users?q=${textSearch}`)
        .then(res => res.json())
        .then(data => setUsers(data.items))
        .catch(err => console.log(err))
    }

    const deleteUserByLogin = (login) => {
        let newUsers = users.filter(user => user.login !== login)
        setUsers(newUsers)
    }

    useEffect(() => {
        getUsers()
    }, [])

  return (
    <>
    
    <div className="row my-5">
        <div className="col-6">
            <h2>List of Users</h2>
        </div>
        <div className="col-3 mx-auto text-end">
            <input onChange={(e) => setTextSearch(e.target.value)} className='form-control' type="search" placeholder='Search a user...'/>
            <button onClick={searchUsers} className="btn btn-success ms-2">Search</button>
            </div>
    </div>

    <div className="row my-4">
        {users.map(user => (
            <div className="col-3">
                <Card image={user.avatar_url} url={user.html_url} name={user.login} onDelete={ (e) => deleteUserByLogin(e) } />
            </div>
        ))}
        
    </div>

    </>
  )
}

export default Users