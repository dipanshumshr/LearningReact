import { useEffect, useState } from "react";
import { UserProvider } from "./context/user";

import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
  });

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if(storedUser)
    {
      setUserDetail(storedUser);
    }
  },[])

  const updateUser = (name, email) => {
    const newUser = {name,email}
    setUserDetail(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  };

  const logoutUser = () => {
    setUserDetail(() => {
      return {
        name: "",
        email: "",
      };
    });
    localStorage.removeItem("user")
  };

  return (
    <UserProvider value={{ userDetail, updateUser, logoutUser }}>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
