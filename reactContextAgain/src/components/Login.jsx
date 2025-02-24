import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Login() {
    const [username,setUsername] = useState("Dipanshu")
    const [password,setPassword] = useState("")
    const {setData} = useContext(UserContext);

    const handleClick = (e) => {
        e.preventDefault();
        setData(username)
    }
  return (
    <div>
        <input type='text' value={username} onChange={ e => setUsername(e.target.value)}/>
        <input type='text' value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login