import React, { useState } from 'react';
import userContext from './UserContext';

function UserContextProvider({children}) {
  const [data, setData] = useState({
    username : "Customer",
    password : ""
  })
  return (
        <userContext.Provider value = {{data, setData}}>
            {children}
        </userContext.Provider>
  )
}
export default UserContextProvider