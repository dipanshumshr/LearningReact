import Login from "./components/Login"
import Profile from "./components/Profile"
import LoginContextProvider from "./context/LoginContextProvider"


function App() {
  return (
    <LoginContextProvider>
        <Login/>
        <Profile/>
    </LoginContextProvider>
  )
}

export default App
