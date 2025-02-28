import Login from "./components/login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import { store } from "./app/store"

function App() {
  return(
    <Provider store={store}>
      <Login/>
      <Profile/>
    </Provider>
  )
}

export default App
