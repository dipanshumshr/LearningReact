import { useState , useContext } from "react"
import UserContext from "../context/UserContext"

function Login()
{
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setData} = useContext(UserContext);

    const handleSubmission = (e) => {
        e.preventDefault();
        setData({username,password});
    }


    return(
        <div>
            <input value={username} onChange={ e=> setUsername(e.target.value)}/>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmission}>Login</button>
        </div>
    )
}

export default Login;