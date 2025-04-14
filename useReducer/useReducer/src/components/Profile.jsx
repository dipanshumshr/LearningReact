import React from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const {userState , userDispatch} = useUser();

    const handleLogout = ()=>{
        userDispatch({
            type : "LOGOUT"
        })
    }

    if(!userState.name)
    {
        return <p>Welcome user Please login</p>
    }
  return (
    <div>
        <p>Hello {userState.name} , i hope you are doing well 😎😎</p>
        <p>This is your email 😵‍💫 {userState.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile