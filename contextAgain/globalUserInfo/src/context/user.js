import { createContext } from "react";
import { useContext } from "react";

export const UserContext = createContext({
  userDetail: {
    name: "",
    email: "",
  },
  updateUser: () => {},
  logoutUser: () => {},
});

export const UserProvider = UserContext.Provider;

export const useUser = () => {
  return useContext(UserContext);
};
