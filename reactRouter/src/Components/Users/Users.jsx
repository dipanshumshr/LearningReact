import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {username} = useParams()
  return (
    <div>
      <h1 className='bg-amber-600 text-3xl text-gray-700 p-6'> User Called : {username}</h1>
    </div>
  )
}

export default Users
