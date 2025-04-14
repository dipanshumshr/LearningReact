import Login from "./components/Login"
import Profile from "./components/Profile"
import { UserProvider } from "./context/UserContext"
import { useReducer } from "react"

function userReducer(state,action)
{
    switch(action.type)
    {
      case "LOGIN" : 
      {
        return action.payload
      }
      case "LOGOUT" :
        {
          return {
            name: "",
            email: "",
            password: ""
          }
        }
        default:
          return state
    }
}

function App() {

  const [userState , userDispatch] = useReducer(userReducer, {
      name : "",
      email : "",
      password : ""
  })

  return (
    <UserProvider value = {{userState, userDispatch}}>
        <Login/>
        <Profile/>
    </UserProvider>
  )
}

export default App
