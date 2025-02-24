import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {

    const {data} = useContext(UserContext)
  
    if(!data) return <div>Please enter the username</div>

    return <div>Welcome {data}</div>
   
}

export default Profile