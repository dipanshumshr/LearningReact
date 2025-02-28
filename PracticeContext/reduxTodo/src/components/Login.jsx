import React from 'react';
import { useState } from 'react';
import { addWelcome } from '../features/login/loginSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [creds,setCreds] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch()

    const handleDispatch = () => {
        dispatch(addWelcome(creds))
        setCreds({username:"" , password: ""})
    }
  return (
    <div>
        <input placeholder='enter username' value={creds.username} onChange={e=> setCreds({...creds, username: e.target.value})}/>
        <input placeholder='enter password' value={creds.password} onChange={e=> setCreds({...creds,password : e.target.value})}/>
        <button onClick={handleDispatch}>Login</button>
    </div>
  )
}

export default Login