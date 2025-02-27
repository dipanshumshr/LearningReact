import React, { useContext, useState } from 'react'
import LoginContext from '../context/LoginContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const { setData } = useContext(LoginContext);

    const handleClick = (e) => {
        e.preventDefault();
        setData({username, password});
        setUsername("");
        setPassword("")
    }

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
            <form className="space-y-4">
                <input 
                    type="text" 
                    className="w-full py-2 px-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                />
                <input 
                type={show? "text" : "password"}
                className="w-full py-2 px-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
                <button className='text-amber-50' type="button" onClick={handleShow}>{show? "🥺" : "😖"}</button>
                <button 
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200"
                    onClick={handleClick}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login