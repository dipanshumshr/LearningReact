import React , {useState} from "react";
import LoginContext from "./LoginContext";

const LoginContextProvider = ({children}) => {
    const [data, setData] = useState({})
    return(
        <LoginContext.Provider value={{data,setData}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider