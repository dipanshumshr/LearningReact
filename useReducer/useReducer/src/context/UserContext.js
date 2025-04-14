import { createContext, useContext } from 'react';

export const UserContext = createContext({
    userDetail : {
        name : "",
        email : "",
        password : ""
    },
    login : () => {},
    logout : () => {}
})

export const UserProvider = UserContext.Provider;

export const useUser = () => {
    return useContext(UserContext);
}

