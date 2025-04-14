import React, { useState } from 'react'
import { useUser } from '../context/UserContext'

function Login() {

    const {userDispatch} = useUser();


   const [user, setUser] = useState({
    name : "",
    email : "",
    password : "",
   })
   const handleUserValue = (e,value) => {
    setUser(prev =>{
        return {
            ...prev,
            [value] : e.target.value
        }
    })
   }

   const handleSubmission = () => {

    if(user.name && user.email && user.password)
    {
        userDispatch({
            type : "LOGIN",
            payload : user
        })
    }
    setUser({
        name : "",
        email : "",
        password : ""  
    })
}

  return (
    <div>
        <label>Name</label>
        {" "}
        <input type="text" value={user.name} placeholder= "Name" onChange={(event)=> handleUserValue(event,"name")}/>
        {" "}
        <label>Email</label>
        <input type="text" value={user.email} placeholder= "Email" onChange={(event)=> handleUserValue(event,"email")}/>
        {" "}
        <label>Password</label>
        <input type="text" value={user.password} placeholder= "Password" onChange={(event)=> handleUserValue(event,"password")}/>
        <button name = "login" onClick={handleSubmission}> Login</button>
    </div>
  )
}

export default Login